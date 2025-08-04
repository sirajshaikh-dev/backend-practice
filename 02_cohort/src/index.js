import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import authRoutes from "./routes/auth.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("hello");
});

app.use("/api/v1/users", authRoutes);

const db = async (params) => {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("mongo connected");
};

db();

app.listen(PORT, () => {
  console.log(`server is listening on ${PORT}`);
});
