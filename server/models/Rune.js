const mongoose = require('mongoose')

const scheme = new mongoose.Schema({
    name:{ type:String },
    icon:{type:String},
    item1:{type:String},
    item2:{type:String},
    item3:{type:String},
})

module.exports = mongoose.model('Rune', scheme)