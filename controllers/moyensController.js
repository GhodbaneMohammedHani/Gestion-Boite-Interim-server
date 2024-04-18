const Livres=require('../models/Livres');
const Videos=require('../models/Videos');
const Formations=require('../models/Formations');
const ajouterLivre=async(req,res)=>{
    const livre=req.body;
    try{
        await Livres.create({auteur_livre:livre.auteurLivre,titre_livre:livre.titreLivre,
        num_competence:livre.numCompetence,num_profile:livre.numProfile});
        res.sendStatus(200);
    }catch(e){
        console.log(e);
        res.status(400).json({e});
    }
}
const ajouterVideo=async(req,res)=>{
    const video=req.body;
    try{
        await Videos.create({
        titre_video:video.titreVideo,
        lien_video:video.lienVideo,
        num_competence:video.numCompetence,
        num_profile:video.numProfile
    });
        res.sendStatus(200);
    }catch(e){
        console.log(e);
        res.status(400).json({e});
    }
};
const ajouterFormation=async(req,res)=>{
    const formation=req.body;
    try{
       const newFormation=await Formations.create({
            titre_formation:formation.titreFormation,
            platforme_formation:formation.plateformeFormation,
            num_competence:formation.numCompetence,
            num_profile:formation.numProfile
        });
        console.log(newFormation);
        res.sendStatus(200);
    }
    catch(e){
        res.status(400).json({e});
    }
}
const getVideos=async(req,res)=>{
    try{
        const numProfile=req.query.numProfile;
        const numCompetence=req.query.numCompetence;
        let videos;
        if(numProfile){
        videos=await Videos.findAll({raw:true,where:{num_profile:numProfile,num_competence:numCompetence
        }});
        }else{
        videos=await Videos.findAll({raw:true,where:{
            num_competence:numCompetence 
        }});
        }
        res.status(200).json({videos});
    }catch(e){
        console.log(e);
        res.statust(400).json({e});
    }
};
const getLivres=async(req,res)=>{
    try{
        const numProfile=req.query.numProfile;
        const numCompetence=req.query.numCompetence;
        let livres;
        if(numProfile){
            livres=await Livres.findAll({raw:true,
                where:{num_competence:numCompetence,
                    num_profile:numProfile}});
        }else{
            livres=await Livres.findAll({raw:true,where:{
                num_competence:numCompetence
            }});
        }
        res.status(200).json({livres});
    }catch(e){
        console.log(e);
        res.status(400).json({e});
    }
};
const getFormations=async(req,res)=>{
    const numProfile=req.query.numProfile;
    const numCompetence=req.query.numCompetence;
    try{
        if(numProfile){
            const formations=await Formations.findAll({raw:true,where:{
                num_competence:numCompetence,
                num_profile:numProfile}});
            res.status(200).json({formations});
        }else{
            const formations=await Formations.findAll({raw:true,where:{
                num_competence:numCompetence
            }});
            res.status(200).json({formations});
        }
    }catch(e){
        console.log(e);
        res.status(400).json({e});
    }
}
module.exports={
    ajouterLivre,ajouterVideo,ajouterFormation,getLivres,getVideos,getFormations
};
