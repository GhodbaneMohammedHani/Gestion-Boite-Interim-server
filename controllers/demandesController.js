const Demande=require('../models/Demande');
const Profile=require('../models/Profile');
const SpecialiteProfile=require('../models/SpecialiteProfile');
const Employe=require('../models/Employe');
const Enterprise=require('../models/Enterprise');
const ajouterDemande=async(req,res)=>{
    try{
        const demande=req.body;
        await Demande.create({num_enterprise:demande.numEnterprise,num_profile:demande.numProfile,etat_demande:"en attente"});
        console.log('table demande created');
        res.status(200).json({demande});
    }catch(e){
        res.status(400).json({error:e});
        console.log(e);
    }
}
const supprimerDemande=async(req,res)=>{
    try{
        const numEnterprise=req.params.numEnterprise;
        const numProfile=req.params.numProfile;
        await Demande.destroy({where:{num_enterprise:numEnterprise,num_profile:numProfile}});
        res.status(200).json({success:'Demande supprimer'});
    }catch(e){
        res.status(400).json({error:e});
    }
}
const getDemandes=async(req,res)=>{
    try{
        let demandes;
        if(req.query.numEnterprise){
        demandes=await Demande.findAll({raw:true,where:{num_enterprise:req.query.numEnterprise } , 
            include:[ {model:Profile,include:[
                {model:SpecialiteProfile},
                {model:Employe}
            ]},{model:Enterprise}
            ]});
        }else{
        demandes=await Demande.findAll({raw:true,include:[
           { model:Profile,include:[
            {model:SpecialiteProfile},
            {model:Employe}
           ]},
           {
            model:Enterprise
           }
        ]});
        }
        console.log(demandes);
        res.status(200).json({demandes});
    }catch(e){
        console.log(e);
        res.status(400).json({error:e});
    }
}
const modifierDemande=async(req,res)=>{
    const etatDemande=req.query.etatDemande;
    const numEnterprise=req.params.numEnterprise;
    const numProfile=req.params.numProfile;
    try{
        await Demande.update({etat_demande:etatDemande},{
            where:{
                num_enterprise:numEnterprise,num_profile:numProfile
            }
        });
        res.status(200).json({message:'Demande mise a jour'});
    }catch(e){
        console.log(e);
        res.status(400).json({error:e});
    }
}
module.exports={
    ajouterDemande,supprimerDemande,getDemandes,modifierDemande
}