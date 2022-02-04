import express from "express";
import {getFaculties, addFaculty} from '../controllers/faculty.js'

const router= express.Router();

router.get('/',getFaculties);
router.post('/add',addFaculty);

export default router;