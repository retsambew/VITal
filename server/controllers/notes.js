import model from '../models/notesInfo.js';

export const getNotes = async (req,res) => {
    try{
        const notes= await model.find();

        res.status(200).json(notes);
    }catch(err){
        res.status(404).json({message: err.message})
    }
}

export const addNotes = async (req,res) => {
    const { subj, fac, sem, year, file}=req.body;

    const notes=new model({subj, fac, sem, year, file});
    try{
        await notes.save();

        res.status(201).json(notes);
    }catch(err){
        console.log(err.message);
        res.status(409).json({message:err.message});
    }
}