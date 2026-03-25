import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI, {
            dbName: DB_NAME
        })
        console.log("MONGO DB connected successfully ")
    } catch (error) {
        console.log("MONGO DB Connection FAILED ! ", error)
        process.exit(1)
    }
}

export default connectDB