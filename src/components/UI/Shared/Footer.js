import Link from "next/link";

const Footer = () => {
  return (
    <footer className="px-4 divide-y bg-[#36373A] text-gray-100">
      <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
        <div className="lg:w-1/3">
          <Link
            href="/"
            className="flex justify-center space-x-3 lg:justify-start"
          >
            <span className="self-center font-bold uppercase">
              মুসলিম পাঠাগার
            </span>
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
          {[
            {
              title: "ফিচার",
              links: [
                { title: "সমস্ত বই", link: "/category" },
                { title: "আমাদের সম্পর্কে", link: "/about" },
                { title: "আমাদের সাথে যোগাযোগ", link: "/contact" },
              ],
            },
            {
              title: "কোম্পানি",
              links: [
                { title: "ওয়েবসাইট", link: "/" },
                {
                  title: "জিমেইল",
                  link: "https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSBptMjhzzCKDwrxpCBLqgHGHsBPlqFdvQXBdVLfnzBCSwzBBSPjhRjsWTkJdVWQhjdGNLCT",
                },
              ],
            },
            {
              title: "ডেভেলপার",
              links: [
                {
                  title: "ফেসবুক",
                  link: "https://www.facebook.com/profile.php?id=100012133538164",
                },
                {
                  title: "লিংকড-ইন",
                  link: "https://www.linkedin.com/in/maruf1122",
                },
                {
                  title: "ওয়েবসাইট",
                  link: "https://mariful-islam.netlify.app/",
                },
              ],
            },
            {
              title: "সোশ্যাল মিডিয়া",
              links: [
                { title: "Facebook", link: "#" },
                { title: "Twitter", link: "#" },
                { title: "Instagram", link: "#" },
              ],
            },
          ].map((section, index) => (
            <div key={index} className="space-y-3">
              <h3 className="uppercase font-bold text-[1.1rem]">
                {section.title}
              </h3>
              <ul className="space-y-1">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={link?.link}
                    >
                      {link.title || link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="py-6 text-center dark:text-gray-400">
        © 2023 Muslim Pathagar. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
