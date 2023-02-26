import React, { createContext, useReducer } from 'react';


export const CartContext = createContext();

function CartProvider({ children }) {

    const reducer = (state, action) => {
        switch (action.type) {
            case "ADD":
                const tempState = state.filter(item => item._id === action.payload._id);
                if (tempState.length > 0) {
                    return state;
                } else {
                    return [...state, action.payload];
                }
            case "INCREASE":
                const tempstate1 = state.map((item) => {
                    if (item._id === action.payload._id) {
                        return { ...item, quantity: item.quantity + 1 };
                    } else {
                        return item;
                    }
                });
                return tempstate1;
            case "DECREASE":
                const tempstate2 = state.map((item) => {
                    if (item._id === action.payload._id) {
                        return { ...item, quantity: item.quantity - 1 };
                    } else {
                        return item;
                    }
                });
                return tempstate2;
            case "REMOVE":
                const tempstate3 = state.filter(
                    (item) => item._id !== action.payload._id
                );

                return tempstate3;
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, [])
    const cartInfo = { state, dispatch }

    return (
        <CartContext.Provider value={cartInfo}>
            {children}
        </CartContext.Provider >
    )
}

export default CartProvider;