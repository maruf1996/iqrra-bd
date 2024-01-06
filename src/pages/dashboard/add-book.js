import RootLayout from "@/components/Layouts/RootLayout";
import Loading from "@/components/UI/Shared/loading";
import { usePostBookMutation } from "@/redux/features/bookApi";
import { useGetCategoriesQuery } from "@/redux/features/categoryApi";
import { useGetSubCategoriesQuery } from "@/redux/features/subCategoryApi";
import { useState } from "react";
import Swal from "sweetalert2";

const AddBook = () => {
  const [bookData, setBookData] = useState({
    name: "",
    writer: "",
    link: "",
    category: "",
    subcategory: "",
  });

  const { data: categories, isLoading: isLoadingCategories } =
    useGetCategoriesQuery(undefined);
  const { data: subCategories } = useGetSubCategoriesQuery(undefined);
  const [createBook] = usePostBookMutation();

  const handleAddBook = async (e) => {
    e.preventDefault();
    try {
      console.log(bookData);
      await createBook({ data: bookData }).unwrap();
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Book Created Successfully",
      });
      setBookData({
        name: "",
        writer: "",
        link: "",
        category: "",
        subcategory: "",
      });
    } catch (error) {
      console.error("Error:", error);

      if (error.data) {
        Swal.fire({
          icon: "error",
          title: "API Error",
          text:
            error.data.message ||
            "An error occurred while processing your request.",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "An unexpected error occurred. Please try again later.",
        });
      }
    }
  };

  const handleSelectChange = (field, selectedValue) => {
    setBookData({
      ...bookData,
      [field]: selectedValue,
    });
  };

  if (isLoadingCategories) {
    return <Loading />;
  }

  const inputFields = [
    { label: "Name", type: "text" },
    { label: "Writer", type: "text" },
    { label: "Link", type: "text" },
  ];

  return (
    <div className="w-[95%] lg:w-[40%] mx-auto my-4 lg:my-4 bg-gray-200">
      <div className="w-full p-8 space-y-3 rounded-xl bg-gray-700 text-gray-100">
        <h1 className="text-2xl font-bold text-center">Add Book</h1>
        <form onSubmit={handleAddBook} className="space-y-6">
          {inputFields.map((field) => (
            <InputField
              key={field.label}
              label={field.label}
              type={field.type}
              value={bookData[field.label.toLowerCase()]}
              onChange={(e) =>
                setBookData({
                  ...bookData,
                  [field.label.toLowerCase()]: e.target.value,
                })
              }
              required
            />
          ))}
          {renderSelectField(
            "Category",
            bookData.category,
            handleSelectChange,
            categories?.data
          )}

          {renderSelectField(
            "Subcategory", // Update the label to "Subcategory"
            bookData.subcategory,
            handleSelectChange,
            subCategories?.data
          )}

          <button className="block w-full p-3 text-center rounded-sm text-gray-900 bg-violet-200">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

const InputField = ({ label, type, value, onChange, required }) => (
  <div className="space-y-1 text-sm">
    <label htmlFor={label.toLowerCase()} className="block dark:text-gray-400">
      {label} <span className="text-red-500">*</span>
    </label>
    <input
      type={type}
      name={label.toLowerCase()}
      value={value}
      onChange={onChange}
      required={required}
      placeholder={label}
      className="w-full px-4 py-3 rounded-md text-gray-700"
    />
  </div>
);

const renderSelectField = (label, value, onChange, options) => (
  <div className="space-y-1 text-sm">
    <label className="">
      {label} <span className="text-red-500">*</span>
      <select
        value={value}
        onChange={(e) => onChange(label.toLowerCase(), e.target.value)}
        className="text-gray-700 w-full input mt-2"
      >
        {options?.map((option) => (
          <option key={option._id} value={option.title}>
            {option.title}
          </option>
        ))}
      </select>
    </label>
  </div>
);

export default AddBook;

AddBook.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
