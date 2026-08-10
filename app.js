import express from 'express'
import logger from './middleware/logger.js';
import errorHandler from './middleware/error.js';
import notFound from './middleware/notFound.js';
import { connectDB } from './config/db.js';
import userRoutes from './router/userRoutes.js';
import blogRoutes from './router/blogRoutes.js';
import bodyParser from 'body-parser';
import dotenv from 'dotenv'
import morgan from 'morgan';

//Load Env Variables
dotenv.config();

const app = express();

// Connect to DB
connectDB();

// app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({extended: false}));


// Logger Middleware
app.use(logger);

app.use(morgan('combined'));

// Routes
app.use('/api/users', userRoutes);
app.use('/api/blogs', blogRoutes);


app.get('/', (req,res,next)=>{
    res.send('Hello World');
})
// Error Handler
app.use(notFound);
app.use(errorHandler);

export default app;