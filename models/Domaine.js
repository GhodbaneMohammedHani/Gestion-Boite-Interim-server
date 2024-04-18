const {sequelize,DataTypes,Model}=require('./db');
class Domaine extends Model {};
Domaine.init({
    num_domaine:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false,
        autoIncrement:true
    },
    nom_domaine:{
        type:DataTypes.STRING
    }
},{sequelize});
module.exports=Domaine;