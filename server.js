import { app } from "./app.js";
import Razorpay from "razorpay";
import dotenv from "dotenv";
import { connectDB } from "./DB/database.js";

dotenv.config();

export const instance = new Razorpay({
    key_id : process.env.RAZORPAY_API_KEY,
    key_secret: process.env.RAZORPAY_API_SECRET
})

const startServer = async () => {
    await connectDB();
    console.log(`Mongodb connected`);

    app.get("/", (req,res) =>{
        res.send("server is running")
    })

    return app;
}

export default startServer();