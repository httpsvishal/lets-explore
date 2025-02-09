import mongoose from "mongoose";

const URI = process.env.MONGO_URI ;

export async function connectDb (){
    if (mongoose.connection.readyState >= 1) return; // mongoose.connection.readyState is a property that indicates the current state of the connection.The check >= 1 ensures that if Mongoose is already connected or connecting, it won’t attempt a new connection.
    try{
        await mongoose.connect(URI);
        console.log('Connected to MongoDB');
    }
    catch (error){
        console.log('Error connecting to MongoDB:', error);
    }
}