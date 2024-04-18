const Competences=require('../models/Competences');
const ProfileCompetences=require('../models/ProfileCompetences');;
const ajouterCompetence=(req,res)=>{
        const competence=req.body;
        console.log(competence);
        Competences.create({nom_competence:competence.nomCompetence,description_competence:competence.descriptionCompetence,num_typecompetence:competence.typeCompetence}).then((createdInstance)=>{
            res.status(200).json({num_competence:createdInstance.num_competence})
        }).catch((e)=>{
            console.log(e);
            res.status(400).json({error:e});
        })
}
const getCompetences=async(req,res)=>{
    try{
        const competences= await Competences.findAll({raw:true});
        res.status(200).json({competences});
    }catch(e){
        console.log(e);
        res.status(400).json({error:e});
    }
}
const getCompetence=async(req,res)=>{
    try{
        const numCompetence=req.params.id;
        const competence= await Competences.findOne({raw:true,where:{
            num_competence:numCompetence
        }});
        res.status(200).json({competence});
    }catch(e){
        console.log(e);
        res.status(400).json({error:e});
    }
}
module.exports={
    ajouterCompetence,getCompetences,getCompetence
}