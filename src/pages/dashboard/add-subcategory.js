import DashboardLayout from "@/components/Layouts/DashboardLayout";
import { usePostSubCategoryMutation } from "@/redux/features/subcategoryApi";
import { useState } from "react";
import Swal from "sweetalert2";

const AddSubCategory = () => {
  const [title, setTitle] = useState("");
  const [createSubCategories, { isSuccess }] = usePostSubCategoryMutation();

  const handleAddSubCategory = async (e) => {
    e.preventDefault();
    const options = {
      data: { title },
    };
    console.log(options);
    createSubCategories(options)
      .unwrap()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Sub Category Created Successfully",
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    setTitle("");
  };

  return (
    <div className="w-[95%] lg:w-[30%] mx-auto my-6 lg:my-24 bg-gray-200">
      <div className="w-full  p-8 space-y-3 rounded-xl bg-gray-700 text-gray-100">
        <h1 className="text-2xl font-bold text-center">Add Sub Category</h1>
        <form onSubmit={handleAddSubCategory} className="space-y-6">
          <div className="space-y-1 text-sm">
            <label htmlFor="title" className="block dark:text-gray-400">
              Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              placeholder="Title"
              className="w-full px-4 py-3 rounded-md text-gray-700"
            />
          </div>
          <button className="block w-full p-3 text-center rounded-sm text-gray-900 bg-violet-200">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddSubCategory;

AddSubCategory.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
