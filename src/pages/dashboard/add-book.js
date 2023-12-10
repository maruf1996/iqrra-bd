import DashboardLayout from "@/components/Layouts/DashboardLayout";
import Loading from "@/components/UI/Shared/loading";
import { usePostBookMutation } from "@/redux/features/bookApi";
import { useGetCategoriesQuery } from "@/redux/features/categoryApi";
import { useGetSubCategoriesQuery } from "@/redux/features/subcategoryApi";
import { useState } from "react";
import Swal from "sweetalert2";

const AddBook = () => {
  const [name, setName] = useState("");
  const [writer, setWriter] = useState("");
  const [link, setLink] = useState("");
  const [category, setCategory] = useState("");
  const [subcategory, setSubCategory] = useState("");
  const { data: categories, isLoading } = useGetCategoriesQuery(undefined);
  const { data: subCategories } = useGetSubCategoriesQuery(undefined);
  const [createBook, { isSuccess }] = usePostBookMutation();
  // console.log(categories);

  if (isLoading) {
    return <Loading />;
  }

  const handleAddBook = async (e) => {
    e.preventDefault();
    const options = {
      data: { name, writer, link, category, subcategory },
    };
    console.log(options);
    createBook(options)
      .unwrap()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Book Created Successfully",
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    setName("");
    setWriter("");
    setLink("");
    setCategory("");
    setSubCategory("");
  };

  return (
    <div className="w-[95%] lg:w-[40%] mx-auto my-4 lg:my-4 bg-gray-200">
      <div className="w-full  p-8 space-y-3 rounded-xl bg-gray-700 text-gray-100">
        <h1 className="text-2xl font-bold text-center">Add Book</h1>
        <form onSubmit={handleAddBook} className="space-y-6">
          <div className="space-y-1 text-sm">
            <label htmlFor="name" className="block dark:text-gray-400">
              name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Name"
              className="w-full px-4 py-3 rounded-md text-gray-700"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="writer" className="block dark:text-gray-400">
              writer <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="writer"
              value={writer}
              onChange={(e) => setWriter(e.target.value)}
              required
              placeholder="Writer"
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
              required
              placeholder="Link"
              className="w-full px-4 py-3 rounded-md text-gray-700"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label className="">
              Category <span className="text-red-500">*</span>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className=" text-gray-700  w-full input mt-2"
              >
                {categories?.data?.map((c) => (
                  <option key={c?._id} value={c?.title}>
                    {c?.title}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div className="space-y-1 text-sm">
            <label>
              Sub Category
              <select
                value={subcategory}
                onChange={(e) => setSubCategory(e.target.value)}
                className=" text-gray-700  w-full input mt-2"
              >
                {subCategories?.data?.map((sc) => (
                  <option key={sc?._id} value={sc?.title}>
                    {sc?.title}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <button className="block w-full p-3 text-center rounded-sm text-gray-900 bg-violet-200">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBook;

AddBook.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
