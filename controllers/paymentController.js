import { instance } from "../server.js";
import crypto from "crypto";
import Payment from "../model/paymentSchema.js"

//create order
export const checkOut = async (req, res) => {
  const options = {
    amount: Number(req.body.amount * 100), // convert in paise
    currency: "INR",
  };
  // console.log(options)
  try {
    const order = await instance.orders.create(options);
    // console.log(order)
    // console.log(order)
    res.status(200).json({ sucess: true, order });
  } catch (error) {
    res.status(500).json({ sucess: false, message: "Server Error" });
  }
};
export const paymentVerification = async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
  const hmac = crypto.createHmac("sha256", process.env.RAZORPAY_API_SECRET);

  const generated_signature = hmac.update(
    razorpay_order_id + "|" + razorpay_payment_id,
  ).digest('hex');
//   console.log(generated_signature, razorpay_signature);

  const isAuth = generated_signature == razorpay_signature
    if (isAuth) {
        //save in to the mongodb
        await Payment.create({razorpay_order_id, 
            razorpay_payment_id, 
            razorpay_signature
        })
        res.redirect(`http://localhost:3001/paymentsucess?reference=${razorpay_payment_id}`)
      
    }
    else{
         console.log("lkjh")
        res.status(500).json({ sucess: false });
    }
};
