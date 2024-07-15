import { Request, Response } from 'express';
import Artist from '../models/artist.model';

export const getArtist = async (req: Request, res: Response) => {
  try {
    const artist = await Artist.findById(req.params.id).populate('albums').populate('tracks').populate('followers');
    if (!artist) {
      return res.status(404).json({ message: 'Artist not found' });
    }
    res.status(200).json(artist);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

export const updateArtist = async (req: Request, res: Response) => {
  try {
    const updatedArtist = await Artist.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedArtist) {
      return res.status(404).json({ message: 'Artist not found' });
    }
    res.status(200).json(updatedArtist);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

export const deleteArtist = async (req: Request, res: Response) => {
  try {
    const deletedArtist = await Artist.findByIdAndDelete(req.params.id);
    if (!deletedArtist) {
      return res.status(404).json({ message: 'Artist not found' });
    }
    res.status(200).json({ message: 'Artist deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

export const getAllArtists = async (req: Request, res: Response) => {
  try {
    const artists = await Artist.find().populate('albums').populate('tracks').populate('followers');
    res.status(200).json(artists);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};