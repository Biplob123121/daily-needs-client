import React from 'react';
import { RouterProvider } from "react-router-dom";
import CartProvider from './Context/CartProvider';
import router from './Routes/Routes/Route';

function App() {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}

export default App;
