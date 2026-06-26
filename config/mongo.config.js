import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connect = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log("Database Connected");
  } catch (error) {
    console.error(err);
    console.log("Database Not Connected");
  }
};
