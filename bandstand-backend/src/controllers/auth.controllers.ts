import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/user.model";
import Artist from "../models/artist.model";
import Listener from "../models/listener.model";
import RecordLabel from "../models/record_label.model";
import ShowOrganizer from "../models/show_organizer.model";

const SECRET_KEY = process.env.JWT_SECRET_KEY || "your_secret_key";

export const signup = async (req: Request, res: Response) => {
  const {
    username,
    email,
    password,
    userType,
    profilePicture,
    socialLinks,
    bio,
    genres,
    favoriteGenres,
  } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    let newUser;
    if (userType === "artist") {
      newUser = new Artist({
        username,
        email,
        password: hashedPassword,
        userType,
        profilePicture,
        socialLinks,
        bio,
        genres,
      });
    } else if (userType === "listener") {
      newUser = new Listener({
        username,
        email,
        password: hashedPassword,
        userType,
        profilePicture,
        socialLinks,
        favoriteGenres,
      });
    } else if (userType === "recordLabel") {
      newUser = new RecordLabel({
        username,
        email,
        password: hashedPassword,
        userType,
        profilePicture,
        socialLinks,
      });
    } else if (userType === "showOrganizer") {
      newUser = new ShowOrganizer({
        username,
        email,
        password: hashedPassword,
        userType,
        profilePicture,
        socialLinks,
      });
    } else {
      return res.status(400).json({ message: "Invalid user type" });
    }

    await newUser.save();

    const token = jwt.sign({ userId: newUser._id }, SECRET_KEY, {
      expiresIn: "1h",
    });

    res.status(201).json({ token, user: newUser });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ userId: user._id }, SECRET_KEY, {
      expiresIn: "1h",
    });

    res.status(200).json({ token, user });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
