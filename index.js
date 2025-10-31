import express from "express";
import "dotenv/config";
import { connectDatabase } from "./config/connectDatabase.js";
// import mongoose from "mongoose";
import { apiRouter } from "./route/apiRoute.js";

const app = express();
const PORT = process.env.PORT;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
connectDatabase();
// const User = mongoose.model(
//   "User",
//   new mongoose.Schema({}, { strict: false }),
//   "data"
// );

app.use("/user", apiRouter);
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
