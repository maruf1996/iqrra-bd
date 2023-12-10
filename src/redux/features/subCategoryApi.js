import { api } from "../api/apiSlice";

const subCategoryApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getSubCategories: builder.query({
      query: () => `/subcategories`,
    }),
    postSubCategory: builder.mutation({
      query: ({ data }) => ({
        url: `/subcategories/create-subcategory`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["data"],
    }),
    deleteSubCategory: builder.mutation({
      query: (id) => ({
        url: `/subcategories/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["data"],
    }),
  }),
  overrideExisting: true,
});

export const {
  useGetSubCategoriesQuery,
  usePostSubCategoryMutation,
  useDeleteSubCategoryMutation,
} = subCategoryApi;
