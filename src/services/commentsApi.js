// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const commentApi = createApi({
  reducerPath: 'commentApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/comments' }),
  endpoints: (builder) => ({
    getAllComments: builder.query({
      query: () => `/`,
    }),
    addComment:builder.mutation({
      query:(cmt) => ({
        url: `/`,
        method: 'POST',
        body: cmt,
      })
    }),
    deleteComment:builder.mutation({
      query:(id)=>({
          url:`/${id}`,
          method:'DELETE',
        })
    }),
    updateComment:builder.mutation({
      query:(cmt)=>({
          url:`/${cmt.id}`,
          method:'PUT',
          body:cmt
        })
    })
  }),
})  

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { 
  useGetAllCommentsQuery,
  useAddCommentMutation,
  useLazyGetAllCommentsQuery,
  useDeleteCommentMutation,
  useUpdateCommentMutation 
} = commentApi