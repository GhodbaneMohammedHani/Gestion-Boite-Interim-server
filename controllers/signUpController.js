const Employe=require('../models/Employe');
const Enterprise=require('../models/Enterprise');
const Wilaya=require('../models/Wilaya');
const Domaine = require('../models/Domaine');
const DomaineEnterprise=require('../models/DomaineEnterprise');
const {hashPassword}=require('../authentication/auth');
const signUpEnterprise=async(req,res)=>{
    const infoEnterprise=req.body;
    console.log(infoEnterprise);   
    const error={};
    if(infoEnterprise.password!==infoEnterprise.confirmPassword){
        error.password="les mots de passe ne correspondent pas"
    }
    if(!Object.keys(error).length){
        Enterprise.create({
        nom_enterprise:infoEnterprise.nom,
        email_enterprise:infoEnterprise.email,
        password_enterprise:hashPassword(infoEnterprise.password)
       }).then((enterprise)=>{
        const num_enterprise=enterprise.num_enterprise;
        infoEnterprise.domaines.map(async(domaine)=>{
            try{
           await DomaineEnterprise.create({num_enterprise:num_enterprise,num_domaine:domaine});
            }catch(e){
                res.status(400).json({e});
            }
        });
        res.status(200).json(enterprise);
       }).catch((e)=>{
        console.log("Sign Up Enterprise error : "+e);
        res.status(400).json({database:"Failed to insert"});
       })
    }
    else{
        res.status(400).json(error);
    }
}
const signUpEmploye=async(req,res)=>{
    const info=req.body;
    console.log(info);
    const error={};
    if(info.password!=info.confirmPassword) {
        error.password="Password non valid"
    }
    if(info.numTel.length!=10){
       error.numTel="Num tel non valid";
    }
    if(!Object.keys(error).length){
      try{
       const employe=await Employe.create({
        nom_employe:info.nom,
        prenom_employe:info.prenom,
        email_employe:info.email,
        telephone_employe:info.numTel,
        password_employe:hashPassword(info.password)
       });
        res.status(200).json({employe});
        console.log("Sign Up Employe sucesss");
       } catch(error){
        console.log(error);
        res.status(400).json({database:'failed to insert'});
        }
    }
       else{
        console.log("Sign Up Employe fail");
        res.status(400).json(error);
    }
}
const getWilayas=async(req,res)=>{
    try{
       const wilayas=await Wilaya.findAll({
        raw:true
       });
       console.log(wilayas);
        res.status(200).json(wilayas);
    }
    catch(e){
        console.log(error);
        res.status(500);
    }
}
const getDomaines=async(req,res)=>{
    try{
        const domaines=await Domaine.findAll({
            raw:true
        });
        res.status(200).json(domaines);
    }catch(e){
        console.log(error);
        res.status(500);
    }
}
const getDomainesParEnterprise=async(req,res)=>{
    try{
        const numEnterprise=req.params.numEnterprise;
        const domainesEnterprise=await DomaineEnterprise.findAll({where:{num_enterprise:numEnterprise},
        include:[
            {model:Domaine}
        ]});
        res.status(200).json({domainesEnterprise});
    }catch(e){
        console.log(e);
        res.status(400).json({error:e});
    }
}
module.exports={
    signUpEnterprise,signUpEmploye,getWilayas,getDomaines,getDomainesParEnterprise
}