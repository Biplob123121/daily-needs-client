import React, { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { AuthContext } from '../Context/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import DashboardNavbar from '../Pages/Shared/DashboardNavbar';
import Footer from '../Pages/Shared/Footer';
import Loading from '../LoadingSpinner/Loading';

function DashboardLayout() {

    const { user } = useContext(AuthContext);
    const { isAdmin, isAdminLoading } = useAdmin(user?.email);

    if (isAdminLoading) {
        return <Loading></Loading>
    }

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
                        {
                            isAdmin && <>
                                <li><Link to={'/dashboard/all-user'}>All User</Link></li>
                                <li><Link to={'/dashboard/add-product'}>Add Product</Link></li>
                            </>
                        }
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default DashboardLayout