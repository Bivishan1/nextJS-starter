import React from 'react'

// defining multiple parameters in the route at once
interface Props {
    params : {slug : string[]};
    searchParams : {sortOrder : string }
}

const ProductsPage = async ({params, searchParams} : Props) => {
    const {slug} = await params;
    const {sortOrder} = await searchParams;
  return (
    <div>ProductsPage {slug} {sortOrder} </div>
  )
}

export default ProductsPage