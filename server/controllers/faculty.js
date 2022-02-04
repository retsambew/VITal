import express from "express"
import mongoose from 'mongoose'

import model from '../models/facultyInfo.js'

export const getFaculties = async (req,res) => {
    try{
        const faculties= await model.find();

        res.status(200).json(faculties);
    }catch(err){
        res.status(404).json({message: err.message})
    }
}

export const addFaculty = async (req,res) => {
    const { name, desn, subj, desc, link, file}=req.body;

    const faculty=new model({name, desn, subj, desc, link, file});
    try{
        await faculty.save();

        res.status(201).json(faculty);
    }catch(err){
        console.log(err.message);
        res.status(409).json({message:err.message});
    }
}