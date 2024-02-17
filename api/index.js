import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import authRoutes from './routes/auth.route.js';
import userRoutes from './routes/user.route.js';
import cookieParser from 'cookie-parser';
dotenv.config();
mongoose.connect(process.env.MONGO).then(() =>{console.log("बैकएंड मोंगोडब से जुड़ा है")})
.catch((err)=>{
    console.log(err);
})
const app =express();
app.use(express.json());
app.use(cookieParser());

app.listen(3000,() =>{
    console.log('सर्वर पोर्ट 3000 पर चल रहा है');
})

app.use('/api/user', userRoutes);
app.use('/api/auth',authRoutes);

app.use((err, req, res ,next)=>{
     const statusCode =err.statusCode ||500;
     const message=err.message || 'Internal Server Error';
     res.status(statusCode).json({
        success:false,
        statusCode,
        message
     })
})