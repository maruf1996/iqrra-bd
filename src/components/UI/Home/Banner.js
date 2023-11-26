/* eslint-disable @next/next/no-img-element */

const Banner = () => {
  return (
    <div bac className="bg-cover bg-center h-[22rem] lg:h-[98vh] relative z-0">
      <img
        src="/assets/banner.jpg"
        alt="Hero Background"
        className="absolute top-0 left-0 w-full h-full object-cover contrast-50"
      />
      <div className="absolute w-[98%] lg:w-[55%] mx-auto inset-0 flex flex-col items-center justify-center p-4 lg:p-0">
        <h1 className="text-[1.3rem] md:text-4xl text-white font-bold uppercase">
          তালীম অনলাইন লাইব্রেরী
        </h1>
        <p className="text-white text-justify mt-2">
          আলো যেমন জাগতিক নিয়মে অন্ধকারকে ঘুচিয়ে দিয়ে সব কিছু মূর্ত করে ,
          তেমনি বই মানুষের মনের ভেতরে জ্ঞানের আলো সঞ্চার করে যাবতীয় অন্ধকারকে
          দূরীভূত করে চেতনার আলোকে সবকিছুকে উদ্ভাসিত করে দৃশ্যমান করে তোলে ।
        </p>
      </div>
    </div>
  );
};

export default Banner;
