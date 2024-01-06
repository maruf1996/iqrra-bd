/* eslint-disable @next/next/no-img-element */

const Banner = () => {
  return (
    <div className="bg-cover bg-center h-[30rem] lg:h-[98vh] relative z-0">
      <img
        src="/assets/banner.jpg"
        alt="Hero Background"
        className="absolute top-0 left-0 w-full h-full object-cover contrast-50"
      />
      <div
        data-aos="zoom-in"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
        className="absolute w-[98%] lg:w-[55%] mx-auto inset-0 flex flex-col items-center justify-center p-4 lg:p-0 text-center text-white"
      >
        <h1 className="text-4xl md:text-5xl font-bold uppercase">
          তানযীম অনলাইন লাইব্রেরী
        </h1>
        <p className="text-justify mt-2">
          আলো যেমন জাগতিক নিয়মে অন্ধকারকে ঘুচিয়ে দিয়ে সব কিছু মূর্ত করে,
          তেমনি বই মানুষের মনের ভেতরে জ্ঞানের আলো সঞ্চার করে যাবতীয় অন্ধকারকে
          দূরীভূত করে চেতনার আলোকে সবকিছুকে উদ্ভাসিত করে দৃশ্যমান করে তোলে।
        </p>
      </div>
    </div>
  );
};

export default Banner;
