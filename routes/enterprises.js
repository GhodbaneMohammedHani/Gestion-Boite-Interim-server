const express=require('express');
const {getEnterprises,getEnterprise,supprimerEnterprise}=require('../controllers/enterprisesController');
const router=express.Router();
router.get('/',getEnterprises);
router.get('/:numEnterprise',getEnterprise);
router.delete('/:numEnterprise',supprimerEnterprise);
module.exports=router;