import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "@/prisma/client";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

//only defining the types of authOptions which is nextauthoptions here, allows to provide auto completion, when we press ctrl + spacebar.
const authOptions: NextAuthOptions = {
  //configuration object, n bunch of properties like providers and adapters
  adapter: PrismaAdapter(prisma),
  providers: [
    // custom credentials provider for user email and password authentication
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "Email" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Password",
        },
      },
      async authorize(credentials, req) {
        if (!credentials?.email || !credentials?.password) return null;

        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        if (!user) return null;
        //bcrypt to match the password and ecrypt upon inserting passwords
        //for bcrypt types, have to install bcrypt types first
        const passwordMatch = await bcrypt.compare(
          credentials.password,
          user.hashedPassword!
        );

        return passwordMatch ? user : null;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  session: {
    strategy: "jwt", //we specifiy these because next-auth tries to convert this strategy to database but by default session we used here is jwt so,,
  },
};

export default authOptions;
