module.exports = options =>{
    const AdminUser = require('../models/AdminUser')
    const jwt = require('jsonwebtoken')
    const assert = require('http-assert')

    return async (req,res,next)=>{
        const modelName = require('inflection').classify(req.params.resource)
        req.Model = require(`../models/${modelName}`)
        next()
    }
}