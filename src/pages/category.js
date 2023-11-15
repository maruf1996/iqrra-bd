import RootLayout from "@/components/Layouts/RootLayout";
import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
const categories = [
  { id: 1, title: "কোরআন", link: "/assets/category/quran.png" },
  { id: 2, title: "তাফসীর", link: "/assets/category/tafsir.png" },
  { id: 3, title: "হাদীস", link: "/assets/category/hadith.png" },
  { id: 4, title: "ফিকহ", link: "/assets/category/fiqah.png" },
  { id: 5, title: "তাজবীদ", link: "/assets/category/tazbid.png" },
  { id: 6, title: "ইতিহাস", link: "/assets/category/itihas.png" },
  { id: 7, title: "সীরাতে রাসুল সাঃ", link: "/assets/category/sirat.png" },
  { id: 8, title: "ইসলামী উপন্যাস", link: "/assets/category/uponnas.png" },
  { id: 9, title: "সাহিত্য", link: "/assets/category/sahitto.png" },
  { id: 10, title: "জীবনী", link: "/assets/category/jiboni.png" },
  { id: 11, title: "লেখালেখি", link: "/assets/category/writing.png" },
  { id: 12, title: "ভাষা শিক্ষা", link: "/assets/category/language.png" },
  { id: 13, title: "ইতিহাস ও ঐতিহ্য", link: "/assets/category/Itihas.png" },
  { id: 14, title: "ইসলামী দর্শন", link: "/assets/category/islamidorson.png" },
  { id: 15, title: "আকাইদ", link: "/assets/category/akaid.png" },
  { id: 16, title: "কোরআন বিষয়ক", link: "/assets/category/koranbisoyok.png" },
  {
    id: 17,
    title: "ইসলামী আদর্শ ও মতবাদ",
    link: "/assets/category/islamiadorsomotobad.png",
  },
  {
    id: 18,
    title: "আকিদা ও ভ্রান্ত মতবাদ",
    link: "/assets/category/akidavrantomotobad.png",
  },
  { id: 19, title: "আখিরাত", link: "/assets/category/akhirat.png" },
  { id: 20, title: "মাযহাব", link: "/assets/category/mazhab.png" },
  {
    id: 21,
    title: "আত্মশুদ্ধি ও তাসাউফ",
    link: "/assets/category/attosuddhi.png",
  },
  {
    id: 22,
    title: "দাওয়াত ও তাবলীগ",
    link: "/assets/category/dawattablig.png",
  },
  { id: 23, title: "বয়ান ও খুতবা", link: "/assets/category/boyan.png" },
  {
    id: 24,
    title: "আখলাক বা চরিত্রগঠন",
    link: "/assets/category/akhlakhcoritro.png",
  },
  { id: 25, title: "গবেষণা", link: "/assets/category/gobesona.png" },
  {
    id: 26,
    title: "ফেরেশতা ও জ্বীন",
    link: "/assets/category/ferestaojin.png",
  },
  {
    id: 27,
    title: "আচরণ ও শিষ্টাচার",
    link: "/assets/category/acoronosistacar.png",
  },
  {
    id: 28,
    title: "ইসলাম ও বিজ্ঞান",
    link: "/assets/category/islamobiggan.png",
  },
  { id: 29, title: "প্রবন্ধ", link: "/assets/category/probondho.png" },
  {
    id: 30,
    title: "কাব্য কবিতা ও ছড়া",
    link: "/assets/category/kabbochora.png",
  },
  {
    id: 31,
    title: "ইসলামী জীবন",
    link: "/assets/category/islamijibon.png",
  },
  {
    id: 32,
    title: "ইসলামী অর্থনীতি",
    link: "/assets/category/islamiorthoniti.png",
  },
  { id: 33, title: "ভ্রমন কাহিনী", link: "/assets/category/vromon.png" },
  {
    id: 34,
    title: "ইসলাম ও সমকালীন বিশ্ব",
    link: "/assets/category/somokalinbisso.png",
  },
  {
    id: 35,
    title: "সমকালীন চিন্তাভাবনা",
    link: "/assets/category/somokalincintavabna.png",
  },
  {
    id: 36,
    title: "তুলনামূলক ধর্মতত্ত্ব",
    link: "/assets/category/tulonamulokdhormototto.png",
  },
  {
    id: 37,
    title: "উপদেশমূলক",
    link: "/assets/category/upodeshmulok.png",
  },
  {
    id: 38,
    title: "দোয়া ও যিকির",
    link: "/assets/category/dowa.png",
  },
  {
    id: 39,
    title: "কাশফ ইলহাম ও স্বপ্ন",
    link: "/assets/category/kasfoilham.png",
  },
  {
    id: 40,
    title: "সংগীত বিষয়ক",
    link: "/assets/category/songit.png",
  },
  { id: 41, title: "সাইমুম সিরিজ", link: "/assets/category/saimum.png" },
  {
    id: 42,
    title: "অন্যান্য বিবিধ",
    link: "/assets/category/onnanno.png",
  },
];

const Category = () => {
  return (
    <section className=" lg:w-[80%] w-[95%] mx-auto mb-16 mt-8 lg:mb-28">
      <h2 className="text-center text-2xl md:text-4xl font-bold">
        আপনার পছন্দের সেরা বই পড়ুন ইক্বরা বিডিতে
      </h2>
      <p className=" mb-8 text-center font-bold">
        নির্দিষ্ট ক্যাটাগরীর বই পড়তে সেই ক্যাটাগরীর উপরে ক্লিক করুন।{" "}
      </p>
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

export default Category;

Category.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
