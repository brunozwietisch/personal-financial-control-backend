const { DataTypes } = require("sequelize");
const db = require("../db/conn");

const CashFlowOutflow = db.define(
  "cash_flow_outflows",
  {
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    amount: {
      type: DataTypes.DECIMAL,
    },
    date_entry: {
      type: DataTypes.DATE,
    },
    due_date: {
      type: DataTypes.DATE,
    },
    parcel: {
      type: DataTypes.STRING,
    },
    is_executed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
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

module.exports = CashFlowOutflow;
