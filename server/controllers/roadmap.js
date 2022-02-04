import model from '../models/roadmapInfo.js';

export const getRoadmaps = async (req,res) => {
    try{
        const roadmaps= await model.find();

        res.status(200).json(roadmaps);
    }catch(err){
        res.status(404).json({message: err.message})
    }
}

export const addRoadmap = async (req,res) => {
    const { title, auth, platform, link, year, section, img}=req.body;

    const roadmap=new model({title, auth, platform, link, year, section, img});
    try{
        await roadmap.save();

        res.status(201).json(roadmap);
    }catch(err){
        console.log(err.message);
        res.status(409).json({message:err.message});
    }
}

export const getSection = async(req,res) => {
    try{
        const roadmap= await model.find({section: req.params.sec});
        res.status(200).json(roadmap);
    }catch(err){
        res.status(404).json({message: err.message})
    }
}