import React from 'react';
import UserTable from './UserTable';




async function UsersPage(){

  return (
    <div>
      <h1 className='text-xl underline'>Users</h1>
      {/* <p>{new Date().toLocaleTimeString()}</p> */}
      <UserTable/>
    </div>
  )
}

export default UsersPage;