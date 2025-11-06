function Protected(req,res){
    res.json({message : res.locals.decode})
}

module.exports = Protected