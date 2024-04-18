const {sequelize,DataTypes}=require('./db');
const Livres=sequelize.define('livres',{
    num_livre:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    },
    auteur_livre:{
        type:DataTypes.STRING
    },
    titre_livre:{
        type:DataTypes.STRING
    }
});
module.exports=Livres;