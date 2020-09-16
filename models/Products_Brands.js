module.exports = function (sequelize, DataTypes) {
    var Product_Brand = sequelize.define("Product_Brand", {})

    Product_Brand.associate = function (models) {
        models.Product_Brand.belongsTo(models.Product)
        models.Product_Brand.belongsTo(models.Brand)
    }
    return Product_Brand;
}
