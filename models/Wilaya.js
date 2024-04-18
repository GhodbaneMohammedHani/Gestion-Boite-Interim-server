const {sequelize,DataTypes,Model}=require('./db');
class Wilaya extends Model {};
Wilaya.init({
    num_wilaya:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false
    },
    nom_wilaya:{
        type:DataTypes.STRING
    }
},{sequelize});
module.exports=Wilaya;
