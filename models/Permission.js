const { DataTypes } = require("sequelize");
const db = require("../db/conn");

const Permission = db.define("Permission", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  paranoid: true,
});

module.exports = Permission;
