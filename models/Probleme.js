const {sequelize,DataTypes}=require('./db');
const Solution=require('./Solution');
const Competences=require('./Competences');
const Profile=require('./Profile');
const Probleme=sequelize.define('probleme',{
    num_probleme:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    },
    description_probleme:{
        type:DataTypes.STRING
    }
});
Probleme.belongsTo(Competences,{foreignKey:'num_competence'});
Competences.hasMany(Probleme,{foreignKey:'num_competence'});
Probleme.hasMany(Solution,{foreignKey:'num_probleme'});
Solution.belongsTo(Probleme,{foreignKey:'num_probleme'});
Profile.hasMany(Solution,{foreignKey:'num_profile'});
Solution.belongsTo(Profile,{foreignKey:'num_profile'});
Profile.hasMany(Probleme,{foreignKey:'num_profile'});
Probleme.belongsTo(Profile,{foreignKey:'num_profile'});
module.exports=Probleme;