import Express from "express";
import {getSection, getCourses, addCourse} from '../controllers/courses.js';

const router= Express.Router();

router.get('/', getCourses);
router.post('/add', addCourse);
router.get('/:sec', getSection);

export default router;