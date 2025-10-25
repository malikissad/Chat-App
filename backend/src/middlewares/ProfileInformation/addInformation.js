const db = require('../../../models/index.js')
const jwt = require('jsonwebtoken')
require('dotenv').config()
async function AddInformationMiddleware(req, res, next){
    
    try{
        
        const header = req.headers['authorization']
        // return res.json({message : header})
        const AccessToken = header && header.split(" ")[1]
        const {avatar ,bio ,tel} = req.body

        Access = jwt.verify(AccessToken, process.env.AccessToken)
        if(!Access){
            return res.status(401).json({message :"token invalide"})
        }
        
        await db.Profile.update({
            avatar : avatar || null,
            bio : bio || null,
            tel : tel || null},
            {where :{id_user : Access.id}}
        )
        
        return res.json({message : "modification réussite"})

    }catch(err){
        return res.json({message : err.message})
    }

}
module.exports = AddInformationMiddleware