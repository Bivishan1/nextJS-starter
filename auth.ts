// import NextAuth from "next-auth"
// import GoogleProvider from "next-auth/providers/google";
// //for prisma adapters
// import { PrismaAdapter } from "@auth/prisma-adapter";
// import { PrismaClient } from "@prisma/client";
// // import authConfig from "./auth.config"

// const prisma = new PrismaClient()
 
// export const { handlers, signIn, signOut, auth } = NextAuth({
// 	adapter: PrismaAdapter(prisma),
// 	providers : [
// 		GoogleProvider( {
// 			clientId: process.env.GOOGLE_CLIENT_ID || "",
// 			clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
// 			})
// 		],
// 		session: {
// 			strategy: "database"
//     },
		
// })