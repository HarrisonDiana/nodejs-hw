import { Router } from 'express';
import { getAllNotes, getNoteById } from '../controllers/notesController.js';

const router = Router();

router.get('/notes', getAllNotes);
router.get('/notes/:noteId', getNoteById);

export default router;
