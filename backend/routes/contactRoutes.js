import { Router } from 'express';
import { contactHandler } from '../controllers/contactController.js';

const router = Router();
router.post('/', contactHandler);

export default router;
