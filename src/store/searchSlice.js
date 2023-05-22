import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    items: "",
    videoId: "",
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
  },
});

export const searchActions = searchSlice.actions;

export default searchSlice;
