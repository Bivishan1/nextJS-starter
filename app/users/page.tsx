import React from 'react';
import UserTable from './UserTable';
import Link from 'next/link';

interface Props {
  // params : {slug : string[]};
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