import React from 'react'

// defining multiple parameters in the route at once
interface Props {
    // params : {slug : string[]};
    // // searchParams & params are a property to pass as a query string parameter 
    // searchParams : {sortOrder : string }
    //updated code
    params: Promise<{ slug?: string[] }>;
searchParams: Promise<{ sortOrder: string }>;
}

const ProductsPage = async ({params, searchParams} : Props) => {
    const slug = (await params).slug?.join('/');
    const {sortOrder} = await searchParams;
  return (
    <div>Products Page {slug} {sortOrder} </div>
  )
}

export default ProductsPage