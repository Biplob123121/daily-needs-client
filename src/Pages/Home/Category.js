import React from 'react'
import { Link } from 'react-router-dom'

function Category() {

  const categories = [
    { name: 'All', link: '/all-products' },
    { name: 'Food', link: '/food' },
    { name: 'Fashion', link: '/fashion' },
    { name: 'Cosmetics', link: '/cosmetics' },
    { name: 'Furniture', link: '/furniture' }
  ]

  return (
    <section className='px-3 mt-8'>
      <h1 className='text-2xl font-bold text-gray-700 mb-4'>Our Product Categories:</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
        {
          categories.map((item, i) =>
            <Link to={item.link} key={i}>
              <div className="card w-full md:w-80 bg-gray-100 hover:bg-gray-500 hover:text-gray-100 font-bold">
                <div className="card-body">
                  <p>{item.name}</p>
                </div>
              </div>
            </Link>
          )
        }
      </div>
    </section>
  )
}

export default Category