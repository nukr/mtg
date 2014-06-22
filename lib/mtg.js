require('./models/card')
require('./models/set')
var request = require('request')
var mongoose = require('mongoose')
var fs = require('fs')
var Card = mongoose.model('Card')
var Set = mongoose.model('Set')

var MTG = {}

MTG.json2db = function (callback) {
    mongoose.connect('mongodb://localhost/mtgdb')
    fs.readFile('cards.json', function (err, data) {
        var sets = JSON.parse(data)
        insert2db(sets, function () {
            mongoose.disconnect()
            callback()
        })
    })
}

MTG.download = function (callback) {
    var url = 'http://mtgjson.com/json/AllSetsArray-x.json'
    var req = request(url)
    req.pipe(fs.createWriteStream('cards.json'))
    req.on('data', function (chunks) {
    })
    req.on('end', function () {
        callback()
    })
}

function insert2db(sets, finish) {
    var setsCounter = 0, cardsCounter = 0

    function saveSets() {
        var set = sets.shift()
        var cards = set.cards
        delete set.cards
        var s = new Set(set)
        s.save(function (err, doc) {
            saveCards(cards, doc)
        })
    }

    function saveCards(cards, doc) {
        var card = cards.shift()
        card._set = doc._id
        var c = new Card(card)
        c.save(function (err) {
            if (cards.length === 0 && sets.length === 0) {
                finish()
            } else if (cards.length === 0) {
                saveSets()
            } else {
                saveCards(cards, doc)
            }
        })
    }

    saveSets()

}

module.exports = MTG
