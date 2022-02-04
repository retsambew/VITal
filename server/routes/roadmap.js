import Express from "express";
import {getRoadmaps, addRoadmap, getSection} from '../controllers/roadmap.js';

const router= Express.Router();

router.get('/', getRoadmaps);
router.post('/add', addRoadmap);
router.get('/:sec', getSection);

export default router;