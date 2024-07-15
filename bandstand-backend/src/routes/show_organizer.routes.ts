import express from 'express';
import {
  getShowOrganizer,
  updateShowOrganizer,
  deleteShowOrganizer,
  getAllShowOrganizers
} from '../controllers/show_organizer.controllers';
import verifyToken from '../middlewares/verify_token.middleware';

const router = express.Router();

router.get('/:id', getShowOrganizer);
router.put('/:id', verifyToken, updateShowOrganizer);
router.delete('/:id', verifyToken, deleteShowOrganizer);
router.get('/', getAllShowOrganizers);

export default router;