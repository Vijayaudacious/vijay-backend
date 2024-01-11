import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const conectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_NAME}}`
    );
    console.log(
      `\n monogDB conected !! DB HOST: ${conectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MONGODB connection FEILD", error);
    process.exit(1);
  }
};

export default connectDB;
