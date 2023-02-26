import React, { useEffect, useState } from 'react'
import Product from './Product'

function AllProducts() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <section>
            <h1>All Products</h1>
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