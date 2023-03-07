import { useQuery } from '@tanstack/react-query'
import React, { useContext } from 'react'
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

function MyOrder() {

    const { user } = useContext(AuthContext);

    const { data: orders = [], refetch } = useQuery({
        queryKey: ['orders', user.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:4000/api/orders/my-order?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    })

    if (orders.length === 0) {
        return <h3 className='text-xl font-semibold text-center mt-24'>You have no order. Please buy something..</h3>
    }

    const handleDelete = id => {
        fetch(`http://localhost:4000/api/orders/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.message) {
                    toast.success('Order is Deleted');
                    refetch()
                }
            })
    }

    return (
        <div>
            <h2 className='text-2xl text-center font-semibold p-4'>My Orders</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Total Cost</th>
                            <th>Payment</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.map((order, i) => <tr key={order._id}>
                                <td>{i + 1}</td>
                                <td>{order.name}</td>
                                <td>{order.date}</td>
                                <td>{order.totalPrice}</td>
                                <td>
                                    {
                                        order.paid !== 'paid' ? <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-primary btn-xs'>Pay Now</button></Link>
                                        :
                                        <p className='text-success'>PAID</p>
                                    }
                                </td>
                                <td>
                                    {
                                        order.paid !== 'paid' ? <button onClick={() => handleDelete(order._id)} className='btn btn-warning btn-xs'>Cancel Oeder</button>
                                        :
                                        'Completed'
                                    }
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default MyOrder