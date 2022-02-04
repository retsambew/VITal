import express from "express";
import {getEvents, addEvent} from '../controllers/event.js'

const router= express.Router();

router.get('/',getEvents);
router.post('/add',addEvent);

export default router;