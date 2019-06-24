const mongoose = require('mongoose')

const scheme = new mongoose.Schema({
    title:{ type:String },
    body:{ type:String },
    categories:[{ type:mongoose.SchemaTypes.ObjectId, ref:'Category' }],
},{
    timestamps:true
})

module.exports = mongoose.model('Article', scheme)