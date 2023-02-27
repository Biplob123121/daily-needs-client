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
import ModalForCart from '../Pages/Home/ModalForCart';



function Main() {

    const [toggle, setToggle] = useState(false);
    const { state } = useContext(CartContext)

    const total = state.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0)

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
            <div className='flex'>
                <div className={`${toggle ? 'w-52' : 'w-[72px]'} min-h-screen bg-gray-200 duration-700 text-gray-700 font-semibold px-6 relative z-0`}>
                    <div onClick={() => setToggle(!toggle)} className=" absolute cursor-pointer top-2 right-2 font-bold">
                        {
                            toggle ? <BsArrowBarLeft size={26} /> : <BsArrowBarRight size={26} />
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
                    <label htmlFor="cart-modal" className='cursor-pointer'>
                        <div className='shadow-2xl w-[64px] absolute left-2'>
                            <div className='bg-gray-500 text-yellow-500 text-center'>
                                <h3 className='ml-5'><BiShoppingBag size={26} /></h3>
                                <p>{state?.length} {state?.length > 1 ? 'Items' : 'Item'}</p>
                            </div>
                            <p className='text-center'>Tk. {total}</p>
                        </div>
                    </label>
                </div>
                <div className='w-full'>
                    <Outlet />
                    <ModalForCart />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Main