import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import authRoutes from './routes/auth.routes';
import userRoutes from './routes/user.routes';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

app.get("/api/test", (req: Request, res: Response) => {
  res.status(200).json({server: "Bandstand"});
});

app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);

const connect = (next: { (): void }) => {
  mongoose
    .connect(process.env.MONGO as string)
    .then(() => {
      console.log("Mongodb connected");
      next();
    })
    .catch((err) => {
      throw err;
    });
};

connect(() => {
  app.listen(port, () => {
    console.log(`Listening to port ${port}`);
  });
});