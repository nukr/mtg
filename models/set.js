var mongoose = require('mongoose')
var Schema = mongoose.Schema

var SetSchema = new Schema({
    name : String,
    code : String,
    gathererCode : String,
    oldCode : String,
    releaseDate : Date,
    border : String,
    type : String,
    block : String,
    booster : [String]
})

mongoose.model('Set', SetSchema)
