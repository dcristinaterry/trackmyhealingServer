
module.exports=(sequelize,DataTypes)=>{
    var Tracking_Result=sequelize.define("Tracking_Result",{
        product_notes:{
            type:DataTypes.STRING,
            allowNull:true
        },
        effect_notes:{
            type:DataTypes.STRING,
            allowNull:true
        }       
    })

    Tracking_Result.associate= (models)=>{
        models.Tracking_Result.belongsTo(models.User);
        models.Tracking_Result.hasMany(models.Effect_Tracking_Result)
        models.Tracking_Result.hasMany(models.Product_Was_Taken)
   
    }
    return Tracking_Result
}