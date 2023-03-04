import React from 'react'
import { Link } from 'react-router-dom';
import category_logo from '../../Logo/category_logo.png';
import food_logo from '../../Logo/food_logo.png';
import fashion_logo from '../../Logo/fashion_logo.png';
import cosmetics_logo from '../../Logo/cosmetics_logo.png';
import furniture_logo from '../../Logo/furniture_logo.png';

function Category() {

  const categories = [
    { name: 'All', link: '/all-products', icon: category_logo },
    { name: 'Food', link: '/food', icon: food_logo },
    { name: 'Fashion', link: '/fashion', icon: fashion_logo },
    { name: 'Cosmetics', link: '/cosmetics', icon: cosmetics_logo },
    { name: 'Furniture', link: '/furniture', icon: furniture_logo }
  ]

  return (
    <section className='px-3 mt-8'>
      <h1 className='text-2xl font-bold text-gray-700 mb-4'>Our Product Categories:</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
        {
          categories.map((item, i) =>
            <Link to={item.link} key={i}>
              <div className="card w-full md:w-80 bg-gray-100 hover:bg-gray-500 hover:text-gray-100 font-bold">
                <div className="flex justify-between items-center py-3 px-8">
                  <p>{item.name}</p>
                  <div className=''>
                    <img src={item.icon} alt="" width={40} height={40}/>
                  </div>
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