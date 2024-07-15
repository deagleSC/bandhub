import express from 'express';
import {
  getRecordLabel,
  updateRecordLabel,
  deleteRecordLabel,
  getAllRecordLabels
} from '../controllers/record_label.controllers';
import verifyToken from '../middlewares/verify_token.middleware';

const router = express.Router();

router.get('/:id', getRecordLabel);
router.put('/:id', verifyToken, updateRecordLabel);
router.delete('/:id', verifyToken, deleteRecordLabel);
router.get('/', getAllRecordLabels);

export default router;