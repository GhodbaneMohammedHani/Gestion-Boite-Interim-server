const {sequelize,DataTypes}=require('./db');
const Livres=require('./Livres');
const Videos=require('./Videos');
const Formations=require('./Formations');
const Competences=sequelize.define('competences',{
    num_competence:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false,
        autoIncrement:true
    },
    nom_competence:{
        type:DataTypes.STRING
    },
    description_competence:{
        type:DataTypes.TEXT
    }
});
Videos.belongsTo(Competences,{foreignKey:'num_competence'});
Competences.hasMany(Videos,{foreignKey:'num_competence'});
Livres.belongsTo(Competences,{foreignKey:'num_competence'});
Competences.hasMany(Livres,{foreignKey:'num_competence'});
Formations.belongsTo(Competences,{foreignKey:'num_competence'});
Competences.hasMany(Formations,{foreignKey:'num_competence'});
module.exports=Competences;