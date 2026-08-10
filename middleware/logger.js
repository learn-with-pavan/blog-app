import colors from 'colors';

// Logger Middleware
const logger = (req,res,next)=>{
    const methodCors = {
        GET:'green',
        POST:'blue',
        PUT:'yellow',
        DELETE:'red',
    }
    const color = methodCors[req.method] || white;
    console.log(`${req.method} ${req.originalUrl}`[color])
    next();
}

export default logger;