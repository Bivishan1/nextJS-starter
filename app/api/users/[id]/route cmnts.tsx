//route handlers function to handle http requests like GET, POST & PUT.

import { NextRequest, NextResponse } from "next/server";
import schema from "../scheme";

//don't need this because already destructing in the parameters section
interface Props {
    // params: {id:string}; // params object accessing id property as a string;
    // params: Promise<{ id: string }>;

}

//creating an endpoint for getting an single object
export async function GET(request: NextRequest, {params}:{params:{id:string}}) { //request object of type `NextRequest` from `next/server`;

    //generally we fetch data from the db, E.g. we fetch users from db, but here just for practice,,,
    // if not found, return 404 error, means not found
    // else, return data
    const { id } = await params;
    if (Number(id) > 10)
        return NextResponse.json( {error:'User not found'}, {status:404});
    //hardcord returning an object name of bivishan
    return NextResponse.json( {id:1, name:'bivishan'});
}

//patch and put are there to create a new object, but one or more object creation is good in PUT
// export function PUT(request:NextRequest)

// here is two parameters, one is request object, another is params object that contain our route parameters
export async function PUT(request:NextRequest, {params}:{params:{id:string}}) {
    // to update the requested object of user we need to first, as long following,
    // validate the request body // const body = await request.json();
  const body =  await request.json();
  const validation = schema.safeParse(body);// we have parse & safeparse , but safeparse is very specific// safeparse just contains the result of the validation instead of yelling by throwing an exception which is by parse method.
  if (!validation.success) { //checking if there is user's name is available or not means if  we  provide or not username to update the name object.
    // return NextResponse.json({error:'name is required'}, {status:400});   //replacing validation with zod
    return NextResponse.json(validation.error.errors, {status:400});  
    // now use the same zod schema in the POST request in the /users endpoint
}
// fetch the user with given id from db & if doesn't exist, return 404
if (Number(params.id) > 10) {
    return NextResponse.json({error: "user not found"}, {status:404});
}
// otherwise, update the user in the database and return the updated user object
return NextResponse.json({id:1, name: body.name});
}

export function DELETE(request:NextRequest, {params}:{params:{id:string}}) {
    const body = request.json();
    if (Number(params.id) > 10) 
        return NextResponse.json({error: "user not found"}, {status:404});
    return NextResponse.json({}) // different application has different delete logic, or you can you can include the user  that was deleted in the body of the response.//empty object has returned
    // if user is found with valid id, the body of the response willl be empty by our DELETE handler function code.
    
}