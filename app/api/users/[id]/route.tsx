//route handlers function to handle http requests like GET, POST & PUT.

import { NextRequest, NextResponse } from "next/server";
import schema from "../scheme";

//an endpoint for getting an single object
export async function GET(request: NextRequest, {params}:{params:{id:string}}) { 
    const { id } = await params;
    if (Number(id) > 10)
        return NextResponse.json( {error:'User not found'}, {status:404});
    return NextResponse.json( {id:1, name:'bivishan'});
}

export async function PUT(request:NextRequest, {params}:{params:{id:string}}) {
  const body =  await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success) { 
    return NextResponse.json(validation.error.errors, {status:400});  
}

if (Number(params.id) > 10) {
    return NextResponse.json({error: "user not found"}, {status:404});
}

return NextResponse.json({id:1, name: body.name});
}

export function DELETE(request:NextRequest, {params}:{params:{id:string}}) {
    if (Number(params.id) > 10) 
        return NextResponse.json({error: "user not found"}, {status:404});
    return NextResponse.json({})   //different logic based on application structure.  
}