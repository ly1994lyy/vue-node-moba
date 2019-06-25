module.exports = app => {
    const router = require('express').Router()
    const mongoose = require('mongoose')
    const Category = mongoose.model('Category')
    const Article = mongoose.model('Article')


    router.get('/news/list', async (req,res)=>{
        // const parent = await Category.findOne({
        //     name:"新闻分类"
        // }).populate({
        //     path:'children',
        //     populate:{
        //         path:'newsList'
        //     }
        // }).lean()
        const parent = await Category.findOne({
            name:'新闻分类'
        })
        const cats = await Category.aggregate([
            {$match:{parent:parent._id}},
            {
                $lookup:{
                    from:'articles',
                    localField:'_id',
                    foreignField:'categories',
                    as:'newsList'
                }
            },
            {
                $addFields:{
                    newsList:{$slice:['$newsList',5]}
                }
            }
        ])
        const subCats = cats.map(v=>v._id)
        cats.unshift({
            name:'热门',
            newsList: await Article.find().where({
                categories:{$in: subCats}
            }).populate('categories').limit(5).lean()
        })

        cats.map(cat => {
            cat.newsList.map(news => {
                news.categoryName = cat.name === '热门'? news.categories[0].name : cat.name
                return news
            })
            return cat
        })
        res.send(cats)
    })


    app.use('/web/api',router)
}