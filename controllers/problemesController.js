const Probleme=require('../models/Probleme');
const ajouterProbleme=async(req,res)=>{
    const probleme=req.body;
    try{
    await Probleme.create({
        description_probleme:probleme.descriptionProblem,
        num_profile:probleme.numProfile,
        num_comptence:probleme.numCompetence,
    });
    res.sendStatus(200);
    }catch(e){
        console.log(e);
        res.status(400).json({e});
    }
};
const getProblemes=async(req,res)=>{
    try{
        const problemes=Probleme.findAll({raw:true});
        res.status(200).json({problemes});
    }catch(e){
        console.log(e);
        res.status(400).json({e});
    }
};
const getProbleme=async(req,res)=>{
    const numProbleme=req.params.numProbleme;
    try{
        const probleme=Probleme.findOne({raw:true,where:{
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