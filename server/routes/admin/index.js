module.exports = app =>{
    const express = require('express')
    const AdminUser = require('../../models/AdminUser')
    const jwt = require('jsonwebtoken')
    const assert = require('http-assert')
    const router = express.Router({
        mergeParams:true
    })
    //登录校验中间件
    const authMiddleware = require('../../middleware/auth')
    const resourceMiddleware = require('../../middleware/resource')

    //创建资源
    router.post('/', authMiddleware(), async (req,res)=>{
        const model = await req.Model.create(req.body)
        res.send(model)
    })

    //更新资源
    router.put('/:id', authMiddleware(), async (req,res)=>{
        const model = await req.Model.findByIdAndUpdate(req.params.id,req.body)
        res.send(model)
    })

    //删除资源
    router.delete('/:id', authMiddleware(), async (req,res)=>{
        const model = await req.Model.findByIdAndDelete(req.params.id,req.body)
        res.send({
            success:true
        })
    })

    //资源列表
    router.get('/', authMiddleware(), async (req,res)=>{
        const queryOption = {}
        if (req.Model.modelName === 'Category'){
            queryOption.populate = 'parent'
        }
        const items = await req.Model.find().setOptions(queryOption)
        res.send(items)
    })

    //资源详情
    router.get('/:id', authMiddleware(), async (req,res)=>{
        const model = await req.Model.findById(req.params.id)
        res.send(model)
    })
    app.use('/admin/api/rest/:resource',authMiddleware(), resourceMiddleware(), router)

    const multer = require('multer')
    const upload = multer({dest:__dirname + '/../../uploads'})
    app.post('/admin/api/upload', upload.single('file'), async (req,res)=>{
        const file = req.file
        file.url = `http://localhost:3000/uploads/${file.filename}`
        res.send(file)
    })

    app.post('/admin/api/login',async (req,res)=>{
        const { username,password } = req.body
        const user = await AdminUser.findOne({username})
        assert(user,422,'用户不存在')
        const isValid = require('bcrypt').compareSync(password,user.password)
        assert(isValid,422,'密码错误!')
        const token = jwt.sign({id:user._id},app.get('secret'))
        res.send({token})
    })

    app.use(async (err,req,res,next)=>{
        res.status(err.statusCode || 500).send({
            message:err.message
        })
    })
}