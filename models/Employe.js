const {sequelize,DataTypes,Model}=require('./db');
const Profile=require('./Profile');
const Employe=sequelize.define('Employe',{
    num_employe:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false,
        autoIncrement:true
    },
    nom_employe:{
        type:DataTypes.STRING
    },
    prenom_employe:{
        type:DataTypes.STRING
    },
    email_employe:{
        type:DataTypes.STRING
    },
    password_employe:{
        type:DataTypes.STRING
    },
    telephone_employe:{
        type:DataTypes.STRING
    }
});
module.exports=Employe;