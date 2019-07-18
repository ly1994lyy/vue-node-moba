const mongoose = require('mongoose')

const scheme = new mongoose.Schema({
    name:{ type:String },
    icon:{type:String},
    property:[{
            body:{type:String},
        }]
})

module.exports = mongoose.model('Rune', scheme)