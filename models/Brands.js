module.exports = function (sequelize, DataTypes) {
    var Brand = sequelize.define("Brand", {
        brand_name:{
            type: DataTypes.STRING
        }
    })

    Brand.associate = function (models) {
        models.Brand.hasMany(models.Product_Brand);
    }
    return Brand;
}
