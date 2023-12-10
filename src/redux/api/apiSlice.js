import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://talim-online-libary-backend.vercel.app/api/v1",
  }),
  tagTypes: ["data"],
  endpoints: () => ({}),
});
