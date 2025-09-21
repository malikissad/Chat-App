const express = require('express')
const sequelize = require('./src/configs.js')
const Router = require('./src/routes/Auth.js')
const bcryp = require('bcrypt')
const db = require('./models/index.js')
const cookieParser = require('cookie-parser')
const app = express()
const port = 3000

app.use(express.json())
app.use(cookieParser())
app.use('/auth',Router)

app.get('/add', async (req,res) => {
    const {id, username, email, avatar, password} = req.body
    
    try{
       const passwordCrypt = await bcryp.hash(password,10)
       const user = await db.Users.create({
         id, 
         username, 
         email, 
         avatar, 
         password : passwordCrypt
       })
       res.json({message : `compte de ${username} créer`})
    }catch(err){
        res.json({message : err.message})
    }
})



app.listen(port)