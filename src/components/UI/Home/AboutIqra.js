/* eslint-disable @next/next/no-img-element */
const AboutIqra = () => {
  return (
    <div
      bac
      className="bg-cover my-16 bg-center lg:w-[80%] mx-auto h-[600px] lg:h-[70vh] relative z-0"
    >
      <img
        src="/assets/abotbg.webp"
        alt="Hero Background"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-90 rounded-lg"
      />
      <div className="absolute inset-0 flex items-end lg:items-center lg:justify-end">
        <div className="w-[100%] lg:w-[60%] p-6 lg:p-12">
          <h1 className="text-[1.3rem] text-center lg:text-start lg:text-4xl font-bold uppercase">
            What can you find on IQRA BD?
          </h1>
          <p className="mt-8 mb-3 text-[1.2rem] text-justify">
            Zendy is an online library making academic research affordable and
            easy to discover.
          </p>
          <p className="mb-8 text-[1.2rem] text-justify">
            Enrich your research and explore millions of quality academic
            journals, articles, e-books and more all on one seamless platform.
            Trusted by students, researchers, and professionals worldwide, we’re
            unlocking the true potential of your passion by empowering equal
            access to academic content.
          </p>
          <button
            type="button"
            className="px-8 py-3 w-[100%] lg:w-[70%] font-semibold rounded-full text-gray-100 bg-gray-600"
          >
            Writing Your Feedback
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutIqra;
