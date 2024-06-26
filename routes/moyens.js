const express=require('express');
const router=express.Router();
const {ajouterLivre,ajouterVideo,ajouterFormation,getVideos,getLivres,getFormations}=require('../controllers/moyensController');
router.get('/livres',getLivres);
router.get('/videos',getVideos);
router.get('/formations',getFormations);
router.post('/livres',ajouterLivre);
router.post('/videos',ajouterVideo);
router.post('/formations',ajouterFormation);
module.exports=router;