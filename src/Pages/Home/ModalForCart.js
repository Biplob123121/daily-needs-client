import React, { useContext, useEffect } from 'react'
import { CartContext } from '../../Context/CartProvider';

function ModalForCart() {

    const { state, dispatch } = useContext(CartContext)

    const total = state.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0)

    return (
        <div className=''>
            <input type="checkbox" id="cart-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="cart-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className=''>
                        {
                            state?.map(item => <div key={item._id} className='flex items-center justify-center my-6'>
                                <div className='mr-6 flex'>
                                    <button onClick={() => dispatch({ type: "INCREASE", payload: item })} className=' btn btn-xs'> + </button>
                                    <p className='mx-2'>{item.quantity}</p>
                                    <button onClick={() => {
                                        if (item.quantity > 1) {
                                            dispatch({ type: "DECREASE", payload: item });
                                        } else {
                                            dispatch({ type: "REMOVE", payload: item });
                                        }
                                    }} className='btn btn-xs'> - </button>
                                </div>
                                <img src={item.picture} alt="" width={60} />
                                <div className='mx-6 md:mx-12 font-semibold'>
                                    <p>{item.name}</p>
                                    <span className='text-xs'>{item.minOrder}</span>
                                </div>
                                <h4 className='mr-4 md:mr-12'>{item.price * item.quantity}</h4>
                                <button onClick={() => dispatch({ type: "REMOVE", payload: item })}>X </button>
                            </div>)
                        }
                    </div>
                    <div className='px-3 pt-6 flex justify-between items-center'>
                        <p className='font-bold text-xl'>Total: {total}</p>
                        <button className='btn'>Order Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalForCart