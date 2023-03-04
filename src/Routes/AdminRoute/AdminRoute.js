import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useAdmin from '../../hooks/useAdmin';
import Loading from '../../LoadingSpinner/Loading';

function AdminRoute({ children }) {
    const { user, loading } = useContext(AuthContext);
    const { isAdmin, isAdminLoading } = useAdmin(user?.email)
    const location = useLocation()

    if (loading || isAdminLoading) {
        return <Loading></Loading>
    }
    if (user && isAdmin) {
        return children;
    }
    return <Navigate to='/signin' state={{ from: location }} replace></Navigate>;
}

export default AdminRoute