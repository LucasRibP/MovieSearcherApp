import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "searchResults",
  initialState: {
    value: {},
  },
  reducers: {
    searchForResults: (state, query) => {
      // Here we will search for the matching movies
    },
  },
});

export const { searchForResults } = searchSlice.actions;

export default searchSlice.reducer;
