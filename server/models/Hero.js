const mongoose = require('mongoose')

const scheme = new mongoose.Schema({
    name:{ type:String },
    avatar:{ type:String },
    title:{ type:String },
    categories:[{ type:mongoose.SchemaTypes.ObjectId, ref:'Category' }],
    scores:{
        difficult:{type:Number},
        skills:{type:Number},
        attack:{type:Number},
        survive:{type:Number},
    },
    skills:[{
        icon:{type:String},
        name:{type:String},
        description:{type:String},
        tips:{type:String},
    }],
    item1:[{type:mongoose.SchemaTypes.ObjectId, ref:'Item'}],
    item2:[{type:mongoose.SchemaTypes.ObjectId, ref:'Item'}],
    usageTips:{type:String},
    battleTips:{type:String},
    teamTips:{type:String},
    partners:[{
        type:mongoose.SchemaTypes.ObjectId, ref:'Item',
        description:{type:String}
    }]
})

module.exports = mongoose.model('Hero', scheme,'heroes')