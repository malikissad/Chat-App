function Protected(req,res){
    res.json({messageBon : res.locals.decode})
}

module.exports = Protected