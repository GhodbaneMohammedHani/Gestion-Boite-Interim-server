const express=require('express');
const {getEmployes,supprimerEmploye,getEmploye, modifierEmploye}=require('../controllers/employesController');
const router=express.Router();
//get tous les employes
router.get('/',getEmployes);
//get un seul employe
router.get('/:numEmploye',getEmploye)
//supprimer un employe
router.delete('/:numEmploye',supprimerEmploye);
//modifier un employe
router.patch('/:numEmploye',modifierEmploye);
module.exports=router;