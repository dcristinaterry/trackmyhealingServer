module.exports = function (sequelize, DataTypes) {
    var Consumption_Type = sequelize.define("Consumption_Type", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    })

    Consumption_Type.associate = function (models) {
        models.Consumption_Type.hasMany(models.User_Product_Tracking)
    }
    return Consumption_Type;
}
