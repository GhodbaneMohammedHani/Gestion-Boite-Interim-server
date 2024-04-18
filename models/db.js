const {Sequelize, DataTypes,Model}= require('sequelize');
const sequelize=new Sequelize('boiteinterim','root','codeconnect',{
    host:'localhost',
    dialect:'mysql',
    define:{
        freezeTableName:true,
        timestamps:false
    }
});
sequelize.sync({alter:true}).then(()=>{
    console.log('sequalize synced successefully')
}).catch((e)=>{
    console.log('synchernization failed :'+e);
})
module.exports={sequelize,DataTypes,Model};