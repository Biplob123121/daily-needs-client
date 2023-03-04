import React from 'react'
import useProduct from '../../hooks/useProduct';
import Loading from '../../LoadingSpinner/Loading';
import Product from './Product';

function Fashion() {
  const { products: fashions, isLoading } = useProduct('fashion');

  if(isLoading){
    return <Loading></Loading>
  }

  return (
    <section className='p-3'>
      <h1 className='text-2xl font-bold text-gray-700 mb-4'>Fashions:</h1>
      <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8'>
        {
          fashions?.map(product => <Product
            key={product._id}
            product={product}
          ></Product>)
        }
      </div>
    </section>
  )
}

export default Fashion