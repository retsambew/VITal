import model from '../models/paperInfo.js';

export const getPapers = async (req,res) => {
    try{
        const papers= await model.find();

        res.status(200).json(papers);
    }catch(err){
        res.status(404).json({message: err.message})
    }
}

export const addPapers = async (req,res) => {
    const { subj, fac, exam, sem, year, file}=req.body;

    const paper=new model({subj, fac, exam, sem, year, file});
    try{
        await paper.save();

        res.status(201).json(paper);
    }catch(err){
        console.log(err.message);
        res.status(409).json({message:err.message});
    }
}