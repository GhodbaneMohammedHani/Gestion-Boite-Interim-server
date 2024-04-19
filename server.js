const express=require('express');
require('dotenv').config();
const cors=require('cors');
const profilesRouter=require('./routes/profiles');
const competencesRouter=require('./routes/competences');
const moyensRouter=require('./routes/moyens');
const demandesRouter=require('./routes/demandes');
const employesRouter=require('./routes/employes');
const enterprisesRouter=require('./routes/enterprises');
const searchRouter=require('./routes/search');
const problemesRouter=require('./routes/problemes');
const solutionsRouter=require('./routes/solutions');
const {login}=require('./controllers/loginController');
const {signUpEnterprise,signUpEmploye,getDomaines,getDomainesParEnterprise}=require('./controllers/signUpController');
const {requireAuth}=require('./authentication/auth');
const app=express();
app.use(cors())
app.use(express.json())
app.post("/SignUpEmploye",signUpEmploye);
app.get("/domaines",getDomaines);
app.get("/domaines/:numEnterprise",getDomainesParEnterprise);
app.post("/SignUpEnterprise",signUpEnterprise)
app.post('/login',login);
app.use('/profiles',profilesRouter);
app.use('/competences',competencesRouter);
app.use('/moyens',moyensRouter);
app.use('/demandes',demandesRouter);
app.use('/employes',employesRouter);
app.use('/enterprises',enterprisesRouter);
app.use('/search',searchRouter);
app.use('/problemes',problemesRouter);
app.use('/solutions',solutionsRouter);
app.listen(5000);