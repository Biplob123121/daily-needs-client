import React from 'react'
import useProduct from '../../hooks/useProduct'
import Product from './Product';

function Furniture() {

  const { products: furnitures } = useProduct('furniture');

  return (
    <section className='p-3'>
      <h1 className='text-2xl font-bold text-gray-700 mb-4'>Furnitures:</h1>
      <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8'>
        {
          furnitures?.map(product => <Product
            key={product._id}
            product={product}
          ></Product>)
        }
      </div>
    </section>
  )
}

export default Furniture