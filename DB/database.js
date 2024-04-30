import mongoose from "mongoose";

export const connectDB = async () => {
    const {connect} = await mongoose.connect(process.env.MONGO);
    console.log(`Mongodb connected`)
}