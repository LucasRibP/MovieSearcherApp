import { createAPI, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { OMDB_API_KEY } from "@env";

export const omdbAPI = createAPI({
  reducerPath: "omdbAPI",
  baseQuery: fetchBaseQuery({}),
});
