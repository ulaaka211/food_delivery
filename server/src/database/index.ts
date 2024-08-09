import mongoose from "mongoose";

export const connectDatabase = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://uulaaka73:sain123456@cluster0.acrr0gy.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("database connected");
  } catch (error) {
    console.log("database connection failed");
  }
};
