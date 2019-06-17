const mongoose = require('mongoose')

const scheme = new mongoose.Schema({
    name:{ type:String },
    avatar:{ type:String }
})

module.exports = mongoose.model('Hero', scheme)