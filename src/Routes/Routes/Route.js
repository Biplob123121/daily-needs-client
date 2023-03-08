import { createBrowserRouter } from "react-router-dom";
import Main from '../../Layout/Main'
import Home from "../../Pages/Home/Home";
import About from "../../Pages/About/About";
import Contact from "../../Pages/Contact/Contact";
import Food from "../../Pages/Home/Food";
import Fashion from "../../Pages/Home/Fashion";
import Furniture from "../../Pages/Home/Furniture";
import Cosmetics from "../../Pages/Home/Cosmetics";
import AllProducts from "../../Pages/Home/AllProducts";
import SignIn from "../../Pages/SignIn/SignIn";
import Signup from "../../Pages/SignIn/Signup";
import DashboardLayout from "../../Layout/DashboardLayout";
import MyOrder from "../../Pages/Dashboard/MyOrder";
import Review from "../../Pages/Dashboard/Review";
import AddProduct from "../../Pages/Dashboard/AddProduct";
import AllUser from "../../Pages/Dashboard/AllUser";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AdminRoute from "../AdminRoute/AdminRoute";
import Payment from "../../Pages/Dashboard/Payment";
import Search from "../../Pages/Home/Search";
import Reviews from "../../Pages/Home/Reviews";

const router = createBrowserRouter([
    {
        path: "/", element: <Main></Main>,
        children: [
            { path: "/", element: <Home /> },
            { path: "/all-products", element: <AllProducts /> },
            { path: "/food", element: <Food /> },
            { path: "/fashion", element: <Fashion /> },
            { path: "/cosmetics", element: <Cosmetics /> },
            { path: "/furniture", element: <Furniture /> },
            { path: "/about", element: <About /> },
            { path: "/contact", element: <Contact /> },
            { path: "/search", element: <Search /> },
        ]
    },
    { path: "/signin", element: <SignIn /> },
    { path: "/signup", element: <Signup /> },
    {
        path: "/dashboard", element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
        children: [
            { path: "/dashboard", element: <MyOrder /> },
            { path: "/dashboard/review", element: <Review /> },
            { path: "/dashboard/payment/:id", element: <Payment /> },
            { path: "/dashboard/add-product", element: <AdminRoute><AddProduct /> </AdminRoute> },
            { path: "/dashboard/all-user", element: <AdminRoute><AllUser /> </AdminRoute> },
        ]
    }
]);

export default router;