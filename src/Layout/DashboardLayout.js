import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import DashboardNavbar from '../Pages/Shared/DashboardNavbar'

function DashboardLayout() {
    return (
        <div className='z-0'>
            <DashboardNavbar />
            <div className="drawer drawer-mobile">
                <input id="dashbord-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content p-4">
                    <Outlet />
                </div>
                <div className="drawer-side z-0">
                    <label htmlFor="dashbord-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-48 bg-gray-200 text-gray-700 font-semibold">
                        <li><Link to={'/dashboard'}>My Order</Link></li>
                        <li><Link to={'/dashboard/review'}>Review</Link></li>
                        <li><Link to={'/dashboard/all-user'}>All User</Link></li>
                        <li><Link to={'/dashboard/add-product'}>Add Product</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default DashboardLayout