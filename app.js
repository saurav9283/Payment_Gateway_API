import express, { urlencoded } from "express";
import cors from "cors";
import dotenv from "dotenv";
import paymentRouter from "./routes/paymentRouter.js";
export const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
dotenv.config();

app.use("/api", paymentRouter);

app.get("/get_key", (req, res) => {
  res.status(200).json({ key: process.env.RAZORPAY_API_KEY });
});
