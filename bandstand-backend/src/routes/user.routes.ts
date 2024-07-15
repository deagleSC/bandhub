import express from 'express';
import {
  getUser,
  updateUser,
  deleteUser,
  getAllUsers
} from '../controllers/user.controllers';
import verifyToken from '../middlewares/verify_token.middleware';

const router = express.Router();

router.get('/:id', getUser);
router.put('/:id', verifyToken, updateUser);
router.delete('/:id', verifyToken, deleteUser);
router.get('/', getAllUsers);

export default router;