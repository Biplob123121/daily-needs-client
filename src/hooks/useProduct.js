import { useEffect, useState } from "react"

const useProduct = category => {

    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch(`https://daily-needs-server.vercel.app/api/products/category?category=${category}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setIsLoading(false)
            })
    }, [category])

    return { products, isLoading };
}

export default useProduct