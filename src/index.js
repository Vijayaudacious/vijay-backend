// require("dotenv").config({ path: "./env" });   // first  formate

import connectDB from "./db/index.js";
import dotenv from "dotenv";

dotenv.config({
  path: "./env", // second formate this is right formate
});

connectDB();

//data base conaction-----------------------
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
// import express from "express";
// const app = express()(async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
//     app.on("error", () => {
//       console.error(error);
//       throw error;
//     });
//     app.listen(process.env.PORT, () => {
//       console.log(`App is listen on port ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.error(error);
//   }
// })();
//--------------------------------------------------------
