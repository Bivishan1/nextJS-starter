// i create this component next to the root layout,, since, it's only one component here for all the pages, so, didn't create inside the components,,,
// have to use components folder, only for reposity for the shared components.
import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <div className='flex bg-slate-300 p-3'>
        <Link href='/' className='mr-5'>Home</Link>
        <Link href='/users'>Users</Link>
    </div>
  )
}

export default NavBar