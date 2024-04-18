const {sequelize,DataTypes}=require('./db');
const Profile=require('./Profile');
const SpecialiteProfile=sequelize.define('specialiteprofile',{
    num_specialite:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    },
    nom_specialite:{
        type:DataTypes.STRING
    }
});
SpecialiteProfile.hasMany(Profile,{foreignKey:'num_specialite'});
Profile.belongsTo(SpecialiteProfile,{foreignKey:'num_specialite'});
module.exports=SpecialiteProfile;