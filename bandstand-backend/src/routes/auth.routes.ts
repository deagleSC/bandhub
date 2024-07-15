import express from 'express';
import { signup, login } from '../controllers/auth.controllers';
import verifyToken from '../middlewares/verify_token.middleware';

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);

export default router;