const Employe=require('../models/Employe');
const getEmployes=async(req,res)=>{
    try{
        const employes=await Employe.findAll({raw:true});
        res.status(200).json({employes});
    }catch(e){
        res.status(400).json({error:e});
    }
}
const getEmploye=async(req,res)=>{
    const numEmploye=req.params.numEmploye;
    try{
        const employe=await Employe.findOne({raw:true,where:{
            num_employe:numEmploye
        }});
        console.log(employe);
        res.status(200).json({employe});
    }catch(e){
        console.log(e);
        res.status(400).json({e});
    }
}
const supprimerEmploye=async(req,res)=>{
    try{
        const numEmploye=req.params.numEmploye;
        await Employe.destroy({where:{num_employe:numEmploye}});
        res.status(200).json({message:'supprimer avec successs'});
    }catch(e){
        console.log(e);
        res.status(400).json({error:e});
    }
}
const modifierEmploye=async(req,res)=>{
    
    try{
        const numEmploye=req.params.numEmploye;
        const employe=req.body;
        await Employe.update({
            nom_employe:employe.nomEmploye,
            prenom_employe:employe.prenomEmploye,
            email_employe:employe.emailEmploye,
            telephone_employe:employe.telephoneEmploye,
        },{
            where:{
                num_employe:numEmploye
            }
        });
        res.status(200).json({employe});
    }catch(e){
        console.log(e);
        res.status(400).json({e});
    }
}
module.exports={
    getEmployes ,supprimerEmploye,getEmploye,modifierEmploye
}