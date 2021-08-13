import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";

export const favoriteSlice = createSlice({
  name: "favorites",
  initialState: {
    value: {},
  },
  reducers: {
    toggleFavorite: (state, item) => {
      if (Object.keys(state.value).includes(item.payload.imdbID)) {
        delete state.value[item.payload.imdbID];
      } else {
        state.value[item.payload.imdbID] = item.payload;
      }
    },
  },
});

export const { toggleFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;
