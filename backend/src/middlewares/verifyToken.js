require('dotenv').config()
const jwt = require('jsonwebtoken')

function VerifyAccessToken(req,res,next){
    const header = req.headers['authorization']
    const Access = header && header.split(" ")[1]
    
    jwt.verify(Access, process.env.AccessToken, (err, decode) => {
        if(err){
            return res.json({messageAccess : err.message})
        }
        res.locals.decode = decode
        next()
    })
}


function VerifyRefreshToken(req,res,next){
    const Refresh = req.cookies.RefreshToken

    jwt.verify(Refresh, process.env.RefreshToken, (err, decode)=>{
        if(err){
            return res.json({
                messageRefresh: err.message,
                message: "on peut pas générer du access token car le refresh token est invalide"
            })
        }else{
            const access = jwt.sign(
                {
                    id: decode.id_user,
                    username: decode.username
                },
                process.env.AccessToken,
                {expiresIn: process.env.AccessExpired}
            )

            res.locals.AccessToken = access
            next()
        }
    })


}

module.exports = {
    VerifyAccessToken,
    VerifyRefreshToken
}