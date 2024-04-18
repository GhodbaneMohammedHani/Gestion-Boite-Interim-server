const {Op}=require('sequelize');
const Profile=require('../models/Profile');
const Competence=require('../models/Competences');
const SpecialiteProfile=require('../models/SpecialiteProfile');
const ProfileCompetences = require('../models/ProfileCompetences');
const Employe=require('../models/Employe');
const chercher=async(req,res)=>{
    const query=req.query.input;
    if(query){
    try{
        const tokens=query.split(' ');
        const profileCompetences=await ProfileCompetences.findAll({distinct:true,
            include:[
                {
                    model:Competence,
                    where:{
                        [Op.or]:tokens.map((token)=>({
                            nom_competence:{[Op.like]:`%${token}%`}
                        }))
                    }
                },
                {
                    model:Profile,
                    include:[
                        {
                            model:SpecialiteProfile
                        },
                        {
                            model:Employe
                        }
                    ]
                }
            ],raw:true
        });
        const specialitesProfiles=await Profile.findAll({raw:true,include:[
            {
                model:SpecialiteProfile,
                where:{
                    [Op.or]:tokens.map((token)=>({
                        nom_specialite:{
                            [Op.like]:`%${token}%`
                        }
                    }))
                }
            }
        ]});
        const numProfiles=[];
        profileCompetences.map((profileCompetence)=>{
            numProfiles.push(profileCompetence['num_profile']);
        })
        specialitesProfiles.map((specialiteProfile)=>{
           if(!numProfiles.includes(specialiteProfile['num_profile'])){
            numProfiles.push(specialiteProfile['num_profile']);
           }
        })
        const profiles=await Profile.findAll({raw:true, where:{
            [Op.or]:numProfiles.map((numProfile)=>(
                {
                    num_profile:numProfile
                }
            ))
        },include:[
            {model:SpecialiteProfile},{model:Employe}
            ]});
        res.status(200).json({profiles});
    }catch(e){
        res.status(400).json({e})
        console.log(e);
    }
}else{
    try{
       const profiles=await Profile.findAll({raw:true,include:[
            {model:SpecialiteProfile},{model:Employe}
            ]});
        res.status(200).json({profiles});
    }catch(e){
        res.status(400).json({e});
    }
}
}
module.exports={  chercher}