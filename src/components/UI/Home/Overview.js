/* eslint-disable @next/next/no-img-element */
const Overview = () => {
  return (
    <div className="lg:my-8">
      <section className=" p-4 lg:p-4 w-full lg:w-[80%] mx-auto shadow-sm lg:shadow-md">
        <div className="lg:container mx-auto grid justify-center grid-cols-2 text-center lg:grid-cols-4 gap-6 lg:gap-0 my-8">
          <div className="flex flex-col justify-start m-2 lg:m-6">
            <p className="text-5xl text-yellow-500 font-bold leadi lg:text-6xl">
              50
            </p>
            <p className="text-sm sm:text-base">ডাউনলোড হয়েছে</p>
          </div>
          <div className="flex flex-col justify-start m-2 lg:m-6">
            <p className="text-5xl text-teal-500 font-bold leadi lg:text-6xl">
              89K
            </p>
            <p className="text-sm sm:text-base">দেখা হয়েছে </p>
          </div>
          <div className="flex flex-col justify-start m-2 lg:m-6">
            <p className="text-5xl text-blue-700 font-bold leadi lg:text-6xl">
              300+
            </p>
            <p className="text-sm sm:text-base">বই আছে</p>
          </div>
          <div className="flex flex-col justify-start m-2 lg:m-6">
            <p className="text-5xl text-orange-500 font-bold leadi lg:text-6xl">
              30+
            </p>
            <p className="text-sm sm:text-base">ক্যাটাগরী যুক্ত হয়েছে </p>
          </div>
        </div>
      </section>
      <section className="p-4 w-full lg:w-[75%] mx-auto mt-6 lg:mt-12">
        <div className="container grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col justify-center lg:p-8 align-middle">
            <img className="w-[60%] mx-auto" src="/assets/book.webp" alt="" />
            <p className="text-center mt-5">
              আন লিমিটেড বই পড়ুন তালিম অনলাইন লাইব্রেরী থেকে
            </p>
          </div>
          <div className="flex flex-col justify-center lg:p-8 align-middle">
            <img className="w-[60%] mx-auto" src="/assets/search.webp" alt="" />
            <p className="text-center mt-5">
              নির্বাচন করুন আপনার পছন্দের সেরা বই
            </p>
          </div>
          <div className="flex flex-col justify-center lg:p-8 align-middle">
            <img
              className="w-[60%] mx-auto"
              src="/assets/download.webp"
              alt=""
            />
            <p className="text-center mt-5">যত খুশি পিডিএফ ডাউনলোড করুন</p>
          </div>
          <div className="flex flex-col justify-center lg:p-8 align-middle">
            <img className="w-[60%] mx-auto" src="/assets/alert.webp" alt="" />
            <p className="text-center mt-5">
              নিত্য নতুন বই পেতে আমাদের সাথেই থাকুন
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Overview;
