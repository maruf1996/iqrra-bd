/* eslint-disable @next/next/no-img-element */
import RootLayout from "@/components/Layouts/RootLayout";
import Loading from "@/components/UI/Shared/loading";
import { useGetCategoriesQuery } from "@/redux/features/categoryApi";
import Link from "next/link";

const Category = () => {
  const { data, isLoading } = useGetCategoriesQuery(undefined);
  const categories = data?.data;

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className=" lg:w-[80%] w-[95%] mx-auto mb-16 mt-8 lg:mb-28">
      <h2 className="text-center text-2xl md:text-4xl font-bold">
        আপনার পছন্দের সেরা বই পড়ুন তালিম অনলাইন লাইব্রেরীতে
      </h2>
      <p className=" mb-8 text-center font-bold">
        নির্দিষ্ট ক্যাটাগরীর বই পড়তে সেই ক্যাটাগরীর উপরে ক্লিক করুন।{" "}
      </p>
      <div className="container grid grid-cols-2 lg:grid-cols-6 gap-8">
        {categories?.map((category) => (
          <Link
            href={`/books/${category?.title}`}
            key={category?._id}
            className="flex flex-col justify-center lg:p-4 align-middle card shadow-lg"
          >
            <img className="w-[60%] mx-auto" src={category?.link} alt="" />
            <p className="text-center mt-5">{category?.title}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Category;

Category.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
