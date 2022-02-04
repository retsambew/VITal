import Express from "express";
import {getNotes, addNotes} from '../controllers/notes.js'

const router= Express.Router();

router.get('/', getNotes);
router.post('/add', addNotes);

export default router;