const { DataTypes } = require("sequelize");
const db = require("../db/conn");

module.exports = db.define(
  "sources",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT("long"),
    }
  },
  {
    paranoid: true,
  }
);
