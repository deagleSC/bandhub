import { Request, Response } from 'express';
import Listener from '../models/listener.model';

export const getListener = async (req: Request, res: Response) => {
  try {
    const listener = await Listener.findById(req.params.id).populate('following');
    if (!listener) {
      return res.status(404).json({ message: 'Listener not found' });
    }
    res.status(200).json(listener);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

export const updateListener = async (req: Request, res: Response) => {
  try {
    const updatedListener = await Listener.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedListener) {
      return res.status(404).json({ message: 'Listener not found' });
    }
    res.status(200).json(updatedListener);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

export const deleteListener = async (req: Request, res: Response) => {
  try {
    const deletedListener = await Listener.findByIdAndDelete(req.params.id);
    if (!deletedListener) {
      return res.status(404).json({ message: 'Listener not found' });
    }
    res.status(200).json({ message: 'Listener deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

export const getAllListeners = async (req: Request, res: Response) => {
  try {
    const listeners = await Listener.find().populate('following');
    res.status(200).json(listeners);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};