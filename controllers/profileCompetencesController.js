const { accessSync } = require('fs');
const ProfileCompetence=require('../models/ProfileCompetences');
const Competences = require('../models/Competences');
const Profile=require('../models/Profile');
const ajouterProfileCompetence=async(req,res)=>{
    const numCompetence=req.body.numCompetence;
    const numProfile=req.numProfile;
    try{
        await ProfileCompetence.create({num_competence:numCompetence,num_profile:numProfile});
        res.status(200).json({message:'Profile Competence added'});
    }catch(e){
        console.log(e);
        res.status(400).json({error:e});
    }
}
const getProfileCompetences=async(req,res)=>{
    const numProfile=req.numProfile;
    try{
        const profileCompetences=await ProfileCompetence.findAll({where:{
            num_profile:numProfile
        },raw:true,include:[Competences]});
        res.status(200).json({profileCompetences});  
    }catch(e){
        console.log(e);
        res.status(400).json({error:e});
    }
}
module.exports={ajouterProfileCompetence,getProfileCompetences};