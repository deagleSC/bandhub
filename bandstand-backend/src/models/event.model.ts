import { Schema, model, Document } from 'mongoose';

export interface IEvent extends Document {
  title: string;
  description: string;
  date: Date;
  location: string;
  artists: Schema.Types.ObjectId[];
  ticketsUrl: string;
}

const EventSchema = new Schema<IEvent>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
  location: { type: String, required: true },
  artists: [{ type: Schema.Types.ObjectId, ref: 'Artist' }],
  ticketsUrl: { type: String, required: true }
}, { timestamps: true });

const Event = model<IEvent>('Event', EventSchema);
export default Event;