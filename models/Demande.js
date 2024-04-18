const {sequelize,DataTypes}=require('./db');
const Profile=require('./Profile');
const Enterprise=require('./Enterprise');
const Demande=sequelize.define('Demande',{
    num_enterprise:{
        type:DataTypes.INTEGER,
        references:{
            model:Enterprise,
            key:'num_enterprise'
        }
    },
    num_profile:{
        type:DataTypes.INTEGER,
        references:{
            model:Profile,
            key:'num_profile'
        }
    },
    etat_demande:{
        type:DataTypes.STRING
    }
});
Enterprise.belongsToMany(Profile,{through:Demande,foreignKey:'num_enterprise',onDelete:'CASCADE'});
Profile.belongsToMany(Enterprise,{through:Demande,foreignKey:'num_profile',onDelete:'CASCADE'});
Demande.belongsTo(Enterprise,{foreignKey:'num_enterprise'});
Demande.belongsTo(Profile,{foreignKey:'num_profile'});
module.exports=Demande;