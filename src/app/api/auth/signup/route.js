import mongoose from "mongoose";
import bcryptjs from "bcryptjs";
import { connectDb } from "@/lib/db";
import { NextResponse } from "next/server";
import User from "@/models/User";


export async function POST(req){
    console.log("request recieved")
    try{
        await connectDb()
        const {name, email, password} = await req.json();

        const existingUser = await User.findOne({email});
        if (existingUser) {
            return NextResponse.json({error : "User already exists"}, {status : 400})
        }
        const hashedPassword = await bcryptjs.hash(password, 10);
        const user = new User({name, email, password : hashedPassword});
        await user.save();
        NextResponse.json({data : "User created successfully"}, {status : 201})
    }
    catch (error) {
        NextResponse.json({error : `Error Creating User ${error.message}`}, {status : 500})
        }
}

