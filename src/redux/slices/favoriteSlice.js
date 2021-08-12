import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";

export const favoriteSlice = createSlice({
  name: "favorites",
  initialState: {
    value: [],
  },
  reducers: {
    toggleFavorite: (state, id) => {
      if (state.value.includes(id.payload)) {
        _.remove(state.value, (item) => item == id.payload);
      } else {
        state.value.push(id.payload);
      }
    },
  },
});

export const { toggleFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;
