import RootLayout from "@/components/Layouts/RootLayout";
import { usePostSubCategoryMutation } from "@/redux/features/subCategoryApi";
import { useState } from "react";
import Swal from "sweetalert2";

const AddSubCategory = () => {
  const [title, setTitle] = useState("");
  const [createSubCategory] = usePostSubCategoryMutation();

  const handleAddSubCategory = async (e) => {
    e.preventDefault();

    try {
      await createSubCategory({ data: { title } }).unwrap();
      showSuccessAlert("Sub Category Created Successfully");
      setTitle("");
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

  return (
    <div className="w-[95%] lg:w-[30%] mx-auto my-6 lg:my-24 bg-gray-200">
      <div className="w-full p-8 space-y-3 rounded-xl bg-gray-700 text-gray-100">
        <h1 className="text-2xl font-bold text-center">Add Sub Category</h1>
        <form onSubmit={handleAddSubCategory} className="space-y-6">
          {renderInput("title", "Title", title, setTitle, true)}
          <button className="block w-full p-3 text-center rounded-sm text-gray-900 bg-violet-200">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

const renderInput = (name, label, value, onChange, required) => (
  <div className="space-y-1 text-sm">
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

export default AddSubCategory;

AddSubCategory.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
