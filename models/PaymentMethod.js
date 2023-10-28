const { DataTypes } = require("sequelize");
const db = require("../db/conn");

module.exports = db.define(
  "payment_methods",
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
