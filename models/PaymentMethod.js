const { DataTypes } = require("sequelize");
const db = require("../db/conn");

const PaymentMethod = db.define(
  "payment_methods",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT("long"),
    },
    icon: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    paranoid: true,
  }
);

module.exports = PaymentMethod;
