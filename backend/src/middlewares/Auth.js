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

        const profile = await db.Profile.findOne({
            where: {id_user : find.id_user}
        })
        
        //comparer le password
        const validPassword = await bcrypt.compare(password, find.password)
        if(!validPassword){
            return res.status(401).json({message: "mot de pass faux"})
        }else{
          req.info = {find ,profile}
        //   return res.json(find)
        
            next()
        }         
         
    }catch(err){
        return res.status(500).json({message : err.message})
    }
}

async function generToken(req,res,next){
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
            id : req.info.find.id_user,
            username : req.info.find.username,
            avatar: req.info?.profile?.avatar || null,
            bio : req.info?.profile?.bio || null,
            tel : req.info?.profile?.tel || null,

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