//route handlers function to handle http requests like GET, POST & PUT.

import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import {prisma} from "@/prisma/client";

//an endpoint for getting an single object
export async function GET(request: NextRequest, {params}:{params:{id:string}}) { // little desctructing
    const { id } =  await params;
    // const user = await prisma.user.findUnique({where: {id: params.id}});
    
    const product = await prisma.product.findUnique({where : {id: Number(id)}});
    if (!product)
        return NextResponse.json( {error:'Product not found'}, {status:404});
    return NextResponse.json(product, {status:200});
}

export async function PUT(request:NextRequest, {params}:{params:{id:string}}) {
  const body =  await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success) { 
    return NextResponse.json(validation.error.errors, {status:400});  
}

const product = await prisma.product.findUnique({ where : {id:Number(params.id)}})

if (!product) {
    return NextResponse.json({error: "Product not found"}, {status:404});
}

//updating from body of email and name values
const updatedProduct = await prisma.product.update( {// we await the call to update the user
    where : { id: product.id},
    data : {
        name : body.name,
        description : body.desription,
        price : body.price
    }
})

return NextResponse.json(updatedProduct, {status:200});
}

export async function DELETE(request:NextRequest, {params}:{params:{id:string}}) {
    const product = await prisma.product.findUnique( {where: {id: Number(params.id)}});
    if (!product) 
        return NextResponse.json({error: "Product not found"}, {status:404});

    await prisma.user.delete({where : {id:product.id}});
    return NextResponse.json({})   //different logic based on application structure.  
}