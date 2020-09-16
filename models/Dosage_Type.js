module.exports = function (sequelize, DataTypes) {
    var Dosage_Type = sequelize.define("Dosage_Type", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    })

    Dosage_Type.associate = function (models) {
        models.Dosage_Type.belongsTo(models.User_Product_Tracking)
    }
    return Dosage_Type;
}
