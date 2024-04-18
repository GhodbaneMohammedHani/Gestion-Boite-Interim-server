const {sequelize,DataTypes}=require('./db');
const Profile=require('./Profile');
const Competences=require('./Competences');
const ProfileCompetences=sequelize.define('profilecompetences',{ 
    num_profile:{
        type:DataTypes.INTEGER,
        references:{
            model:'profile',
            key:'num_profile'
        }
    },
    num_competence:{
        type:DataTypes.INTEGER,
        references:{
            model:'competences',
            key:'num_competence'
        }
    }
});
ProfileCompetences.removeAttribute('id');
Competences.belongsToMany(Profile,{through:ProfileCompetences,foreignKey:'num_competence',onDelete:'CASCADE'});
Profile.belongsToMany(Competences,{through:ProfileCompetences,foreignKey:'num_profile',onDelete:'CASCADE'});
ProfileCompetences.belongsTo(Competences,{foreignKey:'num_competence'});
ProfileCompetences.belongsTo(Profile,{foreignKey:'num_profile'});
module.exports=ProfileCompetences;