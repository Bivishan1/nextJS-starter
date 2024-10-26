import React from 'react'

// to access route parameters i.e. [id] here, we need to pass props to this component.
interface Props {
  params: { id: string }; // Change number to string since URL params are strings
}

const UserDetails = async ({ params }: Props) => {
  // Await the params to ensure they are resolved cause they are fetching from server.
  const { id } = await params;

  return (
    <div>UserDetails {id}</div>
  );
};

export default UserDetails;
