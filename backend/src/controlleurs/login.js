const CheckInfo = require('../middlewares/Auth.js')
require('dotenv').config()
function Login(req, res){
   res.cookie(process.env.RefreshToken, req.token.RefreshToken,{
    httpOnly : true,
    secure: false,
    sameSite: "strict",
    maxAge : 120 * 1000
   })

   return res.json({AccessToken : req.token.AccessToken})
}

module.exports = Login