import { notFound } from 'next/navigation';
import React from 'react'

// to access route parameters i.e. [id] here, we need to pass props to this component.
interface Props {
  // params is specific property to use as route parameters.
<<<<<<< HEAD
  //params: { id: string }; // Change number to string since URL params are strings
//new code
params: Promise<{ id: string }>;
=======
  params: Promise<{ id: string }>; // Change number to string since URL params are strings
>>>>>>> 6c8e438dc0b9e9551e4926b163c2dfdf15ac037c
}

const UserDetails = async ({ params }: Props) => {
  // Await the params to ensure they are resolved cause they are fetching from server.
  const { id } = await params;
  if (Number(id) >10 || isNaN(Number(id))) notFound();
  // if (typeof id !== 'string' || isNaN(Number(id)) || Number(id) > 10) {
  //   notFound();
  // }
  return (
    <div>UserDetails {id}</div>
  );
};

export default UserDetails;