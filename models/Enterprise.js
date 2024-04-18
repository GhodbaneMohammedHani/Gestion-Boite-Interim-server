const {sequelize,DataTypes,Model}=require('./db');
const Enterprise=sequelize.define('Enterprise',{
    num_enterprise: {
        type: DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false,
        autoIncrement:true
    },
    nom_enterprise:{
        type:DataTypes.STRING
    },
    email_enterprise:{
        type:DataTypes.STRING
    },
    password_enterprise:{
        type:DataTypes.STRING
    }
});
module.exports=Enterprise;