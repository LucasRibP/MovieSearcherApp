import { configureStore } from "@reduxjs/toolkit";
import { omdbApi } from "../../library/networking/omdbAPI";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
  reducer: {
    [omdbApi.reducerPath]: omdbApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(omdbApi.middleware),
});

setupListeners(store.dispatch);
