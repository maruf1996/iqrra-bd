import { api } from "../api/apiSlice";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => `/books`,
    }),
    totalBooks: builder.query({
      query: () => `/books/total-books`,
    }),
    postBook: builder.mutation({
      query: ({ data }) => ({
        url: `/books/create-book`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["data"],
    }),
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/books/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["data"],
    }),
  }),
  overrideExisting: true,
});

export const {
  useGetBooksQuery,
  useTotalBooksQuery,
  usePostBookMutation,
  useDeleteBookMutation,
} = bookApi;
