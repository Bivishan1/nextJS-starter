
import { NextRequest, NextResponse } from "next/server";
import schema from "./scheme";
import { prisma } from "@/prisma/client";



export async function GET(request: NextRequest) { 
    const users = await prisma.user.findMany(); // we can have multiple filter like where { email :''}, and other logic also,,e.g. findMany({where: {})
    return NextResponse.json(users);
    // return NextResponse.json( [
    //     {id:1, name:'bivishan'},
    //     {id:2, name:'saraswoti'}
    // ]);
}

//POST request handler to create a new user like a creating new object
export async function POST(request: NextRequest) {
// first we should read body of the request, which will return promise
const body = await request.json();

// replacing if conditional validating with zod's schema
const validation = schema.safeParse(body);

//now, just validating the request
if (!validation.success)
    return NextResponse.json(validation.error.errors, {status:400})

const testUser = await prisma.user.findUnique( {where: {email:body.email}})

if (testUser) {
    return NextResponse.json({error: "User already exists"}, {status:400})
}
//awaited to get user object that was inserted into database
const newUser = await prisma.user.create({
    data : {
        //here, we don't need other properties to define because we provide them default value in model
    name : body.name, 
    email : body.email
}});
return NextResponse.json(newUser, {status:201});//201 common convention to indicate an object is created
}
