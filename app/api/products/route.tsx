import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import { prisma } from "@/prisma/client";

export async function GET(request: NextRequest) {
const products = await prisma.product.findMany();
    return NextResponse.json(products, {status: 200});
}

export async function POST(request: NextRequest) {
     const body = await request.json();
     const validation = schema.safeParse(body);
     if (!validation.success) 
        return NextResponse.json(validation.error.errors, {status:400}) // bad request
    //  return NextResponse.json( {id:1, ...body})//...body, here a malicious user can send properties that we are not going to accept. so be specific like below:
const testProduct = await prisma.product.findUnique( {where: {name:body.name}})

if (testProduct) {
    return NextResponse.json({error: "Product Name already exists"}, {status:400})
}
//awaited to get user object that was inserted into database
const newProduct = await prisma.product.create({
    data : {
        //here, we don't need other properties to define because we provide them default value in model
    name : body.name, 
    description : body.description,
    price : body.price
}});
    
return NextResponse.json(newProduct, {status:201}) // just optional to set that status

}