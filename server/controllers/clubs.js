import model from '../models/clubInfo.js';

export const getClubs = async (req,res) => {
    try{
        const clubs= await model.find();

        res.status(200).json(clubs);
    }catch(err){
        res.status(404).json({message: err.message})
    }
}

export const addClubs = async (req,res) => {
    const { name, core, cord, desc, links, logo}=req.body;

    const club=new model({ name, core, cord, desc, links, logo});
    try{
        await club.save();

        res.status(201).json(club);
    }catch(err){
        console.log(err.message);
        res.status(409).json({message:err.message});
    }
}