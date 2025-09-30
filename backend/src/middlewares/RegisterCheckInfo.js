const db = require('../../models/index.js')

async function CheckInfoR(req, res, next){
    try{
        const {username, email, password} = req.body
    if(!username || !email || !password){
        return res.status(400).json({message : "manque d'information"})
    }

    const user = await db.Users.findOne({
        where: {username : username}
    })


    if(user){
        return res.status(409).json({message : "compte existe déjà"})
    }
    res.locals.info = {username, email, password}
    next()

    }catch(err){
        return res.status(500).json({message : err.message})
    }

}

module.exports = CheckInfoR