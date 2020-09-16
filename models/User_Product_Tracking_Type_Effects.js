module.exports = function (sequelize, DataTypes) {
    var User_Product_Tracking_Type_Effects = sequelize.define("User_Product_Tracking_Type_Effects", {
        name: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    })

    User_Product_Tracking_Type_Effects.associate = function (models) {
        models.User_Product_Tracking_Type_Effects.belongsTo(models.User_Product_Tracking);
        models.User_Product_Tracking_Type_Effects.belongsTo(models.Effects);
    }
    return User_Product_Tracking_Type_Effects;
}