const bcrypt=require('bcryptjs');
const requireAuth=(req,res,next)=>{
    const { authorization }=req.headers;
    console.log(req.headers);
    if(!authorization){
        res.status(401).json({message:'Authorization token required'});
    }
    const token=authorization.split(' ')[1];
    try{
    const {id}=jwt.verify(token,process.env.SECRET);
    next();
    }catch(error){
        console.log(error);
        res.status(401).json({message:'Request not autorized'});
    }
}
function hashPassword(password){
    const salt=bcrypt.genSaltSync();
    return bcrypt.hashSync(password,salt);
}
function verifyPassword(password,hash){
    return bcrypt.compareSync(password,hash);
}


module.exports={
    hashPassword,
    verifyPassword,
    requireAuth
}
