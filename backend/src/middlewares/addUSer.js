const db = require('../../models/index.js') 
const bcrypt = require('bcrypt')

async function Add(req, res, next){
    try{

        const { v4:uuid} = await import('uuid')
        const hashpassword = await bcrypt.hash(res.locals.info.password, 10)
        const id = uuid()
        // return res.json({id : id})
        await db.Users.create({
            id_user : id,
            username : res.locals.info.username,
            email : res.locals.info.email,
            Name : res.locals.info.Name,
            password : hashpassword
        })
        next()
    }catch(err){
        return res.status(500).json({"message" : err.message})
    }
}

module.exports = Add