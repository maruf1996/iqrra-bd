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
    <section className="lg:w-[90%] w-[95%] mx-auto my-20">
      <h2
        data-aos="zoom-in"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
        className="text-center text-2xl md:text-4xl font-bold my-8"
      >
        বিষয়ভিত্তিক সেরা বই পাবেন আমাদের কাছে
      </h2>
      <div className="container grid grid-cols-2 lg:grid-cols-6 gap-8 mb-8">
        {categories?.slice(0, 12).map((category) => (
          <Link
            data-aos="zoom-in"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
            href={`/books/${category?.title}`}
            key={category?._id}
            className="flex flex-col justify-center lg:p-4 align-middle card shadow-lg"
          >
            <img className="w-[70%] mx-auto" src={category?.link} alt="" />
            <p className="text-center text-xl mt-5">{category?.title}</p>
          </Link>
        ))}
      </div>
      <Link href="/category">
        <div className="flex justify-center">
          <button
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
            className="mt-2 bg-[#36373A] text-gray-50 py-2 px-6 rounded-lg font-semibold"
          >
            আরো বই দেখুন
          </button>
        </div>
      </Link>
    </section>
  );
};

export default LatestCategory;
