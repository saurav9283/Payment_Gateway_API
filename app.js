import express, { urlencoded } from "express"
export const app = express();
import cors from "cors"
import dotenv from "dotenv";

dotenv.config(); 
import paymentRouter from "./routes/paymentRouter.js"

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use("/api", paymentRouter)

app.get("/get_key",(req,res) =>
{
    res.status(200).json({key: process.env.rzp_test_JOiND79xc9A7vE})
}
)

