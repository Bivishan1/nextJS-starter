//route handlers function to handle http requests like GET, POST & PUT.

import { NextRequest, NextResponse } from "next/server";
import schema from "../scheme";
import {prisma} from "@/prisma/client";

//an endpoint for getting an single object
export async function GET(request: NextRequest, {params}:{params:{id:string}}) { // little desctructing
    const { id } =  await params;
    // const user = await prisma.user.findUnique({where: {id: params.id}});
    console.log('gettingssh');
    const user = await prisma.user.findUnique({where : {id: Number(id)}});
    if (!user)
        return NextResponse.json( {error:'User not found'}, {status:404});
    return NextResponse.json(user, {status:200});
}

export async function PUT(request:NextRequest, {params}:{params:{id:string}}) {
  const body =  await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success) { 
    return NextResponse.json(validation.error.errors, {status:400});  
}

const user = await prisma.user.findUnique({ where : {id:Number(params.id)}})

if (!user) {
    return NextResponse.json({error: "user not found"}, {status:404});
}

//updating from body of email and name values
const updatedUser = await prisma.user.update( {// we await the call to update the user
    where : { id: user.id},
    data : {
        email : body.email,
        name : body.name
    }
})

return NextResponse.json(updatedUser, {status:200});
}

export async function DELETE(request:NextRequest, {params}:{params:{id:string}}) {
    const user = await prisma.user.findUnique( {where: {id: Number(params.id)}});
    if (!user) 
        return NextResponse.json({error: "user not found"}, {status:404});

    await prisma.user.delete({where : {id:user.id}});
    return NextResponse.json({})   //different logic based on application structure.  
}