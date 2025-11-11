require('dotenv').config()
const jwt = require('jsonwebtoken')
const {upload} = require('../multer.js')
const db = require('../../../models/index.js')
async function AddInformationMiddleware(req, res, next){
    

    const file = upload.single('avatar')
    
    file(req, res, async function(err){
        if(err){
            return res.status(400).json({message : err.message})
        }

        try{
            if(!req.file){
                return res.status(400).json("pas de fichier")
            }


            const avatar = req.file.path
            const {tel,bio} = req.body
            const header = req.headers['authorization']
            const AccessToken = header && header.split(' ')[1] 
            const Access = jwt.decode(AccessToken) 
            await db.Profile.update({
                 avatar,
                 tel,
                 bio
                },{
                 where:{id_user : Access.id} 
                }
            )
            return res.json({message : "update est fait"})
        }catch(err){
            return res.json({message : err.message})
        }
    })
    
}
module.exports = AddInformationMiddleware