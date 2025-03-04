//route handlers function to handle http requests like GET, POST & PUT.
//is a endpoint, returning a  collection of objects,
import { NextRequest, NextResponse } from "next/server";
import schema from "./scheme";

//don't need this because already destructing in the parameters section
interface Props {
    // params: {id:string}; // params object accessing id property as a string;
    // params: Promise<{ id: string }>;

}
export function GET(request: NextRequest) { //request object of type `NextRequest` from `next/server`;
// request: NextRequest helps to remove caching which helps us to get dynamic data.
    //generally we fetch data from the db, E.g. we fetch users from db, but here just for practice,,,
   
    return NextResponse.json( [
        {id:1, name:'bivishan'},
        {id:2, name:'saraswoti'}
    ]);
}

//POST request handler to create a new user like a creating new object
export async function POST(request: NextRequest) {
// first we should read body of the request, which will return promise
const body = await request.json();
//just sending random data to body to see in the response of postman
// return NextResponse.json({id:1, name:'bivishan', role:'admin'});
//return nextResponse.json(body);

// replacing if conditional validating with zod's schema
const validation = schema.safeParse(body);

//now, just validating the request
if (!validation.success)
    return NextResponse.json(validation.error.errors, {status:400})
return NextResponse.json({id:1, name:body.name}, {status:201});//201 common convention to indicate an object is created
}
