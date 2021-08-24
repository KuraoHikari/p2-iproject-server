"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Watchlist extends Model {
    static associate(models) {
      Watchlist.belongsTo(models.User, { foreignKey: "UserId" });
    }
  }
  Watchlist.init(
    {
      url: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notEmpty: { msg: "url cannot be null" },
          notNull: { msg: "url cannot be null" },
        },
      },
      image_url: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notEmpty: { msg: "image_url cannot be null" },
          notNull: { msg: "image_url cannot be null" },
        },
      },
      title: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notEmpty: { msg: "title cannot be null" },
          notNull: { msg: "title cannot be null" },
        },
      },
      episodes: {
        allowNull: false,
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: { msg: "episodes cannot be null" },
          notNull: { msg: "episodes cannot be null" },
        },
      },
      rated: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notEmpty: { msg: "rated cannot be null" },
          notNull: { msg: "rated cannot be null" },
        },
      },
      UserId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: { msg: "UserId cannot be null" },
          notNull: { msg: "UserId cannot be null" },
        },
      },
    },
    {
      sequelize,
      modelName: "Watchlist",
    }
  );
  return Watchlist;
};
