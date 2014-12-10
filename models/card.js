var mongoose = require('mongoose')
var Schema = mongoose.Schema

var CardSchema = new Schema({
    layout: String,
    name: String,
    names: [String],
    manaCost: String,
    cmc: Number,
    colors: [String],
    type: String,
    supertypes: [String],
    types: [String],
    subtypes: [String],
    rarity: String,
    text: String,
    flavor: String,
    artist: String,
    number: String,
    power: String,
    toughness: String,
    loyalty: Number,
    multiverseid: Number,
    variations: [Number],
    imageName: String,
    watermark: String,
    border: String,
    hand: Number,
    life: Number,
    rulings: [{
        data: Date,
        text: String
    }],
    foreignNames:[{
        language: String,
        name: String
    }],
    printings: [String],
    originalText: String,
    originalType: String,
    legalities: String,
    setCode: String
})

mongoose.model('Card', CardSchema)
