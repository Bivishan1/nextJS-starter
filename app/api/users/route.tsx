
import { NextRequest, NextResponse } from "next/server";
import schema from "./scheme";


interface Props {
}
export function GET(request: NextRequest) { 
    return NextResponse.json( [
        {id:1, name:'bivishan'},
        {id:2, name:'saraswoti'}
    ]);
}

//POST request handler to create a new user like a creating new object
export async function POST(request: NextRequest) {
// first we should read body of the request, which will return promise
const body = await request.json();
;

// replacing if conditional validating with zod's schema
const validation = schema.safeParse(body);

//now, just validating the request
if (!validation.success)
    return NextResponse.json(validation.error.errors, {status:400})
return NextResponse.json({id:1, name:body.name}, {status:201});//201 common convention to indicate an object is created
}
