
module.exports=(sequelize,DataTypes)=>{
    var Effects=sequelize.define("Effects",{
    })

    Effects.associate= (models)=>{
        models.Effects.belongsTo(models.Effect_Type);
        models.Effects.hasMany(models.Effect_Tracking_Result)
        models.Effects.hasMany(models.User_Product_Tracking_Type_Effects)
   
    }
    return Effects
}