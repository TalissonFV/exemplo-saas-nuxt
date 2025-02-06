import mongoose from 'mongoose';

export const connectDb = async (): Promise<void> => {
  if (mongoose.connections[0].readyState) {
    console.log('Using existing MongoDB connection');
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/nuxt-auth-db');
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw new Error('MongoDB connection error');
  }
};
