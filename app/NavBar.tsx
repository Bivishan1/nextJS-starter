// i create this component next to the root layout,, since, it's only one component here for all the pages, so, didn't create inside the components,,,
// have to use components folder, only for reposity for the shared components.
"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  //destructing the usesession hook by grabbing status & data from usesession hook and data variable here can be rename to session
  //we should make this client because with this hook, we access the context object that is passed using the session provider.
  const { status, data: session } = useSession();

  
  //if the status is loading, then return loading text or loading spinner or return null;
  return (
    <div className="flex space-x-8 bg-slate-300 p-3">
      <Link href="/" className="mr-5">
        Home
      </Link>
      <Link href="/users">Users</Link>
      {status === "loading" &&  <div>Loading...</div>}
      {/* we give here ! cause when status === 'loading' we don't have user object, but when authenticated, we def. have a user object, that's why we are telling to TS compiler that we def. have a user */}
      {status === "authenticated" && <div>{session.user!.name}
      <Link href="/api/auth/signout" className="ml-4">Sign Out</Link>
       </div>}
      {status === "unauthenticated" && (
        <Link href="/api/auth/signin">Login</Link>
      )}
      
    </div>
  );
};

export default NavBar;
