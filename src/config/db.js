import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

mongoose.connect(process.env.MONGO_URI, (err) => {
    err
        ? console.log("Cannot connect to MongoDB")
        : console.log("Connected to MongoDB")
})

export default mongoose;
