import React from 'react'
import { useGetAllCustomerQuery } from '../../services/customersApi'

function CustomerList() {
  var {isLoading,isError,data}=useGetAllCustomerQuery();
  console.log("customers",data)
  return (
    <div>CustomerList</div>
  )
}

export default CustomerList