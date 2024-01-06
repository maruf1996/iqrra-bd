import RootLayout from "@/components/Layouts/RootLayout";

const Contact = () => {
  return (
    <div className="flex items-center justify-center py-12  text-gray-900 ">
      <section className="py-6 lg:py-12  w-[100%] lg:w-[60%]">
        <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
          <div className="py-6 md:py-0 md:px-6">
            <h1 className="lg:text-3xl text-2xl font-bold">Contact us</h1>
            <p className="pt-2">Have questions or need support?</p>
            <p className="pb-8 lg:pb-16">We’re here to help! ﻿﻿</p>
            <div className="space-y-4">
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>Dhaka, Bangladesh</span>
              </p>
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-6"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
                <span>+88 01617589004</span>
              </p>
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-6"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                <span>maruf3813@gmail.com</span>
              </p>
            </div>
          </div>
          <form className="w-full py-6 space-y-6 md:py-0 md:px-6">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-semibold lg:text-xl">
                  Name *
                </span>
              </label>
              <input
                type="text"
                name="from_name"
                className="input w-full input-bordered input-error"
                required
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-semibold lg:text-xl">
                  Email *
                </span>
              </label>
              <input
                type="email"
                name="from_email"
                className="input w-full input-bordered input-success"
                required
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-semibold lg:text-xl">
                  Message *
                </span>
              </label>
              <textarea
                className="textarea textarea-secondary"
                name="message"
                required
              ></textarea>
            </div>
            <button className="btn btn-outline btn-secondary lg:mt-8 mt-5 px-9">
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;

Contact.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
