import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
  name: "video",
  initialState: {
    videoId: "",
  },
  reducers: {
    actionhVideos: (state, action) => {
      const item = action.payload;
      state.videoId = item.videoId;
    },
  },
});

export const videoActions = videoSlice.actions;

export default videoSlice;
