const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns

    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // reader_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: "reader",
    //     key: "id",
    //   },
    // },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "product_tag",
  }
);

module.exports = ProductTag;
