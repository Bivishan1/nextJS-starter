import React from 'react';

interface Props {
  params: Promise<{ slug?: string[] }>;
  searchParams: Promise<{ sortOrder: string }>;
}

const ProductsPage = async ({ params, searchParams }: Props) => {
  const slug = (await params).slug
  const sortOrder = (await searchParams).sortOrder

  return (
    <div>
      <h1>Products Page</h1>
      <p>Slug: {slug}</p>
      <p>Sort Order: {sortOrder}</p>
    </div>
  );
};

export default ProductsPage;
