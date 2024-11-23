import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const mongooseDB = async () => {
  try {
    console.log(process.env.MONGODB_URI)
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

export default mongooseDB;

