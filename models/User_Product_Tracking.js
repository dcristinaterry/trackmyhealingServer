module.exports = (sequelize, DataTypes) => {
    var User_Product_Tracking = sequelize.define("User_Product_Tracking", {
        dosage_value: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });

    User_Product_Tracking.associate = (models) => {
        models.User_Product_Tracking.belongsTo(models.User);
        models.User_Product_Tracking.belongsTo(models.Brand);
        models.User_Product_Tracking.belongsTo(models.Consumption_Type);
        models.User_Product_Tracking.belongsTo(models.Product);
        models.User_Product_Tracking.hasMany(models.Product_Was_Taken)
        models.User_Product_Tracking.hasMany(models.Dosage_Type)
        models.User_Product_Tracking.hasMany(models.User_Product_Tracking_Type_Effects)

    }
    return User_Product_Tracking
}