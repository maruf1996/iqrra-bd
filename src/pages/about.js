/* eslint-disable @next/next/no-img-element */
import RootLayout from "@/components/Layouts/RootLayout";

const About = () => {
  return (
    <div>
      <section className="bg-gray-800 text-gray-100">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-12 lg:flex-row lg:justify-between lg:px-20">
          <div className="flex flex-col justify-center p-6 rounded-sm lg:max-w-[50%]">
            <h1 className="text-2xl font-bold leadi lg:text-3xl">
              তালিম অনলাইন লাইব্রেরীর পথচলা
            </h1>
            <p className="my-8 text-sm">
              বইপ্রেমীদের জন্য তালিম অনলাইন লাইব্রেরী একটি জনপ্রিয় অনলাইন
              লাইব্রেরী। তালিম অনলাইন লাইব্রেরী নিয়ে এসেছে অনলাইনে বইয়ের বিশাল
              সমারহ। ইক্বরা বিডি চেষ্টা করে যাচ্ছে তার পাঠকদের জন্য ব্যতিক্রমী
              কিছু উপহার দেওয়ার।
            </p>
            <p className="text-sm">
              বিভিন্ন লেখক ও বিভিন্ন ক্যাটাগরীর বিভিন্ন বই নির্বিগ্নে যেন পাঠক
              পড়তে পারে এজন্যই জন্ম হয়েছে তালিম অনলাইন লাইব্রেরী। আপনারা আমাদের
              পাশে থাকলে আমরা চেষ্টা করবো আমাদের সর্বোচ্চ পরিশ্রম ও ত্যাগের
              মাধ্যমে আরো ভালো কিছু আপনাদের উপহার দিতে।
            </p>
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 ">
            <img
              src="/assets/book-about.png"
              alt=""
              className="object-contain border rounded bg-gray-50 h-72 sm:h-80 lg:h-96 w-full"
            />
          </div>
        </div>
      </section>
      <section className="text-gray-800 bg-gray-50">
        <div className="grid grid-cols-1 lg:grid-cols-2 py-12 px-4 lg:px-16 gap-8">
          <div className="card flex items-center justify-center shadow-md p-8 lg:w-[80%] mx-auto bg-white">
            <h1 className="text-3xl font-bold mb-4 text-center">
              বিশেষ আবেদন!
            </h1>
            <p className="text-justify text-sm font-bold ">
              তালিম অনলাইন লাইব্রেরীর ওয়েবসাইটটিতে এখনো ডোমেইন হোস্টিংসহ অনেক
              কাজ চলমান। এসমস্ত কাজ বিশেষ করে ডোমেইন হোস্টিং এর জন্য ভালো
              পরিমাণে আমাদের অর্থের প্রয়োজন। আশাকরি তালিম অনলাইন লাইব্রেরীর
              পাঠকরা আমাদের যথাসাধ্য সহযোগিতা করবেন।
            </p>
          </div>
          <div className="card p-8 w-[98%] lg:w-[80%] mx-auto">
            <h1 className="text-3xl font-bold mb-4">যারা টাকা পাঠাবেন</h1>
            <p>
              <span className="font-bold">01978907918</span> (BKASH PERSONAL)
            </p>
            <p>
              <span className="font-bold">01978907918</span> (NOGOD PERSONAL)
            </p>
            <h1 className="text-3xl font-bold mt-4">যে কোন প্রয়োজনে</h1>
            <p className="font-bold mb-1">maruf3813@gmail.com</p>
            <p className="font-bold mb-1">01978907918 , 01617589004</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

About.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
