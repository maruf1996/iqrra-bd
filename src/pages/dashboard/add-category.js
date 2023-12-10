import DashboardLayout from "@/components/Layouts/DashboardLayout";
import { usePostCategoryMutation } from "@/redux/features/categoryApi";
import { useState } from "react";
import Swal from "sweetalert2";

const AddCategory = () => {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [createCategories, { isSuccess }] = usePostCategoryMutation();

  const handleAddCategory = async (e) => {
    e.preventDefault();
    const options = {
      data: { title, link },
    };
    console.log(options);
    createCategories(options)
      .unwrap()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Category Created Successfully",
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    setTitle("");
    setLink("");
  };

  return (
    <div className="w-[95%] lg:w-[30%] mx-auto my-6 lg:my-24 bg-gray-200">
      <div className="w-full  p-8 space-y-3 rounded-xl bg-gray-700 text-gray-100">
        <h1 className="text-2xl font-bold text-center">Add Category</h1>
        <form onSubmit={handleAddCategory} className="space-y-6">
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
          <div className="space-y-1 text-sm">
            <label htmlFor="link" className="block dark:text-gray-400">
              Link <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="link"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              placeholder="Link"
              required
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

export default AddCategory;

AddCategory.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
