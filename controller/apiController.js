import express from "express";
import mongoose from "mongoose";
const User = mongoose.model(
  "User",
  new mongoose.Schema({}, { strict: false }),
  "data"
);
const apiController = async (req, res) => {
  let id = parseInt(req.params.id);
  const user = await User.findOne({ id }).select("-_id");
  if (!user) {
    return res.status(400).json({ message: "User not found" });
  }
  res.status(200).json(user);
};

export { apiController };
