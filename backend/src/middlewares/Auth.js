const db = require('../../models/index.js')
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")
require('dotenv').config()


async function CheckInfo(req, res, next){
    const {username, password} = req.body

    try{

        if(!username || !password){
            return res.status(400).json({message : "manque d'information"})
        }

        // trouver le user
         const find = await db.Users.findOne({
            where: {username: username},
        })
         
        if(!find){
            return res.status(404).json({message: "le user n'existe pas"})
        }

        //comparer le password

        const validPassword = await bcrypt.compare(password, find.password)
        if(!validPassword){
            return res.status(401).json({message: "mot de pass faux"})
        }else{
          req.info = find
            next()
        }         
         
    }catch(err){
        return res.status(500).json({message : err.message})
    }
}

function generToken(req,res,next){
    //generer les token

    const RefreshToken = jwt.sign(
        {
            id : req.info.id_user,
            username : req.info.username
        },
        process.env.RefreshToken,
        {expiresIn: process.env.RefreshExpired}
    )

    const AccessToken = jwt.sign(
        {
            id : req.info.id_user,
            username : req.info.username
        },
        process.env.AccessToken,
        {expiresIn: process.env.AccessExpired}
    )
    req.token = {RefreshToken,AccessToken}
   next()
}


module.exports = [
    CheckInfo,
    generToken,
]