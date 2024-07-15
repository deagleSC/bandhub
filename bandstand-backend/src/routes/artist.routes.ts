import express from 'express';
import {
  getArtist,
  updateArtist,
  deleteArtist,
  getAllArtists
} from '../controllers/artist.controllers';
import verifyToken from '../middlewares/verify_token.middleware';

const router = express.Router();

router.get('/:id', getArtist);
router.put('/:id', verifyToken, updateArtist);
router.delete('/:id', verifyToken, deleteArtist);
router.get('/', getAllArtists);

export default router;