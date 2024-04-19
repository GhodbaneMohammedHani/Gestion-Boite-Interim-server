const Solution=require("../models/Solution");
const ajouterSolution=async(req,res)=>{
    try{
        const solution=req.body;
        await Solution.create({num_profile:solution.numProfile,num_probleme:solution.numProblem,
        description_probleme:solution.descriptionProbleme});
        res.sendStatus(200);
    }catch(e){
        res.status(400).json({e});
    }
};
const getSolutions=async(req,res)=>{
    const numProbleme=req.query.numProbleme;
    try{
        const solutions=await Solution.findAll({raw:true,where:{
            num_probleme:numProbleme
        }})
        res.status(200).json({solutions});
    }catch(e){
        res.status(400).json({e});
    }
}
const getSolution=async(req,res)=>{
    const numSolution=req.params.numSolution;
    try{
        const solution=await Solution.findOne({raw:true,where:{
            num_solution:numSolution
        }})
        res.status(200).json({solution});
    }catch(e){
        res.status(400).json({e});
    }
}
module.exports={
    ajouterSolution,getSolutions,getSolution
};