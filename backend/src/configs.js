const {Sequelize} = require('sequelize')

const sequelize = new Sequelize("ChatApp", "postgres", "database", {
    host: "localhost",
    dialect: "postgres"
})

module.exports = sequelize