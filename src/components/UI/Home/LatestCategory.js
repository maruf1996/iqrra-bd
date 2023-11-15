/* eslint-disable @next/next/no-img-element */

import Link from "next/link";

const categories = [
  { id: 1, title: "কোরআন", link: "/assets/category/quran.png" },
  { id: 2, title: "তাফসীর", link: "/assets/category/tafsir.png" },
  { id: 3, title: "হাদীস", link: "/assets/category/hadith.png" },
  { id: 4, title: "ফিকহ", link: "/assets/category/fiqah.png" },
  { id: 5, title: "তাজবীদ", link: "/assets/category/tazbid.png" },
  { id: 6, title: "ইতিহাস", link: "/assets/category/itihas.png" },
  { id: 7, title: "সীরাত", link: "/assets/category/sirat.png" },
  { id: 8, title: "উপন্যাস", link: "/assets/category/uponnas.png" },
  { id: 9, title: "সাহিত্য", link: "/assets/category/sahitto.png" },
  { id: 10, title: "জীবনী", link: "/assets/category/jiboni.png" },
  { id: 11, title: "লেখালেখি", link: "/assets/category/writing.png" },
  { id: 12, title: "ভাষা শিক্ষা", link: "/assets/category/language.png" },
];

const LatestCategory = () => {
  return (
    <section className=" lg:w-[80%] w-[95%] mx-auto my-16 lg:my-28">
      <h2 className="text-center text-2xl md:text-4xl font-bold mb-8">
        বিষয়ভিত্তিক সেরা বই পাবেন আমাদের কাছে
      </h2>
      <Link href="" className="container grid grid-cols-2 lg:grid-cols-6 gap-8">
        {categories.map((category) => (
          <div
            key={category.id}
            className="flex flex-col justify-center lg:p-4 align-middle card shadow-lg"
          >
            <img className="w-[60%] mx-auto" src={category.link} alt="" />
            <p className="text-center mt-5">{category.title}</p>
          </div>
        ))}
      </Link>
    </section>
  );
};

export default LatestCategory;
