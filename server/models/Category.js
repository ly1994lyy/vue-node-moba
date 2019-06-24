const mongoose = require('mongoose')

const scheme = new mongoose.Schema({
    name:{ type:String },
    parent:{ type:mongoose.SchemaTypes.ObjectId, ref:"Category" }
})

scheme.virtual('children',{
    localField:'_id',
    foreignField:'parent',
    justOne:false,
    ref:"Category"
})

scheme.virtual('newsList',{
    localField:'_id',
    foreignField:'categories',
    justOne:false,
    ref:"Article"
})


module.exports = mongoose.model('Category', scheme)