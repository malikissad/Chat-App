function Protected(req,res){
   return res.json({AccessToken : res.locals.AccessToken})
}

module.exports = Protected