import Express from "express";
import {getPapers, addPapers} from '../controllers/papers.js'

const router= Express.Router();

router.get('/', getPapers);
router.post('/add', addPapers);

export default router;