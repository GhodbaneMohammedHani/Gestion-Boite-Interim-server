const {sequelize,DataTypes}=require('./db');
const Formation=sequelize.define('formations',{
    num_formation:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    },
    titre_formation:{
        type:DataTypes.STRING
    },
    platforme_formation:{
        type:DataTypes.STRING
    }
});
module.exports=Formation