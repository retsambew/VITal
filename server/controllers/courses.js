import model from '../models/courseInfo.js';

export const getCourses = async (req,res) => {
    try{
        const courses= await model.find();

        res.status(200).json(courses);
    }catch(err){
        res.status(404).json({message: err.message})
    }
}

export const addCourse = async (req,res) => {
    const {title, auth, platform, link, year, section, img}=req.body;

    const course=new model({title, auth, platform, link, year, section, img});
    try{
        await course.save();

        res.status(201).json(course);
    }catch(err){
        console.log(err.message);
        res.status(409).json({message:err.message});
    }
}

export const getSection = async(req,res) => {
    try{
        const course= await model.find({section: req.params.sec});
        res.status(200).json(course);
    }catch(err){
        res.status(404).json({message: err.message})
    }
}