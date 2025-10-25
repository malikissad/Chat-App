const db = require('../../../models/index.js')
const jwt = require('jsonwebtoken')
async function AddInformationMiddleware(req, res, next){
    
    try{
        
        const header = req.headers['authorization']
        const AccessToken = header && header.split(" ")[1]
        const {avatar ,bio ,tel} = req.body

        Access = jwt.decode(AccessToken)
        if(!Access){
            return res.status(400).json({message :"token invalide"})
        }

        //trouver le user
        

        return res.json({message : "information ajouter avec succée"})

    }catch(err){
        return res.json({message : err.message})
    }

}
module.exports = AddInformationMiddleware