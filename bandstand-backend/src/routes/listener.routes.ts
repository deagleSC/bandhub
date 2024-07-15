import express from 'express';
import {
  getListener,
  updateListener,
  deleteListener,
  getAllListeners
} from '../controllers/listener.controllers';
import verifyToken from '../middlewares/verify_token.middleware';

const router = express.Router();

router.get('/:id', getListener);
router.put('/:id', verifyToken, updateListener);
router.delete('/:id', verifyToken, deleteListener);
router.get('/', getAllListeners);

export default router;