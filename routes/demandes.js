const express=require('express');
const router=express.Router();
const {ajouterDemande,supprimerDemande,getDemandes, modifierDemande}=require('../controllers/demandesController');
router.post('/',ajouterDemande);
router.get('/',getDemandes);
router.patch('/:numEnterprise/:numProfile',modifierDemande);
router.delete('/:numEnterprise/:numProfile',supprimerDemande);
module.exports=router;