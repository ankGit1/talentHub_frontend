import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const apiUrl = import.meta.env.VITE_backend;

export const catalogApi = createApi({
  reducerPath: "courseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: apiUrl,
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      headers.set("Accept", "application/json");
      return headers;
    },
  }),

  endpoints: (build) => ({
    getCourse: build.query({
      query: (paramCId) => `path/course/find/one-course/${paramCId}`,
      providesTags: ["course"],
      onStart: (arg, { dispatch, queryFulfilled, queryRejected }) => {
        console.log(`Id: ${arg}`);
      },
    }),
  }),
});

export const { useGetCourseQuery } = catalogApi;
