// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_USERAPI }),
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => `/`,
    }),
    addUser:builder.mutation({
      query:(user) => ({
        url: `/`,
        method: 'POST',
        body: user,
      })
    }),
    deleteUser:builder.mutation({
      query:(id)=>({
          url:`/${id}`,
          method:'DELETE',
        })
    }),
    updateUser:builder.mutation({
      query:(user)=>({
          url:`/${user.id}`,
          method:'PUT',
          body:user
        })
    }),
    getUserLogin: builder.query({
      query: (userDetails) => `?phonenumber=${userDetails.phonenumber}&password=${userDetails.password}`,
    }),
  }),
})  

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { 
  useAddUserMutation,
  useDeleteUserMutation,
  useGetAllUsersQuery,
  useLazyGetAllUsersQuery,
  useUpdateUserMutation,
  useGetUserLoginQuery,
  useLazyGetUserLoginQuery
} = userApi