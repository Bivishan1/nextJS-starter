import React from 'react';
import UserTable from './UserTable';
import Link from 'next/link';

interface Props {
  // params : {slug : string[]};
<<<<<<< HEAD
  // searchParams : {sortOrder : string }
  //new code
=======
>>>>>>> 6c8e438dc0b9e9551e4926b163c2dfdf15ac037c
  searchParams : Promise<{sortOrder : string}>
}
// this is a users page. 

// async function UsersPage({searchParams} : Props,, {params} : Props){
async function UsersPage({searchParams} : Props){
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