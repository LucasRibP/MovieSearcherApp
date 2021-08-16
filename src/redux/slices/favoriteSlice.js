import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import _ from "lodash";
import { retrieveFavorites } from "library/utils/storeCacheLoader";

export const getFavoritesFromPhone = createAsyncThunk(
  "favorites/favoritesFromPhone",
  async () => {
    const data = await retrieveFavorites();
    return data;
  }
);

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
  extraReducers: (builder) => {
    builder.addCase(getFavoritesFromPhone.fulfilled, (state, action) => {
      if (action.payload != null) state.value = action.payload;
    });
  },
});

export const { toggleFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;
