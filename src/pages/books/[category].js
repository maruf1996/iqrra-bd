import RootLayout from "@/components/Layouts/RootLayout";
import Loading from "@/components/UI/Shared/loading";
import { useGetBooksQuery } from "@/redux/features/bookApi";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Books = () => {
  const router = useRouter();
  const { data, isLoading } = useGetBooksQuery(undefined);
  const books = data?.data;
  const [totalDownload, setTotalDownload] = useState();
  // console.log(data);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://talim-online-libary-backend.vercel.app/api/v1/download/659281fdeaae4327d3ca56db"
        );
        if (!response.ok) {
          console.error("Error:", response.statusText);
          return;
        }
        const data = await response.json();
        setTotalDownload(data?.data?.count);
      } catch (error) {
        console.error("Error:", error.message);
      }
    };
    fetchData();
  }, []);
  // console.log(totalDownload);

  const countDownLoad = async () => {
    if (Number(totalDownload) > 1) {
      const count = Number(totalDownload) + 1;
      const dataToSend = { count: count };
      const response = await fetch(
        "https://talim-online-libary-backend.vercel.app/api/v1/download/659281fdeaae4327d3ca56db",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataToSend),
        }
      );
      console.log(response);
    }
  };

  const subCategorySet = [];

  const categoryBooks = books?.filter(
    (book) =>
      book?.subcategory?.length === 0 &&
      book?.category === router.query.category
  );

  const subCategoryBooks = books?.filter(
    (book) =>
      book?.subcategory?.length > 0 && book?.category === router.query.category
  );

  if (subCategoryBooks) {
    for (const book of subCategoryBooks) {
      const findBook = subCategorySet?.find(
        (sBook) => sBook?.subcategory === book?.subcategory
      );
      if (!findBook) {
        subCategorySet.push(book);
      }
    }
  }

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="bg-gray-50">
      <div
        data-aos="zoom-in-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
        className="lg:w-[50%] w-[96%] border-gray-500 border-2 my-8 mx-auto rounded-md "
      >
        {subCategorySet?.length === 0 && categoryBooks?.length === 0 ? (
          <div className="">
            <h1 className="text-center font-bold p-4 text-red-400">
              কোন বই খুঁজে পাওয়া যায়নি
            </h1>
          </div>
        ) : (
          <div className="">
            <h2 className="text-2xl p-4 font-semibold bg-gray-500 leadi text-center text-white">
              {router.query.category} বিষয়ক বই
            </h2>
            <div className="p-2 bg-gray-50">
              {subCategorySet?.length > 0 &&
                subCategorySet?.map((book) => (
                  <Link
                    href={`/books/subcategorybooks/${book?.subcategory}`}
                    key={book?._id}
                  >
                    <ul className="flex justify-between lg:flex-row flex-col border p-2 m-2 bg-gray-100">
                      <li className="p-1 font-bold">{book?.subcategory}</li>
                      <li className="p-1 text-start">{book?.writer}</li>
                    </ul>
                  </Link>
                ))}
              {categoryBooks?.length > 0 &&
                categoryBooks?.map((book) => (
                  <a
                    onClick={countDownLoad}
                    key={book?._id}
                    href={book?.link}
                    target="_blank"
                  >
                    <ul className="flex justify-between lg:flex-row flex-col border p-2 m-2 bg-gray-100">
                      <li className="p-1 font-bold">{book?.name}</li>
                      <li className="p-1  text-start">{book?.writer}</li>
                    </ul>
                  </a>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Books;

Books.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
