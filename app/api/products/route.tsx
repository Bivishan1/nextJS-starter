import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

export function GET(request: NextRequest) {
    return NextResponse.json( [ {id:1, name:'milk',price:'$2.23'}, {id:2, name:'sugar', price:'$5.66'}]);
}

export async function POST(request: NextRequest) {
     const body = await request.json();
     const validation = schema.safeParse(body);
     if (!validation.success) 
        return NextResponse.json(validation.error.errors, {status:400}) // bad request
    //  return NextResponse.json( {id:1, ...body})//...body, here a malicious user can send properties that we are not going to accept. so be specific like below:
    return NextResponse.json( {id:10, name:body.name, price : body.price}, {status:201}) // just optional to set that status

}