const { DataTypes } = require("sequelize");
const db = require("../db/conn");

const CashFlowEntry = db.define(
  "cash_flow_entrys",
  {
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    amount: {
      type: DataTypes.DECIMAL(10, 2),
    },
    date_entry: {
      type: DataTypes.DATE,
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    payment_method: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    source: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    notes: {
      type: DataTypes.TEXT("long"),
    },
    tags: {
      type: DataTypes.TEXT("long"),
    },
  },
  {
    paranoid: true,
  }
);

module.exports = CashFlowEntry;
