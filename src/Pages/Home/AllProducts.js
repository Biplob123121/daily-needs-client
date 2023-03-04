import { useQuery } from '@tanstack/react-query'
import React, { useEffect, useState } from 'react'
import Product from './Product';
import Loading from '../../LoadingSpinner/Loading';

function AllProducts() {
    // const [products, setProducts] = useState([])

    const { data: products = [], isLoading } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch('http://localhost:4000/api/products');
            const data = await res.json();
            return data;
        }
    })

    if(isLoading){
        return <Loading></Loading>
    }

    // useEffect(() => {
    //     fetch('products.json')
    //         .then(res => res.json())
    //         .then(data => setProducts(data))
    // }, [])

    return (
        <section className='p-3'>
            <h1 className='text-2xl font-bold text-gray-700 mb-4'>All Products</h1>
            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8'>
                {
                    products?.map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }
            </div>
        </section>
    )
}

export default AllProducts