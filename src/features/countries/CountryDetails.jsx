import React from 'react'
import { useGetCountryDetailsByNameQuery } from '../../services/countriesApi'

function CountryDetails(props) {
    console.log(props)
    var {isLoading,isError,data}=useGetCountryDetailsByNameQuery(props.cname)
  return (
    <div>
        <h4>{props.cname} CountryDetails</h4>
        {
            isLoading &&  <b>Loading...</b>
        }
        {
            !isLoading && <img src={data[0].flags[0]} width="100px"></img>
        }
    </div>
  )
}

export default CountryDetails