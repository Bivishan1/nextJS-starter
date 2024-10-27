import React from 'react';
import UserTable from './UserTable';

interface Props {
  params : {slug : string[]};
  searchParams : {sortOrder : string }
}



async function UsersPage({searchParams} : Props){
  const { sortOrder } = await searchParams || { sortOrder: '' }; // or whatever default you want
  console.log(sortOrder);
  return (
    <div>
      <h1 className='text-xl underline'>Users</h1>
      {/* <p>{new Date().toLocaleTimeString()}</p> */}
      <UserTable sortOrder = {sortOrder}/>
    </div>
  )
}

export default UsersPage;