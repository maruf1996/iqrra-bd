import RootLayout from "@/components/Layouts/RootLayout";
import Loading from "@/components/UI/Shared/loading";
import {
  useDeleteBookMutation,
  useGetBooksQuery,
} from "@/redux/features/bookApi";
import Link from "next/link";
import { useEffect } from "react";
import Swal from "sweetalert2";

const BookManagement = () => {
  const { data, isLoading } = useGetBooksQuery(undefined);
  const books = data?.data;

  const [deleteBook, { isSuccess }] = useDeleteBookMutation();

  useEffect(() => {
    if (isSuccess) {
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Book Delete is Successfully",
      });
    }
  }, [isSuccess]);

  if (isLoading) {
    return <Loading />;
  }

  const handleBookDelete = async (id) => {
    try {
      await deleteBook(id);
    } catch (error) {
      console.error("Error deleting Book:", error);
    }
  };

  return (
    <div className="w-full lg:w-10/12 mx-auto lg:my-4 p-2 lg:p-4">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <h2 className="my-4 text-primary text-1xl lg:text-xl font-bold leading border-b-4 border-primary">
            Book List
          </h2>
          <Link
            href="/dashboard/add-book"
            className="my-4 btn btn-primary text-gray-50 text-xs btn-sm"
          >
            Add Book
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs">
            <thead className="bg-gray-700 text-white">
              <tr className="text-left">
                <th className="p-3">Book</th>
                <th className="p-3">Writer</th>
                <th className="p-3">Category</th>
                <th className="p-3 text-right">Remove</th>
              </tr>
            </thead>
            <tbody>
              {books?.map((book) => (
                <tr key={book?._id} className="border-b border-opacity-20">
                  <td className="p-3">
                    <p>{book?.name}</p>
                  </td>
                  <td className="p-3">
                    <p>{book?.writer}</p>
                  </td>
                  <td className="p-3">
                    <p>{book?.category}</p>
                  </td>
                  <td className="p-3 text-right">
                    <span className="py-1 font-semibold">
                      <button
                        onClick={() => handleBookDelete(book?._id)}
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

export default BookManagement;

BookManagement.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
