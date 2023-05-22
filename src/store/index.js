import { configureStore } from "@reduxjs/toolkit";
import { youtubeApi } from "../api/FetchData";
import searchSlice from "./searchSlice";
import videoSlice from "./videoSlice";

const store = configureStore({
  reducer: {
    [youtubeApi.reducerPath]: youtubeApi.reducer,
    searchResult: searchSlice.reducer,
    videoResult: videoSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(youtubeApi.middleware),
});
export default store;
