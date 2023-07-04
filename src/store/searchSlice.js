import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    items: "",
    videoId: "",
    history: [],
  },
  reducers: {
    searchItems: (state, action) => {
      const items = action.payload;
      state.items = items;
    },
    searchVideos: (state, action) => {
      const id = action.payload;
      console.log(id);
      state.videoId = id;
    },
    searchHistory: (state, action) => {
      const item = action.payload;
      state.history.push(item);
    },
    delSearchHistory: (state, action) => {
      state.history.shift();
    },
  },
});

export const searchActions = searchSlice.actions;

export default searchSlice;
