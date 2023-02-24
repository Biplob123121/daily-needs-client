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
        ]
    },
    
    { path: "/contact", element: <Contact /> },
]);

export default router;