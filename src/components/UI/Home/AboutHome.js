/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const AboutHome = () => {
  return (
    <div className="bg-cover my-16 bg-center lg:w-[80%] mx-auto h-[30rem] lg:h-[70vh] relative z-0 p-4">
      <img
        src="/assets/abotbg.webp"
        alt="Hero Background"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-90 rounded-lg"
      />
      <div className="absolute inset-0 flex items-center lg:items-end lg:justify-end text-black">
        <div className="w-full lg:w-[65%] p-6 lg:p-8">
          <h1 className="text-center lg:text-start lg:text-4xl font-bold uppercase">
            তানযীম অনলাইন লাইব্রেরী কী ও কেন??
          </h1>
          <p className="mt-8 mb-3 text-justify text-sm">
            তানযীম অনলাইন লাইব্রেরী বাংলাদেশের অন্যতম একটি জনপ্রিয় অনলাইন
            লাইব্রেরী। প্রায় ত্রিশ এর ও বেশি বিষয়ের উপরে তানযীম অনলাইন লাইব্রেরী
            নিয়ে এসেছে প্রায় পাঁচশতের মত বই শুধুমাত্র আপনাদের জন্য।
          </p>
          <p className="mb-8 text-justify text-sm">
            বইপড়ুয়া বন্ধুদের জন্য তাদের পছন্দের বইগুলো সংগ্রহ করা সহজ করতেই মূলত
            তানযীম অনলাইন লাইব্রেরীর পথচলা। তানযীম অনলাইন লাইব্রেরী সবসময় চেষ্টা
            করে যাচ্ছে বইপড়ুয়াদেরকে তাদের সেরা সেরা পছন্দের বইগুলো উপহার দিতে।
          </p>
          <Link href="/about">
            <button
              data-aos="zoom-in"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
              type="button"
              className="px-8 py-3 w-full lg:w-[60%] text-xs lg:text-sm font-semibold rounded-full text-gray-100 bg-gray-600"
            >
              আমাদের সাথে যোগাযোগ করতে ক্লিক করুন
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutHome;
