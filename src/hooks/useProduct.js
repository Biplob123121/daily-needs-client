import { useEffect, useState } from "react"

const useProduct = category => {

    const [products, setProducts] = useState([])
    const [isAdminLoading, setIsAdminLoading] = useState(true)

    useEffect(() => {
        fetch(`http://localhost:4000/api/products/category?category=${category}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setIsAdminLoading(false)
            })
    }, [category])

    return { products, isAdminLoading };
}

export default useProduct