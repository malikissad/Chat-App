const db = require('../../models/index.js') 
const bcrypt = require('bcrypt')
async function Add(req, res, next){
    try{
        const hashpassword = await bcrypt.hash(res.locals.info.password, 10)
        
        await db.Users.create({
            id_user : res.locals.info.id,
            username : res.locals.info.username,
            email : res.locals.info.email,
            password : hashpassword
        })
        next()
    }catch(err){
        return res.status(500).json({"message" : err.message})
    }
}

module.exports = Add