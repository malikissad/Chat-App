const express = require('express')
const RouterP = express.Router()

const AddInformationMiddleware = require('../middlewares/ProfileInformation/addInformation.js')
RouterP.post("/addInformation", AddInformationMiddleware)


module.exports = RouterP