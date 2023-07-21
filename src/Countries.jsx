import axios from 'axios';
import React from 'react';
function Countries(){
    const [countries, setcountries] = React.useState([])
    React.useEffect(()=>{
        axios.get("https://restcountries.com/v3/all").then((res)=>{
            setcountries([...res.data])
        })
    },[])
    return(
        <div className='greenbox' style={{width:'45%'}}>
            <h3>Countries</h3>
            <ul style={{display:'flex',flexWrap:'wrap'}}>
                {
                    countries.map((c)=>{
                        return <li style={{width:'100px'}}>
                            <b>{c.name.common}</b>
                            <img src={c.flags[1]} width="80px" alt="" />
                            </li>
                    })
                }

            </ul>
            
        </div>
    )
}
export default  Countries;