module.exports = app => {
    const router = require('express').Router()
    const mongoose = require('mongoose')
    const Category = mongoose.model('Category')
    const Article = mongoose.model('Article')


    router.get('/news/list', async (req,res)=>{
        const parent = await Category.findOne({
            name:"新闻分类"
        }).populate({
            path:'children',
            populate:{
                path:'newsList'
            }
        }).lean()
        res.send(parent)
    })

    app.use('/web/api',router)
}