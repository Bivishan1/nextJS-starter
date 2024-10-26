import React from 'react'

//define user type & mapping with the api data in typeScript,,,
//in type, we should define the shape of our user object.
interface Users {
    id : number,
    name : string,
    email:string
    }

const UserTable = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users', 
        // {cache: 'no-store'}
        {next: {revalidate: 10}}//next.js gonna run background job and get fresh data from backend every 10 seconds.
      );
      const users: Users[] = await res.json();
  return (
    <div>
        <table className='table table-bordered'>
         <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
        <tbody>
          
    {users.map(user=> <tr key={user.id}> 
      <td>{user.name}</td>
      <td>{user.email}</td>
    </tr>

  )}
   </tbody>
         </table>
    </div>
  )
}

export default UserTable