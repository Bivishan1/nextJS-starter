import Link from "next/link";
import ProductCard from "./components/ProductCard";
import {getServerSession} from "next-auth/next";
import { authOptions } from "@/auth";

export default async  function Home() {
  // const session = await getServerSession(); // this will fetch session from the server side and you can use it in your components.
  //object that we use when initializing the next auth, so need to configure in [...nextauth] route.ts ,, or in root auth.ts,, etc.
  //  so have to pass authentication options like providers,, 
  const session = await getServerSession(authOptions) //returns a promise

  return (
    <>
     <h1>Hello, {session && <span>{session.user!.name}</span> }</h1>
     {/* <a href="/users">Users</a> */}
    <Link href="/users">Users</Link>
    <ProductCard/>
    </>
   
  );
}


