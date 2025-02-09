import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { User } from '../models/User';
import { connectDb } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function POST(req) {
    try{
        await connectDb();
        const { email, password } = await req.json();
        
        const user = await User.findOne({ email });
        if(!user){
            return NextResponse.json({error:"User doesn't exist"},{status:401});
        }

        const isMatched = bcryptjs.compare(password,user.password);
        if(!isMatched){
            return NextResponse.json({error:"Invalid password"},{status:401});
        }

        const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET, {expiresIn: '1d'});
        return NextResponse.json({message : "Login Successful" ,token}, {status:200});
    }
    catch (error) {
        return NextResponse.json({error:"Internal Server Error"},{status:500});
    }
}