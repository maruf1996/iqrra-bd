import RootLayout from "@/components/Layouts/RootLayout";
import { usePostCategoryMutation } from "@/redux/features/categoryApi";
import { useState } from "react";
import Swal from "sweetalert2";

const AddCategory = () => {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [createCategory] = usePostCategoryMutation();

  const handleAddCategory = async (e) => {
    e.preventDefault();

    try {
      await createCategory({ data: { title, link } }).unwrap();
      showSuccessAlert("Category Created Successfully");
      resetForm();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const showSuccessAlert = (message) => {
    Swal.fire({
      icon: "success",
      title: "Success",
      text: message,
    });
  };

  const resetForm = () => {
    setTitle("");
    setLink("");
  };

  return (
    <div className="w-[95%] lg:w-[30%] mx-auto my-6 lg:my-24 bg-gray-200">
      <div className="w-full p-8 space-y-3 rounded-xl bg-gray-700 text-gray-100">
        <h1 className="text-2xl font-bold text-center">Add Category</h1>
        <form onSubmit={handleAddCategory} className="space-y-6">
          {renderInput("title", "Title", title, setTitle, true)}
          {renderInput("link", "Link", link, setLink, true)}
          <button className="block w-full p-3 text-center rounded-sm text-gray-900 bg-violet-200">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

const renderInput = (name, label, value, onChange, required) => (
  <div className="space-y-1 text-sm" key={name}>
    <label htmlFor={name} className="block dark:text-gray-400">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input
      type="text"
      name={name}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      required={required}
      placeholder={label}
      className="w-full px-4 py-3 rounded-md text-gray-700"
    />
  </div>
);

export default AddCategory;

AddCategory.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
