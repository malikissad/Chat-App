const db = require('../../models/index.js')

async function Register(req,res){
    return res.status(201).json({message : "compte ajouter"})
}

module.exports = Register