import { app } from "./app.js";
import Razorpay from "razorpay";
import dotenv from "dotenv";
import { connectDB } from "./DB/database.js";

dotenv.config();
connectDB()

export const instance = new Razorpay({
    key_id : process.env.RAZORPAY_API_KEY,
    key_secret: process.env.RAZORPAY_API_SECRET
})
app.get("/", (req,res) =>{
    res.send("server is running")
})

// app.listen(process.env.PORT, ()=> console.log(`server is running on ${process.env.PORT}`)
// )

export default app;