import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IPost } from '../models/IPost';

export const postAPI = createApi({
  reducerPath:'postAPI',
  baseQuery:fetchBaseQuery({baseUrl:'http://localhost:5000'}),
  tagTypes:['ANIME'],
  endpoints:(build) => ({
    fetchAllPosts: build.query<IPost[], number>({
      query:(limit:number = 5) => ({
        url:`/posts`,
        params:{
          _limit:limit
        }
      }),
      providesTags:result => ['ANIME']
    }),
    createPost:build.mutation<IPost,IPost>({
      query:(post) => ({
        url:`/posts`,
        method:'POST',
        body:post
      }),
      invalidatesTags:['ANIME']
    }),
    deletePost:build.mutation<IPost,IPost>({
      query:(post) => ({
        url:`/posts/${post.id}`,
        method:'DELETE'
      }),
      invalidatesTags:['ANIME']
    }),
    updatePost:build.mutation<IPost,IPost>({
      query:(post) => ({
        url:`/posts/${post.id}`,
        method:'PUT',
        body:post
      }),
      invalidatesTags:['ANIME']
    })

  })
})

