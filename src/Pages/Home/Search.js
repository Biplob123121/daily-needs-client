import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../../LoadingSpinner/Loading';
import Product from './Product';

function Search() {
  const { searchTerm } = useParams();

  const { data: products = [], isLoading } = useQuery({
    queryKey: [searchTerm],
    queryFn: async () => {
      const res = await fetch(`http://localhost:4000/api/products/search?searchTerm=${searchTerm}`);
      const data = await res.json();
      return data;
    }
  })
  if (isLoading) {
    return <Loading />
  }

  return (
    <div className='p-3'>
      <h1 className='text-2xl font-bold text-gray-700 mb-4'>Searching Product:</h1>
      <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8'>
        {
          products?.map(product => <Product
            key={product._id}
            product={product}
          ></Product>)
        }
      </div>
    </div>
  )
}

export default Search