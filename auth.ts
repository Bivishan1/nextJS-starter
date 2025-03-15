import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";

//storing object in export const, so that we can use ths object outside of module.
export const authOptions  = {
		providers : [
			GoogleProvider( {
				clientId: process.env.GOOGLE_CLIENT_ID || "",
				clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
				})
			]
	}

	const handler = NextAuth(authOptions);
	export { handler as GET, handler as POST };