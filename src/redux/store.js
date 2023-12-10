import userReducer from "@/redux/features/userSlice";
import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api/apiSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
