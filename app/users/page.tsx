import React from 'react';
import UserTable from './UserTable';
import Link from 'next/link';
import { getServerSession } from 'next-auth';
import authOptions from '../api/auth/authOptions';
import { redirect } from 'next/navigation'; // To handle redirects


interface Props {
  // params : {slug : string[]};
  // searchParams : {sortOrder : string }
  searchParams : Promise<{sortOrder : string}>
}
// this is a users page.
// async function UsersPage({searchParams} : Props,, {params} : Props){
async function UsersPage({searchParams} : Props){
  const session = await getServerSession(authOptions);
  
  // Check if session is authenticated
  if (!session) {
    // If no session, redirect to a login page or show an unauthenticated message
    redirect('/auth/signin'); // You can change this to a custom path
  }
  const { sortOrder } = await searchParams;// or whatever default you want
  // console.log(sortOrder);
  return (
    <div>
      <h1 className='text-xl underline'>Users</h1>
      <Link href='/users/new' className='btn'>New User</Link>
      {/* <p>{new Date().toLocaleTimeString()}</p> */}
      <UserTable sortOrder = {sortOrder}/>
    </div>
  )
}

export default UsersPage;