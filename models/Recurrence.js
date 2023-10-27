const { DataTypes } = require("sequelize");
const db = require("../db/conn");

const Recurrence = db.define(
  "recurrences",
  {
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    amount: {
      type: DataTypes.DECIMAL,
    },
    start_date: {
      type: DataTypes.DATE,
    },
    recurrence_frequency: {
      type: DataTypes.ENUM(["daily", "weekly", "monthly", "yearly"]),
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

module.exports = Recurrence;
