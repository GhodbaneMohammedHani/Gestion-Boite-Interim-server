const Employe=require('../models/Employe');
const Enterprise=require('../models/Enterprise');
const Admin = require('../models/Admin');
const jwt=require('jsonwebtoken');
const {verifyPassword}=require('../authentication/auth');
const createToken=(id,role)=>{
    return jwt.sign({id : id,role: role},process.env.SECRET,{expiresIn:'30m'})
}
const login=async(req,res)=>{
    const loginInfo=req.body;
    console.log(loginInfo);
    const errorMessage="Invalid email or password";
    try{
   /* const [[employe],fields]=await connection.execute(`SELECT * FROM employe where email_employe=?`,[loginInfo.email]);*/
   const employe= await Employe.findOne({where:{email_employe:loginInfo.email}});
   console.log(employe);
    if(employe){
        console.log("found in employe");
        if(verifyPassword(loginInfo.password,employe.password_employe)) {
            const token=createToken(employe.num_employe,'employe');
            res.status(200).json({token});
        }
        else res.status(400).json({message:errorMessage});
    }else{
    /*const [[enterprise],fields]=await connection.execute(`SELECT * FROM enterprise where email_enterprise=?`,[loginInfo.email]);*/
    const enterprise= await Enterprise.findOne({where:{email_enterprise:loginInfo.email}});
    if(enterprise){
        if(verifyPassword(loginInfo.password,enterprise.password_enterprise)) {
            const token=createToken(enterprise.num_enterprise,'enterprise');
            console.log(token);
            res.status(200).json({token});
        }
        else res.status(400).json({message:errorMessage})
    }
    else{
  // const [[admin],fields]= await connection.execute(`SELECT * from admin where email_admin=?`,[loginInfo.email]);
  const admin=await Admin.findOne({where:{email_admin:loginInfo.email}});
    if(admin){
        if(verifyPassword(loginInfo.password,admin.password_admin)) { 
            const token=createToken(admin.num_admin,'admin');
            res.status(200).json({token});
        }
        else res.status(400).json({message:errorMessage});
    }
    }
    }
    }catch(e){
        console.log(e);
    }
}
module.exports={
    login
};