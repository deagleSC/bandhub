import { Request, Response } from 'express';
import ShowOrganizer from '../models/show_organizer.model';

export const getShowOrganizer = async (req: Request, res: Response) => {
  try {
    const showOrganizer = await ShowOrganizer.findById(req.params.id).populate('events');
    if (!showOrganizer) {
      return res.status(404).json({ message: 'Show Organizer not found' });
    }
    res.status(200).json(showOrganizer);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

export const updateShowOrganizer = async (req: Request, res: Response) => {
  try {
    const updatedShowOrganizer = await ShowOrganizer.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedShowOrganizer) {
      return res.status(404).json({ message: 'Show Organizer not found' });
    }
    res.status(200).json(updatedShowOrganizer);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

export const deleteShowOrganizer = async (req: Request, res: Response) => {
  try {
    const deletedShowOrganizer = await ShowOrganizer.findByIdAndDelete(req.params.id);
    if (!deletedShowOrganizer) {
      return res.status(404).json({ message: 'Show Organizer not found' });
    }
    res.status(200).json({ message: 'Show Organizer deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

export const getAllShowOrganizers = async (req: Request, res: Response) => {
  try {
    const showOrganizers = await ShowOrganizer.find().populate('events');
    res.status(200).json(showOrganizers);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};