import axios from 'axios';
import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'

function ProductDetails() {
    var p = useParams();
    const [details, setDetails] = useState({});
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${p.pid}`)
        .then((res)=>{setDetails(res.data)})
    },[p])
    return (
        <div className='mybox'>
            <h1>ProductDetails</h1>
            {
                <div>
                    <h1>{details.title}</h1>
                    <h2>{details.price}</h2>
                </div>
            }
        </div>
    )
}

export default ProductDetails