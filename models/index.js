// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// Products belongsTo Category
// Product.init(
//   {
 

  //   id: {
  //     type: DataTypes.INTEGER,
  //     allowNull: false,
  //     primaryKey: true,
  //     autoIncrement: true,
  //   },
  //   product_name: {
  //     type: DataTypes.STRING,
  //     allowNull: false,
  //   },
  //   price: {
  //     type: DataTypes.INTEGER,
  //     allowNull: false,
  //   },
  //   stock: {
  //     type: DataTypes.INTEGER,
  //     allowNull: false,
  //   },
  //   category_id: {
  //     type: DataTypes.INTEGER,
  //     references: {
  //       model: "category",
  //       key: "id",
  //     },
  //   },
  // },

Product.belongsTo(Category,
//   {
//   foreignKey:'product_id',
//   onDelete: 'CASCADE',
// }

  );

// Categories have many Products
Category.hasMany(Product, {
  foreignKey:'category_id',
  onDelete: 'CASCADE',
});

// Products belongToMany Tags (through ProductTag)

Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    unique: false,
  },
});
// Product.belongsToMany(Tag);
//---------------

// Tags belongToMany Products (through ProductTag)

Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    unique: false,
  },
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
