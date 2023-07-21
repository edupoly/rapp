import React from 'react';
import axios from 'axios';
function Products(){
    var [products,setProducts] = React.useState([]);
    
    React.useEffect(()=>{
        axios.get("https://fakestoreapi.com/products").then((res)=>{
            setProducts(res.data)
        })
    },[])
    
    React.useEffect(()=>{
        console.log("Use Effect without DA")
    })

    return(
        <div className='bluebox' style={{width:'45%'}}>
            <h3>Products</h3>
            {
                products.map((p)=>{
                    return <li>{p.title}</li>
                })
            }
        </div>
    )
}
export default Products;

// hook?
//lifecycle?lifecycle hooks//