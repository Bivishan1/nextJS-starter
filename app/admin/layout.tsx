import React, { ReactNode } from 'react'

//in layout, it should always have one children type i.e. ReactNode.
interface Props { 
    children: ReactNode;
}

const AdminLayout = ({children}: Props) => {

  return (
    <div className="container flex">
<aside className='p-5 bg-slate-200 mr-5'> Admin SideBar </aside>
<div>{children}</div>
    </div>
  )
}

export default AdminLayout