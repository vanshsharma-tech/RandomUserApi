import mongoose from "mongoose";

const connectDatabase = async (req, res) => {
  try {
    let res = await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Database connection failed ERRRR: ", error.message);
  }
};

export { connectDatabase };
