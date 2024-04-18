const express=require('express');
const {ajouterCompetence,getCompetences,getCompetence}=require('../controllers/competencesController');
const router=express.Router();
// get tous les competences
router.get('/',getCompetences);
//get un seul competence
router.get('/:id',getCompetence)
//ajouter un competence
router.post('/',ajouterCompetence);
module.exports=router;