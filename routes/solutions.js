const express=require('express');
const router=express.Router();
const {ajouterSolution,getSolutions,getSolution}=require('../controllers/solutionsController');
router.get('/',getSolutions);
router.get('/:numSolution',getSolution);
router.post('/',ajouterSolution);
module.exports=router