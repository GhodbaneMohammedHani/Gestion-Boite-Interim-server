const express=require('express');
const router=express.Router();
const {chercher}=require('../controllers/searchController');
router.get('/',chercher);
module.exports=router;