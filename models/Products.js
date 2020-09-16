module.exports = function (sequelize, DataTypes) {
    var Product = sequelize.define("Product", {
        product_name:{
            type: DataTypes.STRING,
            allowNull: false
        }

    })

    Product.associate = function (models) {
        models.Product.hasMany(models.Product_Brand);
       
    }
    return Product;
}
