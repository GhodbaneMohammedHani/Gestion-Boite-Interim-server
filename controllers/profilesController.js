const Profile=require('../models/Profile');
const SpecialiteProfile=require('../models/SpecialiteProfile');
const Employe=require('../models/Employe');
const { compareSync } = require('bcryptjs');
const { sequelize } = require('../models/db');
const ajouterProfile=async(req,res)=>{
    const profileInfo=req.body;
    try{
        console.log(profileInfo);
  await Profile.create({num_specialite:profileInfo.specialiteProfile, bio_profile:profileInfo.bioProfile,num_employe:profileInfo.num_employe});
  console.log(profileInfo);
   res.status(200).json(profileInfo);
    }catch(e){
        console.log(profileInfo);
        console.log(e);
        res.status(400).json({message:'failed to add profile'});
    }
}
const getProfiles=async(req,res)=>{
    try{
    let profiles;
    if(req.query.numEmploye){
        const numEmploye=req.query.numEmploye;
        profiles=await Profile.findAll({ where:{num_employe:numEmploye,} ,raw:true
        ,include:[ {model:SpecialiteProfile},{model:Employe}]});
        }
    else{
        profiles=await Profile.findAll({raw:true,include:[
        {model:SpecialiteProfile},{model:Employe}
        ]});
        }
    res.status(200).json({profiles});
    }catch(e){
        console.log(e);
        res.status(400).json({error:e});
    }
}
const getProfile=async(req,res)=>{
    try{
        const numEmploye=req.query.numEmploye;
        const numProfile=req.params.id;
        let profile;
        if(req.query.numEmploye){
        profile=await Profile.findOne({where:{num_employe:numEmploye,num_profile:numProfile},raw:true,include:[{
            model:Employe
        },{
            model:SpecialiteProfile
        }]});
        } else{
        profile=await Profile.findOne({where:{num_profile:numProfile},raw:true,include:[{
            model:Employe
        },{
            model:SpecialiteProfile
        }]});
        }
        res.status(200).json({profile});
    }catch(e){
        console.log(e);
        res.status(400).json({error:e});
    }
}
const modifyProfile=async(req,res)=>{
    try{
        const numProfile=req.params.id;
        const {nom_profile,bio_profile}=req.body;
        Profile.update({nom_profile:nom_profile,bio_profile:bio_profile},{
            where:{
                num_profile:numProfile
            }
        });
        res.status(200).json({profile:{nom_profile,bio_profile}});
    }catch(e){
        console.log(e);
        res.status(400).json({error:e});
    }
}
//get tous les specialites
const getSpecialites=async(req,res)=>{
    try{
        const specialites=await SpecialiteProfile.findAll({raw:true,
        attributes:[['num_specialite','numero'],['nom_specialite','nom']]});
        res.status(200).json({specialites});
    }catch(e){
        console.log(e);
        res.status(400).json({error:e});
    }
}
const getSpecialite=async(req,res)=>{
    try{
        const num_specialite=req.params.id;
        const specialite=await SpecialiteProfile.findOne({raw:true,
            where:{
                num_specialite:num_specialite
            }
        });
        res.status(200).json({specialite});
    }catch(e){
        console.log(e);
        res.status(400).json({error:e});
    }
}
const ajouterSpecialite=(req,res)=>{
        const {nouveauSpecialite}=req.body;
        SpecialiteProfile.create({nom_specialite:nouveauSpecialite}).then((createdInstance)=>{
            const lastInsertId=createdInstance.num_specialite;
            console.log(`This is the last inserted id ${lastInsertId}`);
            res.status(200).json({nom_specialite:lastInsertId});
        }).catch((e)=>{
            console.log(e);
            res.status(400).json({error:e});
        })
}
module.exports={ajouterProfile,getProfiles,getProfile,modifyProfile,getSpecialites,ajouterSpecialite
,getSpecialite};