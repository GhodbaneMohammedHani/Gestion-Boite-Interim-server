const Probleme=require('../models/Probleme');
const Profile=require('../models/Profile');
const Employe=require('../models/Employe');
const Competences=require('../models/Competences');
const Solution=require('../models/Solution');
const ajouterProbleme=async(req,res)=>{
    const probleme=req.body;
    try{
    await Probleme.create({
        description_probleme:probleme.descriptionProbleme,
        num_profile:probleme.numProfile,
        num_competence:probleme.numCompetence
    });
    res.sendStatus(200);
    }catch(e){
        console.log(e);
        res.status(400).json({e});
    }
};
const getProblemes=async(req,res)=>{
    try{
        const problemes=await Probleme.findAll({raw:true,
            include:[
                {
                    model:Competences
                },
                {
                    model:Profile,
                    include:[{model:Employe}]
                }
            ]
        });
        res.status(200).json({problemes});
    }catch(e){
        console.log(e);
        res.status(400).json({e});
    }
};
const getProbleme=async(req,res)=>{
    const numProbleme=req.params.numProbleme;
    try{
        const probleme=await Probleme.findOne({raw:true,where:{
            num_probleme:numProbleme
        }});
        res.status(200).json({probleme});
    }catch(e){
        console.log(e);
        res.status(400).json({e});
    }
};
module.exports={
    ajouterProbleme,getProblemes,getProbleme
}