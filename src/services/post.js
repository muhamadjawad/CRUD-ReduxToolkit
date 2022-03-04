// Need to use the React-specific entry point to import createApi
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com/'}),
  endpoints: builder => ({
    getAllPost: builder.query({
      query: () => ({url: `posts`, method: 'GET'}),
    }),
    getPostById: builder.query({
      query: id => ({url: `posts/${id}`, method: 'GET'}),
    }),
    deletePost: builder.mutation({
      query: id => ({url: `posts/${id}`, method: 'DELETE'}),
    }),
    createPost: builder.mutation({
      query: newpost => ({
        url: `posts`,
        method: 'POST',
        body: newpost,

        header: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
    }),

    updatePost: builder.mutation({
      query: updateData => {
        let {id, ...data} = updateData;
        return {
          url: `posts/${id}`,
          method: 'PUT',
          body: data,

          header: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        };
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetAllPostQuery,
  useGetPostByIdQuery,
  useDeletePostMutation,
  useCreatePostMutation,
  useUpdatePostMutation,
} = postApi;
