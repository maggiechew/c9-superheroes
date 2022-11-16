import mongoose from "mongoose";
import { config } from "dotenv";
config();
// import dotenv from 'dotenv';
// dotenv.config();
import DEBUG from "debug";
let debug = DEBUG("server:mongoose");

mongoose.connect(process.env.MONGODB_URI, () => {
  debug(`connected to mongoose on ${process.env.MONGODB_URI}`);
})

export default mongoose;