import { configureStore } from "@reduxjs/toolkit";
import { omdbApi } from "../../library/networking/omdbAPI";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import searchReducer from "../slices/searchSlice";
import favoriteReducer from "../slices/favoriteSlice";

export const store = configureStore({
  reducer: {
    [omdbApi.reducerPath]: omdbApi.reducer,
    searchQuery: searchReducer,
    favorites: favoriteReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(omdbApi.middleware),
});

setupListeners(store.dispatch);
