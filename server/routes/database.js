import express from 'express';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
dotenv.config();

const route = express.Router();
console.log(process.env.MONGO_URL);
mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("Connected to MongoDB.."))
    .catch(err => console.error("Could not connect to MongoDB...", err));


const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

const User = mongoose.model("User", userSchema);
const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String
});

const Contact = mongoose.model("Contacts", contactSchema);

const enrollmentSchema = new mongoose.Schema({
  name: String,
  email: String,
  course: String,
  amount: Number,
  paymentStatus: String,
});

const Enrollment = mongoose.model("Enrollment", enrollmentSchema);

route.post('/create-user', async (req, res) => {
    console.log("BODY RECEIVED:", req.body);

    if (!req.body) {
        return res.status(400).json({
            error: "No body received"
        });
    }

    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({
            error: "Please provide all details"
        });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            name,
            email,
            password: hashedPassword
        });

        await newUser.save();

        return res.json({
            message: "User added successfully"
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            error: "Database error"
        });
    }
});

route.post('/login-user', async (req, res) => {
const { email, password } = req.body;
console.log("User logged in!");
    if (!email || !password) {
        return res.status(400).json({
            error: 'Please provide the details'});
    }
    try {
const user = await User.findOne({ email });
if (!user) {
    return res.status(400).json({ message: 'User not found'});
}
        
const isMatch = await bcrypt.compare(password, user.password);

if (!isMatch) {
    return res.status(400).json({message: 'Invalid credentials'});
}
    return res.json({message: 'User logged in successfully'});

    } 
    catch (error) {
    console.log(error);
    return res.status(500).json({error: 'Error in login'});
    }
});

route.post("/contacts", async (req, res) => {
    const { name, email, message } = req.body;
    console.log("User contacted successfully!");
    if (!name || !email || !message) {
        return res.status(400).json({ message: "Please provide all details"});
    }
    try {
    const contactlist = new Contact({
    name: name,
    email: email,
    message: message
});
    await contactlist.save()
    return res.json({message: "Contact form submitted successfully"});
    } 
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Server error"});
    }
});

route.post("/enroll-course", async (req, res) => {
  const { name, email, course, amount } = req.body;

  try {
    const enrollment = new Enrollment({
      name,
      email,
      course,
      amount,
      paymentStatus: "Paid",
    });

    await enrollment.save();

    res.json({
      message: "Enrollment successful",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Enrollment failed",
    });
  }
});
export default route;