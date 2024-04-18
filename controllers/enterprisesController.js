const Enterprise=require('../models/Enterprise');
const getEnterprises=async(req,res)=>{
    try{
        const enterprises=await Enterprise.findAll({raw:true});
        res.status(200).json({enterprises});
    }catch(e){
        console.log(e);
        res.status(400).json({error:e});
    }
};
const getEnterprise=async(req,res)=>{
    try{
     const numEnterprise=req.params.numEnterprise;
     const enterprise=await Enterprise.findOne({raw:true,where:{ num_enterprise:numEnterprise}}); 
     res.status(200).json({enterprise});
    }catch(e){
        console.log(e);
        res.status(400).json({error:e});
    }
}
const supprimerEnterprise=async(req,res)=>{
    try{
        const numEnterprise=req.params.numEnterprise;
        await Enterprise.destroy({where:{num_enterprise:numEnterprise}});
        res.status(200).json({message:'enterprise supprimer'});
    }catch(e){
        console.log(e);
        res.status(400).json({error:e});
    }
}
module.exports={
    getEnterprises,getEnterprise,supprimerEnterprise
};
