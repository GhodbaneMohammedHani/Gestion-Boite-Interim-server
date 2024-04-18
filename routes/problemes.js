const express=require('express');
const {getProblemes,getProbleme,ajouterProbleme}=require('../controllers/problemesController');
const { route } = require('./problemes');
const router=express.Router();
router.get('/',getProblemes);
router.get('/:numProbleme',getProbleme);
router.post('/',ajouterProbleme);
module.exports=router;