import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
const AboutIqra = () => {
  return (
    <div
      bac
      className="bg-cover my-16 bg-center lg:w-[80%] mx-auto h-[30rem] lg:h-[70vh] relative z-0 p-4"
    >
      <img
        src="/assets/abotbg.webp"
        alt="Hero Background"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-90 rounded-lg"
      />
      <div className="absolute inset-0 flex items-center lg:items-end lg:items-center lg:justify-end text-black">
        <div className="w-[100%] lg:w-[65%] p-6 lg:p-8">
          <h1 className=" text-center lg:text-start lg:text-4xl font-bold uppercase">
            তালীম অনলাইন লাইব্রেরী কী ও কেন??
          </h1>
          <p className="mt-8 mb-3 text-justify text-sm">
            তালীম অনলাইন লাইব্রেরী বাংলাদেশের অন্যতম একটি জনপ্রিয় অনলাইন
            লাইব্রেরী। চল্লিশ এর ও বেশি বিষয়ের উপরে তালীম অনলাইন লাইব্রেরী নিয়ে
            এসেছে প্রায় পাঁচশত এর উপরে বই শুধুমাত্র আপনাদের জন্য।
          </p>
          <p className="mb-8 text-justify text-sm">
            বইপড়ুয়া বন্ধুদের জন্য তাদের পছন্দের বইগুলো সংগ্রহ করা সহজ করতেই মূলত
            তালীম অনলাইন লাইব্রেরীর পথচলা। তালীম অনলাইন লাইব্রেরী সবসময় চেষ্টা
            করে যাচ্ছে বইপড়ুয়াদেরকে তাদের সেরা সেরা পছন্দের বইগুলো উপহার দিতে।
          </p>
          <Link href="/about">
            <button
              type="button"
              className="px-8 py-3 w-[100%] text-xs lg:text-sm lg:w-[60%] font-semibold rounded-full text-gray-100 bg-gray-600"
            >
              আমাদের সাথে যোগাযোগ করতে ক্লিক করুন
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutIqra;
