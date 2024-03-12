/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const AboutHome = () => {
  return (
    <div className="bg-cover my-16 bg-center lg:w-[90%] mx-auto h-[30rem] lg:h-[32rem] relative z-0 p-4">
      <img
        src="https://zendy.io/images/bgWhatZendy.webp"
        alt="Hero Background"
        className="absolute top-0 left-0 w-full h-full object-cover lg:rounded-lg"
      />
      <div className="absolute inset-0 flex items-center  lg:justify-end text-black">
        <div className="w-full lg:w-[60%] p-6 lg:p-8">
          <h1
            data-aos="zoom-in"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
            className="text-center lg:text-start lg:text-4xl font-bold uppercase"
          >
            মুসলিম পাঠাগার কী ও কেন??
          </h1>
          <p
            data-aos="zoom-in"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
            className="mt-8 mb-3 text-justify text-sm "
          >
            মুসলিম পাঠাগার বাংলাদেশের অন্যতম একটি জনপ্রিয় অনলাইন লাইব্রেরী।
            প্রায় ত্রিশ এর ও বেশি বিষয়ের উপরে মুসলিম পাঠাগার নিয়ে এসেছে প্রায়
            পাঁচশতের মত বই শুধুমাত্র আপনাদের জন্য।
          </p>
          <p
            data-aos="zoom-in"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
            className="mb-8 text-justify text-sm "
          >
            বইপড়ুয়া বন্ধুদের জন্য তাদের পছন্দের বইগুলো সংগ্রহ করা সহজ করতেই মূলত
            মুসলিম পাঠাগার এর পথচলা। মুসলিম পাঠাগার সবসময় চেষ্টা করে যাচ্ছে
            বইপড়ুয়াদেরকে তাদের সেরা সেরা পছন্দের বইগুলো উপহার দিতে।
          </p>
          <Link href="/category">
            <button
              data-aos="zoom-in"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
              type="button"
              className="px-12 py-3  text-xs lg:text-sm font-semibold rounded-full text-gray-100 bg-[#36373A]"
            >
              আপনার পছন্দের সেরা বই পড়ুন
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutHome;
