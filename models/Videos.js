const {sequelize,DataTypes}=require('./db');
const Videos=sequelize.define('videos',{
    num_video:{
        primaryKey:true,
        type:DataTypes.INTEGER,
        autoIncrement:true,
        allowNull:false
    },
    titre_video:{
        type:DataTypes.STRING
    },
    lien_video:{
        type:DataTypes.STRING
    }
});
module.exports=Videos;