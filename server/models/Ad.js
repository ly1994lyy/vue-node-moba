const mongoose = require('mongoose')

const scheme = new mongoose.Schema({
    name:{ type:String },
    items:[{
        image:{type:String},
        url:{type:String}
    }]
})

module.exports = mongoose.model('Ad', scheme)