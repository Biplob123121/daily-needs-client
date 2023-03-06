import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { useParams } from 'react-router-dom'

function Payment() {

  const { id } = useParams();
  const { data: order = [] } = useQuery({
    queryKey: ['order', id],
    queryFn: async () => {
      const res = await fetch(`http://localhost:4000/api/orders/${id}`);
      const data = res.json();
      return data;
    }
  })


  const products = order[0]?.products;

  return (
    <div>
      <h2 className='text-2xl text-center font-semibold p-4'>Payment</h2>
      <hr />
      <div className='grid grid-cols-1 md:grid-cols-2 gap-12 pt-4'>
        <div className=' shadow-lg p-2'>
          <h3 className='font-bold'>Cost Details</h3>
          <div className='my-2'>
            <table className="table w-full">
              <tbody>
                {
                  products?.map(product => <tr key={product._id}>
                    <td>{product.name}</td>
                    <td className='mx-16'>{product.quantity}</td>
                    <td>{product.price * product.quantity}</td>
                  </tr>)
                }
              </tbody>
            </table>
            <hr />
          </div>
          <h4 className='font-semibold mt-4'>Total Cost: Tk. {order[0]?.totalPrice}</h4>
          <p className='font-semibold text-center py-3 text-sm'>Shipping Free</p>
        </div>
        <div>
          <h3>Card Details</h3>
        </div>
      </div>
    </div>
  )
}

export default Payment