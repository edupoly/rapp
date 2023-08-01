import React, { useEffect } from 'react'
import axios from 'axios';
import { Outlet,Link } from 'react-router-dom';
function Products() {
    const [products, setProducts] = React.useState([])
    React.useEffect(()=>{
        axios.get("https://fakestoreapi.com/products")
        .then((res)=>{
            setProducts([...res.data])
        })
    },[])
    return (
        <div className='mybox myflex'>
            <div style={{width:'40%'}}>
                <h1>Products</h1>
                {
                    products.map((product)=>{
                        return (<li key={product.id}>
                            <Link to={`productDetails/${product.id}`}>{product.title}</Link>
                        </li>)
                    })
                }
            </div>
            <div style={{width:'40%'}}>
                <Outlet></Outlet>
            </div>
        </div>
    )
}

export default Products
