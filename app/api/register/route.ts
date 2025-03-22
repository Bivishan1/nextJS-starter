import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import {z} from "zod";
import bcrypt from "bcrypt";

const schema = z.object({
    // define your fields here
    email : z.string().email(),
    password : z.string().min(6).max(20),
    //... other fields
});


export async function POST(req: NextRequest) {
   const body = await req.json();

   const validation = schema.safeParse(body);
   if(!validation.success) {
    return NextResponse.json(validation.error.errors, {status:400});
   }

   const user = await prisma.user.findUnique({where : {email:body.email}});
  
    if(user) {    
        return NextResponse.json({error: "User already exists"}, {status:400});
}

//now, registering users after validation
const hashedPassword = await bcrypt.hash(body.password, 10); //10 is the number of rounds to hash the password, the more rounds the more secure
const newUser = await prisma.user.create( {
    data : {
        email: body.email,
        hashedPassword
    }
})
return NextResponse.json({email:newUser.email}); //for security reason, we won't return a password
}