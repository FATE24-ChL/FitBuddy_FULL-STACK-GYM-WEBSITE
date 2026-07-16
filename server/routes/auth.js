import express, { application, json, raw } from 'express';
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const router = express.Router();
const SECRET_KEY = process.env.JWT_SECRET; //dummy secret key

const user ={
email: process.env.EMAIL,
password: process.env.PASSWORD,

} ;

router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
     console.log({name,email,password});
    try {
        const response = await fetch("https://fitbuddy-full-stack-gym-website.onrender.com/routes/database/create-user", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ 'name': name, 'email': email, 'password': password }),
        });
       const data = await response.json();
        console.log(data);
        // console.log(data)
       if (!response.ok) {
    return res.status(400).json({
        message: "Registration failed"
    });
}
        const token = jwt.sign({ name: name, email: email}, SECRET_KEY, { expiresIn: '1h' });
        res.json({ message: data.message, token: token });
    }
    catch (error) {
    console.log(error);

    return res.status(500).json({
        message: "Server error during registration"
    });
}
});

router.post('/log-in', async (req, res) => {
    const { email, password } = req.body;
    console.log("auth:", email, password)
    try {
        const response = await fetch('https://fitbuddy-full-stack-gym-website.onrender.com/routes/database/login-user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ "email": email , "password": password }),
        });
        const data = await response.json();
        if (!response.ok) {
            return res.status(400).json({ message: "Login failed" });
        }

        const token = jwt.sign({ email: email }, SECRET_KEY, { expiresIn: '1h' });
        res.json({ message: data.message, token: token });
    }
    catch (error) {
        console.error("ERROR", error);
        return res.status(500).json({ message: 'Server error during login' });
    }
});

//middleware
function authenticatetoken(req, res, next) {
    const authHeaders = req.headers['Authorization']
    const token = authHeaders && authHeaders.split(' ')[1];
    if (!token) {
        return res.sendStatus(401);
    }
    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
}

export default router;
