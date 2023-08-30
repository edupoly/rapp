// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const customerApi = createApi({
  reducerPath: 'customerApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_CUSTOMERAPI }),
  endpoints: (builder) => ({
    getAllCustomer: builder.query({
      query: () => `/`,
    }),
    addCustomer:builder.mutation({
      query:(customer) => ({
        url: `/`,
        method: 'POST',
        body: customer,
      })
    }),
    deleteCustomer:builder.mutation({
      query:(id)=>({
          url:`/${id}`,
          method:'DELETE',
        })
    }),
    updateCustomer:builder.mutation({
      query:(customer)=>({
          url:`/${customer.id}`,
          method:'PUT',
          body:customer
        })
    })
  }),
})  

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { 
  useAddCustomerMutation,
  useGetAllCustomerQuery,
  useLazyGetAllCustomerQuery,
  useUpdateCustomerMutation,
  useDeleteCustomerMutation
} = customerApi