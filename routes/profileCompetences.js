const express=require('express');
const {getProfileCompetences,ajouterProfileCompetence}=require('../controllers/profileCompetencesController');
const router=express.Router();
// ajouter un profile competence
router.post('/',ajouterProfileCompetence);
// get des competences d'un profile
router.get('/',getProfileCompetences);
module.exports=router;