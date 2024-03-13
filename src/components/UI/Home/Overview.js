/* eslint-disable @next/next/no-img-element */

import { useTotalBooksQuery } from "@/redux/features/bookApi";
import { useTotalCategoriesQuery } from "@/redux/features/categoryApi";
import { useEffect, useState } from "react";
import Loading from "../Shared/loading";

const Overview = () => {
  const { data: totalBook, isLoading: bookLoading } = useTotalBooksQuery();
  const { data: totalCategory } = useTotalCategoriesQuery();
  const [totalDownload, setTotalDownload] = useState("");
  const [visitorCount, setVisitorCount] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://muslim-pathagar-backend.vercel.app/api/v1/download/6592b27feaae4327d3ca56e0"
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

  if (bookLoading) {
    return <Loading />;
  }

  return (
    <div className="lg:py-8 bg-gray-50">
      <section className="my-8 lg:mt-12 p-4 lg:p-3 w-full lg:w-[90%] mx-auto shadow-sm lg:shadow-md ">
        <div className="lg:container mx-auto grid justify-center grid-cols-2 text-center lg:grid-cols-4 gap-8">
          {renderStat("ডাউনলোড হয়েছে", "text-yellow-500", `${totalDownload}`)}
          {renderStat("দেখা হয়েছে", "text-teal-500", `${visitorCount}`)}
          {renderStat("বই আছে", "text-blue-700", `${totalBook?.data}`)}
          {renderStat(
            "ক্যাটাগরী যুক্ত হয়েছে",
            "text-orange-500",
            `${totalCategory?.data}`
          )}
        </div>
      </section>
      <section className="p-4 w-full lg:w-[85%] mx-auto mt-6 lg:mt-12">
        <div className=" grid grid-cols-2 lg:grid-cols-4 gap-8">
          {renderFeature(
            "/assets/book.webp",
            "আনলিমিটেড বই পড়ুন মুসলিম পাঠাগার থেকে"
          )}
          {renderFeature(
            "/assets/search.webp",
            "নির্বাচন করুন আপনার পছন্দের সেরা বই"
          )}
          {renderFeature(
            "/assets/download.webp",
            "যত খুশি পিডিএফ ডাউনলোড করুন"
          )}
          {renderFeature(
            "/assets/alert.webp",
            "নিত্য নতুন বই পেতে আমাদের সাথেই থাকুন"
          )}
        </div>
      </section>
    </div>
  );
};

const renderStat = (label, colorClass, value) => (
  <div
    data-aos="zoom-in"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="1000"
    className="flex flex-col justify-start lg:m-6 align-middle card shadow-lg p-4 lg:p-0 lg:shadow-none"
  >
    <p className={`text-5xl font-bold leadi lg:text-6xl ${colorClass}`}>
      {value}
    </p>
    <p className="text-sm mt-1 sm:text-base">{label}</p>
  </div>
);

const renderFeature = (imageSrc, description) => (
  <div
    data-aos="zoom-in"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="1000"
    className="flex flex-col justify-center lg:p-8 align-middle"
  >
    <img className="w-[60%] mx-auto" src={imageSrc} alt="" />
    <p className="text-center mt-5">{description}</p>
  </div>
);

export default Overview;
