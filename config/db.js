import mongoose from "mongoose";
import dns from "dns";

dns.setServers(['1.1.1.1', '8.8.8.8']);

export const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Mongo DB Connected");
    } catch(error){
        console.error(error,"ERROR");
        process.exit(1);
    }
}
