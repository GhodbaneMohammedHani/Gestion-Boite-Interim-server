const express=require('express');
const router=express.Router();
const profileCompetenceRouter=require('../routes/profileCompetences');
const {ajouterProfile,getProfiles,getProfile,modifyProfile,getSpecialites,ajouterSpecialite,getSpecialite}=require('../controllers/profilesController');
//get all profiles
router.get('/',getProfiles);
//get tous les specialites
router.get('/specialites',getSpecialites);
//get un seul specialite
router.get('/specialites/:id',getSpecialite);
//ajouter un specialite
router.post('/specialites',ajouterSpecialite);
//get a single profile
router.get('/:id',getProfile);
//modifer profile
router.patch('/:id',modifyProfile);
//ajouter profile
router.post('/',ajouterProfile);
router.use('/:id',(req,res,next)=>{
    req.numProfile=req.params.id;
    next();
})
router.use('/:id/profileCompetences',profileCompetenceRouter);
module.exports=router;