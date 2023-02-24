import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import About from "../../Pages/About/About";
import Contact from "../../Pages/Contact/Contact";
import Category from "../../Pages/Home/Category";
import Food from "../../Pages/Home/Food";
import Fashion from "../../Pages/Home/Fashion";
import Furniture from "../../Pages/Home/Furniture";
import Cosmetics from "../../Pages/Home/Cosmetics";

const router = createBrowserRouter([
    {
        path: "/", element: <Home></Home>,
        children: [
            { path: "/", element: <Category /> },
            { path: "/food", element: <Food /> },
            { path: "/fashion", element: <Fashion /> },
            { path: "/cosmetics", element: <Cosmetics /> },
            { path: "/furniture", element: <Furniture /> },
        ]
    },
    { path: "/about", element: <About /> },
    { path: "/contact", element: <Contact /> },
]);

export default router;