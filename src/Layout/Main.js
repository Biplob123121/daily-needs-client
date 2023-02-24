import React, { useContext, useState } from 'react';
import { BsArrowBarLeft, BsArrowBarRight } from 'react-icons/bs';
import { NavLink, Outlet } from 'react-router-dom';
import category_logo from '../Logo/category_logo.png';
import food_logo from '../Logo/food_logo.png';
import fashion_logo from '../Logo/fashion_logo.png';
import cosmetics_logo from '../Logo/cosmetics_logo.png';
import furniture_logo from '../Logo/furniture_logo.png';
import { BiShoppingBag } from 'react-icons/bi';
import Navbar from '../Pages/Shared/Navbar';
import Footer from '../Pages/Shared/Footer';
import { CartContext } from '../Context/CartProvider';



function Main() {

    const [toggle, setToggle] = useState(false);
    const { cart } = useContext(CartContext)


    const barItems = [
        { name: 'All', link: '/all-products', icon: category_logo },
        { name: 'Food', link: '/food', icon: food_logo },
        { name: 'Fashion', link: '/fashion', icon: fashion_logo },
        { name: 'Cosmetics', link: '/cosmetics', icon: cosmetics_logo },
        { name: 'Furniture', link: '/furniture', icon: furniture_logo },
    ]

    return (
        <>
            <Navbar></Navbar>
            <div className='flex z-0'>
                <div className={`${toggle ? 'w-[72px]' : 'w-52'} min-h-screen bg-gray-200 duration-700 text-gray-700 font-semibold px-6 relative`}>
                    <div onClick={() => setToggle(!toggle)} className=" absolute cursor-pointer top-2 right-2 font-bold">
                        {
                            toggle ? <BsArrowBarRight size={26} /> : <BsArrowBarLeft size={26} />
                        }
                    </div>
                    <div className='mt-12 mb-28'>
                        {
                            barItems.map((item, i) => <NavLink to={item.link} key={i} className='flex py-2 rounded-lg hover:bg-gray-400'>
                                <img src={item.icon} alt="logo" />
                                <h3 className='ml-2 overflow-hidden'>{item.name}</h3>
                            </NavLink>)
                        }
                    </div>
                    <div className='shadow-2xl w-[64px] absolute left-2'>
                        <div className='bg-gray-500 text-yellow-500 text-center'>
                            <h3 className='ml-5'><BiShoppingBag size={26} /></h3>
                            <p>{cart?.length} {cart.length > 1 ? 'Items' : 'Item'}</p>
                        </div>
                        <p className='text-center'>Tk. 000</p>
                    </div>
                </div>
                <div className='px-3'>
                    <Outlet />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Main