import mongoose from "mongoose";

 const connectDB = async () => {
    mongoose.connect(process.env.MONGO_URI)
      .then(() => console.log('MongoDB connected successfully'))
      .catch(err => console.error(err));
}

export default connectDB;