const express = require('express')
const Router = express.Router()

const Login = require('../controlleurs/login.js')
const CheckInfo = require('../middlewares/Auth.js')
const generToken = require('../middlewares/Auth.js')
const Protected = require('../controlleurs/protected.js')
const {VerifyAccessToken, VerifyRefreshToken} = require('../middlewares/verifyToken.js')

Router.post("/login", CheckInfo, generToken, Login)
Router.get("/protected",VerifyAccessToken, Protected)

Router.post("/refresh", VerifyRefreshToken, (req,res) => {
    return res.json({AccessToken : res.locals.AccessToken})
})
module.exports = Router