const {sequelize,DataTypes,Model}=require('./db');
const Employe=require('./Employe');
const Videos=require('./Videos');
const Formations=require('./Formations');
const Livres=require('./Livres');
const Profile=sequelize.define('Profile',{
    num_profile:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    },
    bio_profile:{
        type:DataTypes.TEXT
    }
});
Livres.belongsTo(Profile,{foreignKey:'num_profile'});
Profile.hasMany(Livres,{foreignKey:'num_profile'});
Videos.belongsTo(Profile,{foreignKey:'num_profile'});
Profile.hasMany(Videos,{foreignKey:'num_profile'});
Formations.belongsTo(Profile,{foreignKey:'num_profile'});
Profile.hasMany(Formations,{foreignKey:'num_profile'});
Profile.belongsTo(Employe,{foreignKey:'num_employe'});
Employe.hasMany(Profile,{foreignKey:'num_employe',onDelete:'CASCADE'});
console.log(Profile===sequelize.models.Profile);
module.exports=Profile;