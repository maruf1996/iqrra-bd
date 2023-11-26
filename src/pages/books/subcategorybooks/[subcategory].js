import RootLayout from "@/components/Layouts/RootLayout";
import { useRouter } from "next/router";

const books = [
  {
    id: 1,
    name: "তাফসীরে মারেফুল কোরআন-১",
    writer: "মুফতী শফী রহঃ",
    link: "",
    category: "তাফসীর",
    subcategory: "তাফসীরে মারেফুল কোরআন",
  },
  {
    id: 1,
    name: "তাফসীরে মারেফুল কোরআন-২",
    writer: "মুফতী শফী রহঃ",
    link: "",
    category: "তাফসীর",
    subcategory: "তাফসীরে মারেফুল কোরআন",
  },
  {
    id: 1,
    name: "তাফসীরে মারেফুল কোরআন-৩",
    writer: "মুফতী শফী রহঃ",
    link: "",
    category: "তাফসীর",
    subcategory: "তাফসীরে মারেফুল কোরআন",
  },
  {
    id: 1,
    name: "তাফসীরে মারেফুল কোরআন-৪",
    writer: "মুফতী শফী রহঃ",
    link: "",
    category: "তাফসীর",
    subcategory: "তাফসীরে মারেফুল কোরআন",
  },
  {
    id: 1,
    name: "তাফসীরে মারেফুল কোরআন-৫",
    writer: "মুফতী শফী রহঃ",
    link: "",
    category: "তাফসীর",
    subcategory: "তাফসীরে মারেফুল কোরআন",
  },
  {
    id: 2,
    name: "তাফসীরে আমপারা",
    writer: "শামসুল হক ফরিদপুরী রহঃ",
    link: "",
    category: "তাফসীর",
    subcategory: "",
  },
  {
    id: 3,
    name: "তাফসীরে সূরা ফাতিহা",
    writer: "মুফতী ইয়াসীন নবীপুরী",
    link: "",
    category: "তাফসীর",
    subcategory: "",
  },
  {
    id: 3,
    name: "তাফসীরে তাওযিহুল কোরআন-১",
    writer: "মুফতী তাকী উসমা্নী",
    link: "",
    category: "তাফসীর",
    subcategory: "তাওযিহুল কোরআন",
  },
  {
    id: 3,
    name: "তাফসীরে তাওযিহুল কোরআন-২",
    writer: "মুফতী তাকী উসমানী",
    link: "",
    category: "তাফসীর",
    subcategory: "তাওযিহুল কোরআন",
  },
];

const SubCategory = () => {
  const router = useRouter();
  const subCategoryBooks = books?.filter(
    (book) =>
      book.subcategory.length > 0 &&
      book.subcategory === router.query.subcategory
  );
  return (
    <div>
      <div className="w-[96%] border-4 my-8 mx-auto rounded-md ">
        {subCategoryBooks.length === 0 ? (
          <div className="">
            <h1 className="text-center p-4 text-red-400">
              কোন বই খুঁজে পাওয়া যায়নি
            </h1>
          </div>
        ) : (
          <div className="">
            <h2 className="mb-3 text-2xl p-4 font-semibold bg-black leadi text-center text-white">
              {router.query.subcategory}
            </h2>
            <div className="p-2">
              {subCategoryBooks.length > 0 &&
                subCategoryBooks?.map((book) => (
                  <a key={book.id} href={book.link}>
                    <ul className="flex justify-between lg:flex-row flex-col border p-2 m-2">
                      <li className="p-1">{book.name}</li>
                      <li className="p-1 lg:w-[220px] text-start">
                        {book.writer}
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
