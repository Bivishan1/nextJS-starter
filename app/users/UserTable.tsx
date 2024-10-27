import React from 'react';
import { sort } from 'fast-sort';
import Link from 'next/link';

interface Props {
  // searchParams : {sortOrder : string };
  sortOrder: string;
}
//define user type & mapping with the api data in typeScript,,,
//in type, we should define the shape of our user object.
interface Users {
    id : number,
    name : string,
    email:string
    }

    //whenever we need to use queryString parameter, we need to use in Page, instead in components.
// interface Props { 
//       searchParams : {sortOrder : string }
//     }

const UserTable = async ({sortOrder} : Props) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users', 
        // {cache: 'no-store'}
        {next: {revalidate: 10}}//next.js gonna run background job and get fresh data from backend every 10 seconds.
      );
      const users: Users[] = await res.json();
      // const { sortOrder } = await searchParams || { sortOrder: '' };

      const sortedUsers = sort(users).asc(
        sortOrder=== 'email'? 
        (user)=>user.email : 
        (user)=> user.name
      )

  return (
    <div>
        <table className='table table-bordered'>
         <thead>
            <tr>
              <th>
                <Link href ='/users?sortOrder=name'>Name</Link>
                 
                
                </th>
              <th>
                
              <Link href ='/users?sortOrder=email'>Email</Link> </th>
            </tr>
          </thead>
        <tbody>
          
    {sortedUsers.map(user=> <tr key={user.id}> 
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