const { DataTypes } = require("sequelize");
const db = require("../db/conn");

module.exports = db.define(
  "categories",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT("long"),
    },
    color: {
      type: DataTypes.STRING,
    },
    icon: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    paranoid: true,
  }
);
