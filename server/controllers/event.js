import express from "express"
import mongoose from 'mongoose'

import model from '../models/eventInfo.js'

export const getEvents = async (req,res) => {
    try{
        const events= await model.find();

        res.status(200).json(events);
    }catch(err){
        res.status(404).json({message: err.message})
    }
}

export const addEvent = async (req,res) => {
    const { name, desc, host, reward, eleg, date, link, logo}=req.body;

    const event=new model({ name, desc, host, reward, eleg, date, link, logo});
    try{
        await event.save();

        res.status(201).json(event);
    }catch(err){
        console.log(err.message);
        res.status(409).json({message:err.message});
    }
}