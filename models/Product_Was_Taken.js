
module.exports=function (sequelize,DataTypes){
    var Product_Was_Taken=sequelize.define("Product_Was_Taken",{})
    
    Product_Was_Taken.associate= (models)=>{
        models.Product_Was_Taken.belongsTo(models.Tracking_Result);
        models.Product_Was_Taken.belongsTo(models.User_Product_Tracking);
    }
    return Product_Was_Taken
}