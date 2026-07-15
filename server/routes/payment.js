import express from "express";
import Razorpay from "razorpay";
import dotenv from 'dotenv';
dotenv.config();
const router = express.Router();

console.log("Key ID:", process.env.RAZORPAY_KEY_ID);
console.log("Key Secret length:", process.env.RAZORPAY_KEY_SECRET.length);
const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
});

router.post("/create-order", async (req, res) => {
    try {

        const { amount } = req.body;

        const options = {
            amount: amount * 100, 
            currency: "INR",
            receipt: "receipt_" + Date.now(),
        };

        const order = await razorpay.orders.create(options);

        res.json(order);

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Unable to create order"
        });
    }
});

export default router;