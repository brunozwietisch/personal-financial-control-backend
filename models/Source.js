const { DataTypes } = require("sequelize");
const db = require("../db/conn");

const Source = db.define(
  "sources",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT("long"),
      allowNull: true,
    },
  },
  {
    paranoid: true,
  }
);

module.exports = Source;
