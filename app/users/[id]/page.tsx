import React from 'react'

// to access route parameters i.e. [id] here, we need to pass props to this component.
interface Props { 
  params: {id : string}
}

 const UserDetails = ({params}:  Props) => {
  const {id} = params;
  return (
    <div>UserDetails {id}</div>
  )
}

export default UserDetails;
