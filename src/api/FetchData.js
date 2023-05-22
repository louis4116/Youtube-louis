import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const APIKEY = "AIzaSyDbXjyEyt_7lgriqhhbVefVp5zU8bQqUiA";

export const youtubeApi = createApi({
  reducerPath: "youtubeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.googleapis.com/youtube/v3/",
  }),
  endpoints: (builder) => ({
    getAllDatas: builder.query({
      query: (item) =>
        `search?part=snippet&maxResults=50&q=${item}&key=${APIKEY}`,
    }),
    getVideoDetails: builder.query({
      query: (item) => `videos?id=${item}&key=${APIKEY}&part=snippet`,
    }),
  }),
});

export const { useGetAllDatasQuery, useGetVideoDetailsQuery } = youtubeApi;
