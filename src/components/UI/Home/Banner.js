/* eslint-disable @next/next/no-img-element */

const Banner = () => {
  return (
    <div className="bg-cover bg-center h-[30rem] lg:h-[38rem] relative z-0">
      <img
        src="https://zendy.io/_next/image?url=/images/banner-2022.webp&w=1920&q=100"
        alt="Hero Background"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="absolute w-[98%] lg:w-[56%] mx-auto inset-0 flex flex-col items-center justify-center p-4 lg:p-0 text-center text-white">
        <h1
          data-aos="zoom-in"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          className="text-3xl md:text-5xl font-bold uppercase mb-4"
        >
          মুসলিম পাঠাগার
        </h1>
        <p
          data-aos="zoom-in"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          className="text-justify"
        >
          আলো যেমন জাগতিক নিয়মে অন্ধকারকে ঘুচিয়ে দিয়ে সব কিছু মূর্ত করে,
          তেমনি বই মানুষের মনের ভেতরে জ্ঞানের আলো সঞ্চার করে যাবতীয় অন্ধকারকে
          দূরীভূত করে চেতনার আলোকে সবকিছুকে উদ্ভাসিত করে দৃশ্যমান করে তোলে।
        </p>
      </div>
    </div>
  );
};

export default Banner;
