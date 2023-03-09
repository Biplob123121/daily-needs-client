import React, { useContext } from 'react'
import { CartContext } from '../../Context/CartProvider';

function Product({ product }) {
    const { name, picture, price, minOrder } = product;

    const { dispatch } = useContext(CartContext)

    product.quantity = 1;

    return (
        <div className="p-2 shadow-md rounded-md hover:shadow-2xl text-center">
            <div className='w-full h-28 flex items-center justify-center'>
                <img src={picture} alt="" height={100} width={100}/>
            </div>
            <h3 className='font-bold mt-4'>{name}</h3>
            <p>{minOrder}</p>
            <p>Tk {price}</p>
            <button onClick={() => dispatch({ type: "ADD", payload: product })} className='mt-2 bg-gray-300 w-full text-gray-100 py-1 px-2 rounded-lg hover:font-bold hover:bg-green-500'>Add to Cart</button>
        </div>
    )
}

export default Product