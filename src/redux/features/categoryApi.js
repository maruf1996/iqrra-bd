import { api } from "../api/apiSlice";

const categoryApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => `/categories`,
    }),
    totalCategories: builder.query({
      query: () => `/categories/total-categories`,
    }),
    postCategory: builder.mutation({
      query: ({ data }) => ({
        url: `/categories/create-category`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["data"],
    }),
    deleteCategory: builder.mutation({
      query: (id) => ({
        url: `/categories/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["data"],
    }),
  }),
  overrideExisting: true,
});

export const {
  useGetCategoriesQuery,
  useTotalCategoriesQuery,
  usePostCategoryMutation,
  useDeleteCategoryMutation,
} = categoryApi;
