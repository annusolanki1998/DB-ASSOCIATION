const Sequelize = require("sequelize");

const sequelize = new Sequelize("annudb", "root", "Annu@12345", {
    dialect: "mysql",
    host: "localhost",
});

module.exports = sequelize;