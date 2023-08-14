import React,{useState} from 'react'
import { useGetAllCountriesQuery, useLazyGetCountryDetailsByNameQuery } from '../../services/countriesApi'
import CountryDetails from './CountryDetails';

function Countries() {
    var {isLoading,isError,data} = useGetAllCountriesQuery();
    // const [selectedcountry, setSelectedcountry] = useState('')
    var [getCoutryDetails] = useLazyGetCountryDetailsByNameQuery();
    function abc(n){
        // setSelectedcountry(n)
        getCoutryDetails(n).then(res=>{
            console.log(res)
        })
       
    }
    return (
        <div className='mybox'>
            <h1>Countries</h1>
            {isLoading && <i>Loading.........</i>}
            <div style={{display:'flex'}}>
                <div style={{display:'inline-block',width:'40%'}}>
                    {
                        !isLoading && data.map((c)=>{
                            return <li onClick={()=>{abc(c.name.common)}}>{c.name.common}</li>
                        })
                    }
                </div>





                {/* {
                    selectedcountry && (<div className='mybox' style={{display:'inline-block',width:'30%'}}>
                                            <CountryDetails cname={selectedcountry}></CountryDetails>
                                        </div>)
                } */}
                
            </div>
            
        </div>
    )
}

export default Countries