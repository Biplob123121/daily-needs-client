import React, { useContext, useEffect } from 'react'
import { CartContext } from '../../Context/CartProvider';
import { AuthContext } from '../../Context/AuthProvider';
import Loading from '../../LoadingSpinner/Loading'
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function ModalForCart() {

    const { state, dispatch } = useContext(CartContext);
    const { user, loading } = useContext(AuthContext);
    const navigate = useNavigate();

    const total = state.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0)

    if (loading) {
        return <Loading></Loading>
    }

    const handleOrder = () => {
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const yyyy = today.getFullYear();

        const date = mm + '/' + dd + '/' + yyyy

        if (!user) {
            return toast.error('Please login before order..')
        }

        const order = {
            name: user?.displayName,
            email: user?.email,
            products: state,
            totalPrice: total,
            date: date
        }
        fetch('http://localhost:4000/api/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledge) {
                    navigate('/dashboard')
                }
            })
    }

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
                        {
                            state?.length === 0 ? 'Please select Something..' :
                                <button onClick={handleOrder} className='btn btn-sm'>Order Now</button>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalForCart