import express from "express";
import {getClubs, addClubs} from '../controllers/clubs.js'

const router= express.Router();

router.get('/',getClubs);
router.post('/add',addClubs);

export default router;