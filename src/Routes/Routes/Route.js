import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import About from "../../Pages/About/About";
import Contact from "../../Pages/Contact/Contact";

const router = createBrowserRouter([
    { path: "/", element: <Home></Home> },
    { path: "/about", element: <About /> },
    { path: "/contact", element: <Contact /> },
]);

export default router;