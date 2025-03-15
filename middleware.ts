// import { NextRequest, NextResponse } from "next/server"; // doesn't need after importing from middleware;
// import middleware from 'next-auth/middleware';

// export default middleware;
//rather than importing and exporting same module from same path [ as we done above], we can directly export the middleware from 'next-auth/middleware' as below
export {default} from 'next-auth/middleware';

export const config = {
    // * : zero or more parameters
    // + : one or more parameters
    // ? : zero or one parameters
    // :id : parameter with name id
    matcher : ['/users/:id*'],
}
