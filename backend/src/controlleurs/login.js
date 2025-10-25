const CheckInfo = require('../middlewares/Auth.js')
require('dotenv').config()
function Login(req, res){
   res.cookie(process.env.RefreshToken, req.token.RefreshToken,{
    httpOnly : false,
    secure: false,
    sameSite: "lax",
    maxAge : 120 * 1000,
   })

   return res.json({AccessToken : req.token.AccessToken})
}

module.exports = Login