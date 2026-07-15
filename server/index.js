import express from 'express';
import auth from './routes/auth.js'
import route from './routes/database.js';
import payment from "./routes/payment.js";
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config({ path: "./.env" });
const app = express()
app.use(express.json())
app.use(cors())

app.use("/routes/auth", auth)
app.use("/routes/database", route)
app.use("/routes/payment",payment);
console.log(process.env.MONGO_URL);
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
}
);