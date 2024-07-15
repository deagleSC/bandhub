import { Request, Response } from 'express';
import RecordLabel from '../models/record_label.model';

export const getRecordLabel = async (req: Request, res: Response) => {
  try {
    const recordLabel = await RecordLabel.findById(req.params.id).populate('artists');
    if (!recordLabel) {
      return res.status(404).json({ message: 'Record Label not found' });
    }
    res.status(200).json(recordLabel);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

export const updateRecordLabel = async (req: Request, res: Response) => {
  try {
    const updatedRecordLabel = await RecordLabel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedRecordLabel) {
      return res.status(404).json({ message: 'Record Label not found' });
    }
    res.status(200).json(updatedRecordLabel);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

export const deleteRecordLabel = async (req: Request, res: Response) => {
  try {
    const deletedRecordLabel = await RecordLabel.findByIdAndDelete(req.params.id);
    if (!deletedRecordLabel) {
      return res.status(404).json({ message: 'Record Label not found' });
    }
    res.status(200).json({ message: 'Record Label deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

export const getAllRecordLabels = async (req: Request, res: Response) => {
  try {
    const recordLabels = await RecordLabel.find().populate('artists');
    res.status(200).json(recordLabels);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};