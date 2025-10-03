const db = require('../../models/index.js')

async function Register(req,res){
    return res.status(201).json({message : "compte créer avec succés"})
}

module.exports = Register