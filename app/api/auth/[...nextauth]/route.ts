import { handlers } from "@/auth" // Referring to the auth.ts we just created
export const { GET, POST } = handlers; // Destructuring the handlers object to get the GET and POST functions which is handling with handler
//any get & post request send to this endpoint i.e. /auth, will be handle inside this handler function. we are learning next/auth, export a bunch of endpoints (which is here GET & POST)  that starts with /auth ROUTE.
// export const { GET, POST, PUT, DELETE } = handlers; // Destructuring the handlers object to get the GET and POST functions
import Google from "next-auth/providers/google"
