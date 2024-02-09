import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./redux-toolkit/userSlice";
import { catalogApi } from "./rtk-query/courseRtk";

export default configureStore({
  reducer: {
    user_info: userSlice,
    [catalogApi.reducerPath]: catalogApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(catalogApi.middleware),
});
