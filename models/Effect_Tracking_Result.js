
module.exports=function(sequelize,DataTypes){
    var Effect_Tracking_Result=sequelize.define("Effect_Tracking_Result",{})

    Effect_Tracking_Result.associate= (models)=>{
        models.Effect_Tracking_Result.belongsTo(models.Tracking_Result);
        models.Effect_Tracking_Result.belongsTo(models.Effects);
    }
    return Effect_Tracking_Result
}