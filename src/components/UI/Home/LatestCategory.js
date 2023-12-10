/* eslint-disable @next/next/no-img-element */

import { useGetCategoriesQuery } from "@/redux/features/categoryApi";
import Link from "next/link";
import Loading from "../Shared/loading";

const LatestCategory = () => {
  const { data, isLoading } = useGetCategoriesQuery(undefined);
  const categories = data?.data;

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className=" lg:w-[80%] w-[95%] mx-auto my-16 lg:my-28">
      <h2 className="text-center text-2xl md:text-4xl font-bold mb-8">
        বিষয়ভিত্তিক সেরা বই পাবেন আমাদের কাছে
      </h2>
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

export default LatestCategory;
