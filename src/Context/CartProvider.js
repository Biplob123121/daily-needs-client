import React, { createContext, useState } from 'react';


export const CartContext = createContext();

function CartProvider({ children }) {

    const [cart, setCart] = useState([]);

    const handleAddToCart =(product) =>{
        const newCart = [...cart, product];
        setCart(newCart);
    }

    const cartInfo = {
        cart,
        setCart,
        handleAddToCart
    }

    return (
        <CartContext.Provider value={cartInfo}>
            {children}
        </CartContext.Provider >
    )
}

export default CartProvider;