import express from 'express';
import cors from 'cors'
import dotenv from 'dotenv';
import Routes from './src/routes/main.js';
import connectDB from './src/config/connect.js';
import morgan from 'morgan';

// initialize express app
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
dotenv.config();


if (process.env.APP_ENV === 'development') {
    app.use(morgan('dev'));
  }
// Connect to MongoDB
connectDB();
// define port number from environment variable or use default port 3000
const PORT = process.env.PORT || 3000;
// ! start routing system
app.use(Routes);
// ! end routing system
//  listen to port 
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});