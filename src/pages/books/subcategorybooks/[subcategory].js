import RootLayout from "@/components/Layouts/RootLayout";
import Loading from "@/components/UI/Shared/loading";
import { useGetBooksQuery } from "@/redux/features/bookApi";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const SubCategory = () => {
  const router = useRouter();
  const { data, isLoading } = useGetBooksQuery(undefined);
  const [totalDownload, setTotalDownload] = useState();
  // console.log(data);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://muslim-pathagar-backend.vercel.app/api/v1/download/659281fdeaae4327d3ca56db"
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
      console.log(count);

      const dataToSend = { count: count };
      const response = await fetch(
        "https://muslim-pathagar-backend.vercel.app/api/v1/download/659281fdeaae4327d3ca56db",
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

  const books = data?.data;
  const subCategoryBooks = books?.filter(
    (book) =>
      book?.subcategory?.length > 0 &&
      book?.subcategory.trim() === router.query.subcategory
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  // console.log(subCategoryBooks);

  return (
    <div className="bg-gray-50 my-0">
      <div
        data-aos="zoom-in-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
        className="w-[96%] lg:w-[50%] border-2 border-gray-500 my-8 mx-auto rounded-md "
      >
        {subCategoryBooks?.length === 0 ? (
          <div className="">
            <h1 className="text-center p-4 text-red-400">
              কোন বই খুঁজে পাওয়া যায়নি
            </h1>
          </div>
        ) : (
          <div className="">
            <h2 className="mb-3 text-2xl p-4 font-semibold bg-gray-500 leadi text-center text-white">
              {router.query.subcategory}
            </h2>
            <div className="p-2">
              {subCategoryBooks?.length > 0 &&
                subCategoryBooks?.map((book) => (
                  <a
                    onClick={countDownLoad}
                    key={book?._id}
                    href={book?.link}
                    target="_blank"
                  >
                    <ul className="flex justify-between lg:flex-row flex-col border p-2 m-2 bg-gray-100">
                      <li className="p-1 font-bold">{book?.name}</li>
                      <li className="p-1 lg:w-[220px] text-start">
                        {book?.writer}
                      </li>
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

export default SubCategory;

SubCategory.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
