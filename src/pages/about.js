/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import RootLayout from "@/components/Layouts/RootLayout";

const teams = [
  {
    id: 1,
    name: "Shahnur Shaheen",
    pation: "Advisor",
    image: "/assets/Team/shahnur.png",
  },
  {
    id: 2,
    name: "Ehsanul Haque",
    pation: "Sponser",
    image: "/assets/Team/rasel.png",
  },
  {
    id: 3,
    name: "Hafizur Rahman",
    pation: "Sponser",
    image: "/assets/Team/hafiz.png",
  },
  {
    id: 4,
    name: "Eshak Al Foridy",
    pation: "Sponser",
    image: "/assets/Team/eshak.png",
  },
];

const About = () => {
  return (
    <div>
      <section className="py-6">
        <div className=" flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
          <h1
            data-aos="zoom-in"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
            className="text-4xl font-bold leadi text-center sm:text-5xl"
          >
            Meet Our Team
          </h1>
          <div
            data-aos="zoom-in"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
            className="flex flex-col justify-center text-center pt-4"
          >
            <img
              alt=""
              className="self-center flex-shrink-0 w-36 h-36 mb-4 bg-center bg-cover rounded-full bg-gray-600"
              src="/assets/Team/maruf.png"
            />
            <p className="text-xl font-semibold leadi">Mariful Islam</p>
            <p className="">Founder</p>
          </div>
          <div className="w-[98%] lg:w-[80%] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
            {teams.map((team) => (
              <div
                data-aos="zoom-in"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000"
                key={team?.id}
                className="flex flex-col justify-center mt-4 text-center"
              >
                <img
                  alt=""
                  className="self-center flex-shrink-0 w-36 h-36 mb-4 bg-center bg-cover rounded-full bg-gray-600"
                  src={team?.image}
                />
                <p className="text-xl font-semibold leadi">{team?.name}</p>
                <p className="">{team?.pation}</p>
              </div>
            ))}
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
