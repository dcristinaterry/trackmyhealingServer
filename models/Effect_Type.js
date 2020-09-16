module.exports = function (sequelize, DataTypes) {
    var Effect_Type = sequelize.define("Effect_Type", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    })

    Effect_Type.associate = function (models) {
        models.Effect_Type.hasMany(models.Effects)
    }
    return Effect_Type;
}
