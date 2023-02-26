import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { BiMenu } from 'react-icons/bi';
import { IoMdClose } from 'react-icons/io';
import { AuthContext } from '../../Context/AuthProvider';

function DashboardNavbar() {

    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignOut = () => {
        logOut();
        navigate('/')

    }

    const navItems = [
        { name: 'Home', link: '/' },
        { name: 'Contact', link: '/contact' },
        { name: 'About', link: '/about' },
    ];

    const [open, setOpen] = useState(false);

    return (
        <nav className='py-3 px-6 bg-gray-700 text-gray-100 sticky top-0 z-10'>
            <div className='flex justify-between'>
                <div className='flex justify-center items-center pb-6 md:pb-0 pl-2 md:pl-0'>
                    <label htmlFor="dashbord-drawer" className="cursor-pointer lg:hidden"><BiMenu size={26} /></label>
                    <NavLink to='/'><h1 className='ml-2 text-2xl font-bold uppercase'>Daily Needs</h1></NavLink>
                </div>
                <div className={`flex flex-col md:flex-row left-0 pl-4 md:pl-0 bg-gray-700 w-full md:w-auto font-semibold md:static absolute duration-700  ${open ? 'top-14' : 'top-[-490px]'}`}>
                    {
                        navItems.map((item, i) =>
                            <NavLink to={item.link} key={i} className="px-3 py-1 md:py-0 hover:bg-slate-400 rounded-lg">
                                <h3>{item.name}</h3>
                            </NavLink>)
                    }

                    {
                        user?.uid ? <>
                            <NavLink to={'/dashboard'} className="px-3 hover:bg-slate-400 rounded-lg pb-4 md:pb-0">Dashboard</NavLink>
                            <h3 onClick={handleSignOut} className="px-3 hover:bg-slate-400 rounded-lg pb-4 md:pb-0">SignOut</h3>
                        </>
                            : <NavLink to='/signin' className="px-3 hover:bg-slate-400 rounded-lg pb-4 md:pb-0">Sign In</NavLink>
                    }
                </div>
                <div onClick={() => setOpen(!open)} className='md:hidden absolute right-4 top-4'>
                    {
                        open ? <IoMdClose size={26} /> : <BiMenu size={26} />
                    }
                </div>
            </div>
        </nav>
    )
}

export default DashboardNavbar