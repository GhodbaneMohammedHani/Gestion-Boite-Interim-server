const {sequelize,DataTypes,Model}=require('./db');
const {hashPassword}=require('../authentication/auth');
const Admin=sequelize.define('admin',{
    num_admin:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    email_admin:{
        type:DataTypes.STRING
    },
    password_admin:{
        type:DataTypes.STRING
    }
})
module.exports=Admin;