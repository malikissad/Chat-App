require('dotenv').config()
const jwt = require('jsonwebtoken')

function VerifyAccessToken(req,res,next){
   try{
     const header = req.headers['authorization']
    const Access = header && header.split(" ")[1]

    if(!header || !Access){
        return res.status(400).json({message : "token not found"})
    }
    
    jwt.verify(Access, process.env.AccessToken, (err, decode) => {
        if(err){
            return res.status(401).json({message : err.message})
        }
        res.locals.decode = decode
        next()
    })
   }catch(err){
    return res.json({message : err.message})
   }
}


function VerifyRefreshToken(req,res,next){
    try{
        // console.log(req.cookies)
        const Refresh = req.cookies.RefreshToken
        // return res.json({RefreshToken : Refresh})
        if(!Refresh){
            return res.status(400).json({message : 'token existe pas'})
        }

        jwt.verify(Refresh, process.env.RefreshToken, (err, decode)=>{
        if(err){
            return res.status(403).json({
                messageRefresh: err.message,
                message: "on peut pas générer du access token car le refresh token est invalide"
            })
        }else{
            const access = jwt.sign(
                {
                    id: decode.id,
                    username: decode.username,
                    avatar: decode?.avatar || null,
                    bio : decode?.bio || null,
                    tel : decode?.tel || null

                },
                process.env.AccessToken,
                {expiresIn: process.env.AccessExpired}
            )

            res.locals.AccessToken = access
            next()
        }
    })


    }catch(err){
        return res.status(500).json({message : err.message})
    }

}

module.exports = {
    VerifyAccessToken,
    VerifyRefreshToken
}