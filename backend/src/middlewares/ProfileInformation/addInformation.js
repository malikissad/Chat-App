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
        

        // const profile = await db.Profile.findOne({
        //     where : {id_user : Access.id}
        // })
        await db.Profile.update({
            avatar : avatar || null,
            bio : bio || null,
            tel : tel || null},
            {where :{id_user : Access.id}}
        )
        
        return res.json({message : "modification réuss ite"})

    }catch(err){
        return res.json({message : err.message})
    }

}
module.exports = AddInformationMiddleware