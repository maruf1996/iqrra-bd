import RootLayout from "@/components/Layouts/RootLayout";
import Loading from "@/components/UI/Shared/loading";
import {
  useDeleteCategoryMutation,
  useGetCategoriesQuery,
} from "@/redux/features/categoryApi";
import Link from "next/link";
import { useEffect } from "react";
import Swal from "sweetalert2";

const CategoryManagement = () => {
  const { data, isLoading } = useGetCategoriesQuery(undefined);
  const categories = data?.data;

  const [deleteCategory, { isSuccess }] = useDeleteCategoryMutation();

  useEffect(() => {
    if (isSuccess) {
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Category Delete is Successfully",
      });
    }
  }, [isSuccess]);

  if (isLoading) {
    return <Loading />;
  }

  const handleCategoryDelete = async (id) => {
    try {
      await deleteCategory(id);
    } catch (error) {
      console.error("Error deleting Category:", error);
    }
  };

  return (
    <div className="w-full lg:w-10/12 mx-auto lg:my-4 p-2 lg:p-4">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <h2 className="my-4 text-primary text-1xl lg:text-xl font-bold leading border-b-4 border-primary">
            Category List
          </h2>
          <Link
            href="/dashboard/add-category"
            className="my-4 btn btn-primary text-gray-50 text-xs btn-sm"
          >
            Add Category
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs">
            <thead className="bg-gray-700 text-white">
              <tr className="text-left">
                <th className="p-3">Category</th>
                {/* <th className="p-3">Created Date</th> */}
                <th className="p-3 text-right">Remove</th>
              </tr>
            </thead>
            <tbody>
              {categories?.map((category) => (
                <tr key={category?._id} className="border-b border-opacity-20">
                  <td className="p-3">
                    <p>{category?.title}</p>
                  </td>
                  {/* <td className="p-3">
                    <p>{category?.createdAt}</p>
                  </td> */}
                  <td className="p-3 text-right">
                    <span className="py-1 font-semibold">
                      <button
                        onClick={() => handleCategoryDelete(category?._id)}
                        className="btn btn-xs btn-error btn-outline"
                      >
                        Delete
                      </button>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CategoryManagement;

CategoryManagement.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
