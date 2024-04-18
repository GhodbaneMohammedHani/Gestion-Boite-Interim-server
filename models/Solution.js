const {sequelize,DataTypes}=require('./db');
const Solution=sequelize.define('solution',{
    num_solution:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    },
    description_solution:{
        type:DataTypes.STRING
    }
});
module.exports=Solution;