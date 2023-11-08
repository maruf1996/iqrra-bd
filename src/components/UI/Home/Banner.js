/* eslint-disable @next/next/no-img-element */

const Banner = () => {
  return (
    <div bac className="bg-cover bg-center h-[90vh] relative z-0">
      <img
        src="/assets/banner.jpg"
        alt="Hero Background"
        className="absolute top-0 left-0 w-full h-full object-cover contrast-50"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h1 className="text-[1.3rem] md:text-6xl text-white font-bold uppercase">
          Welcome Your Online Library
        </h1>
        <form action="" className="mt-5 w-[80%] md:w-[50%]">
          <input
            type="text"
            placeholder="Search Your Faverite books name or writer name"
            className="input text-xs md:text-[1rem]  w-full"
          />
        </form>
      </div>
    </div>
  );
};

export default Banner;
