// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const propertyApi = createApi({
  reducerPath: 'propertyApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/properties' }),
  endpoints: (builder) => ({
    getAllProperties: builder.query({
      query: () => `/`,
    }),
    addProperty:builder.mutation({
      query:(property) => ({
        url: `/`,
        method: 'POST',
        body: property,
      })
    }),
    // deleteCustomer:builder.mutation({
    //   query:(id)=>({
    //       url:`/${id}`,
    //       method:'DELETE',
    //     })
    // }),
    // updateCustomer:builder.mutation({
    //   query:(customer)=>({
    //       url:`/${customer.id}`,
    //       method:'PUT',
    //       body:customer
    //     })
    // })
  }),
})  

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { 
  useAddPropertyMutation,
  useGetAllPropertiesQuery,
  useLazyGetAllPropertiesQuery
} = propertyApi