// to work with our database, first we need to create a prisma client, like this client.ts:
// import { PrismaClient } from "@prisma/client";

//creating instance of Prisma
// const prisma  = new PrismaClient();

//in this object, we have access to the model we have define in our schema.
//& this, prisma.user has a different methods for CRUD operations
// prisma.user
// but now we are going to comment all of the above and copy new this setup code from official website : https://www.prisma.io/docs/orm/more/help-and-troubleshooting/nextjs-help#best-practices-for-using-prisma-client-in-development
////////////////////////////================================/////////////////////
// lib/prisma.ts
import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;