import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { OMDB_API_KEY } from "@env";

export const omdbApi = createApi({
  reducerPath: "omdbApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `http://www.omdbapi.com/`,
  }),
  endpoints: (builder) => ({
    getMoviesByName: builder.query({
      query: (name) => `?apikey=${OMDB_API_KEY}&s=${name}`,
    }),
    getMovieByIMDbID: builder.query({
      query: (id) => `?apikey=${OMDB_API_KEY}&i=${id}&plot=full`,
    }),
  }),
});

export const { useGetMoviesByNameQuery, useGetMovieByIMDbIDQuery } = omdbApi;
