const {sequelize,DataTypes,Model}=require('./db');
const Domaine=require('./Domaine');
const Enterprise=require('./Enterprise');
class DomaineEnterprise extends Model {};
DomaineEnterprise.init({
    num_enterprise: {
        type:DataTypes.INTEGER,
        references:{
            model:'enterprise',
            key:'num_enterprise'
        }
    },
    num_domaine:{
        type:DataTypes.INTEGER,
        references:{
            model:'domaine',
            key:'num_domaine'
        }
    }
},{sequelize});
Domaine.belongsToMany(Enterprise,{through:DomaineEnterprise,foreignKey:'num_domaine'});
Enterprise.belongsToMany(Domaine,{through:DomaineEnterprise,foreignKey:'num_enterprise',onDelete:'CASCADE'});
DomaineEnterprise.belongsTo(Domaine,{foreignKey:'num_domaine'});
DomaineEnterprise.belongsTo(Enterprise,{foreignKey:'num_enterprise'});

module.exports=DomaineEnterprise;