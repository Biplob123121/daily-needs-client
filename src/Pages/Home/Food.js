import { useQuery } from '@tanstack/react-query'
import React from 'react'
import Product from './Product';

function Food() {
  const category = "food";

  const { data: foods = [], isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const res = await fetch(`http://localhost:4000/api/products/category?category=${category}`);
      const data = await res.json();
      return data;
    }
  })

  return (
    <section className='p-3'>
      <h1 className='text-2xl font-bold text-gray-700 mb-4'>Foods:</h1>
      <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8'>
        {
          foods?.map(product => <Product
            key={product._id}
            product={product}
          ></Product>)
        }
      </div>
    </section>
  )
}

export default Food