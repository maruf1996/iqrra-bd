import RootLayout from "@/components/Layouts/RootLayout";
import Loading from "@/components/UI/Shared/loading";
import { useGetBooksQuery } from "@/redux/features/bookApi";
import { useRouter } from "next/router";

const SubCategory = () => {
  const router = useRouter();
  const { data, isLoading } = useGetBooksQuery(undefined);
  if (isLoading) {
    return <Loading />;
  }

  const books = data?.data;
  const subCategoryBooks = books?.filter(
    (book) =>
      book?.subcategory?.length > 0 &&
      book?.subcategory === router.query.subcategory
  );
  return (
    <div className="bg-gray-50 my-0">
      <div className="w-[96%] lg:w-[50%] border-2 border-gray-500 my-8 mx-auto rounded-md ">
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
                  <a key={book?._id} href={book?.link}>
                    <ul className="flex justify-between lg:flex-row flex-col border p-2 m-2 bg-gray-100">
                      <li className="p-1">{book?.name}</li>
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
