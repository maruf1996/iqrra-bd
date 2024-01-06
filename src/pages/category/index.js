/* eslint-disable @next/next/no-img-element */
import RootLayout from "@/components/Layouts/RootLayout";
import Loading from "@/components/UI/Shared/loading";
import { useGetCategoriesQuery } from "@/redux/features/categoryApi";
import Link from "next/link";
import { useEffect, useState } from "react";

const Category = () => {
  const { data, isLoading } = useGetCategoriesQuery(undefined);
  const categories = data?.data;
  const [visitorCount, setVisitorCount] = useState();
  // console.log(visitorCount);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://talim-online-libary-backend.vercel.app/api/v1/download/6592b27feaae4327d3ca56e0"
        );
        if (!response.ok) {
          console.error("Error:", response.statusText);
          return;
        }
        const data = await response.json();
        setVisitorCount(data?.data?.count);
      } catch (error) {
        console.error("Error:", error.message);
      }
    };
    fetchData();
  }, []);

  const handleViewCount = async () => {
    const count = visitorCount + 1;
    try {
      const dataToSend = { count: count };
      const response = await fetch(
        "https://talim-online-libary-backend.vercel.app/api/v1/download/6592b27feaae4327d3ca56e0",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataToSend),
        }
      );
      console.log(response);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section
      onClick={handleViewCount}
      className=" lg:w-[80%] w-[95%] mx-auto mb-16 mt-8 lg:mb-28"
    >
      <h2 className="text-center text-2xl md:text-4xl font-bold">
        আপনার পছন্দের সেরা বই পড়ুন তানযীম অনলাইন লাইব্রেরীতে
      </h2>
      <p className=" mb-8 text-center font-bold">
        নির্দিষ্ট ক্যাটাগরীর বই পড়তে সেই ক্যাটাগরীর উপরে ক্লিক করুন।{" "}
      </p>
      <div className="container grid grid-cols-2 lg:grid-cols-6 gap-8">
        {categories?.map((category) => (
          <Link
            data-aos="zoom-in"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
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
