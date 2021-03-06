const mongoose = require('mongoose')

const scheme = new mongoose.Schema({
    name:{ type:String },
    avatar:{ type:String },
    banner:{ type:String },
    title:{ type:String },
    categories:[{ type:mongoose.SchemaTypes.ObjectId, ref:'Category' }],
    runeTips:[{type:mongoose.SchemaTypes.ObjectId,ref:'Rune'}],
    skillTips:[{type:mongoose.SchemaTypes.ObjectId,ref:'Skill'}],
    mainSkill:{type:Object},
    secSkill:{type:Object},
    scores:{
        difficult:{type:Number},
        skills:{type:Number},
        attack:{type:Number},
        survive:{type:Number},
    },
    skills:[{
        icon:{type:String},
        delay:{type:String},
        cost:{type:String},
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
        hero:{type:mongoose.SchemaTypes.ObjectId, ref:'Hero'},
        description:{type:String}
    }],
    fearHeros:[{
        hero:{type:mongoose.SchemaTypes.ObjectId, ref:'Hero'},
        description:{type:String}
    }],
    attackHeros:[{
        hero:{type:mongoose.SchemaTypes.ObjectId, ref:'Hero'},
        description:{type:String}
    }]
})

module.exports = mongoose.model('Hero', scheme,'heroes')