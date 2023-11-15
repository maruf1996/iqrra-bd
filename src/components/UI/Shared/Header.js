import Link from "next/link";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const links = [
  { id: 1, title: "হোম", link: "/" },
  { id: 1, title: "বই সমূহ", link: "/category" },
  { id: 1, title: "লেখক", link: "/" },
  { id: 1, title: "আমাদের সম্পর্কে", link: "/about" },
  { id: 1, title: "যোগাযোগ", link: "/contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="p-3 border-b-2">
      <div className="container flex justify-between items-center h-10 mx-auto">
        <Link
          rel="noopener noreferrer"
          href="/"
          aria-label="Back to homepage"
          className="flex items-center p-2 text-4xl font-bold"
        >
          IQRA BD
        </Link>
        <ul className="items-stretch hidden space-x-3 md:flex">
          {links?.map((link) => (
            <li key={link?.id} className="flex">
              <Link
                rel="noopener noreferrer"
                href={link?.link}
                className="flex text-1xl items-center px-4 -mb-1 focus:border-b-2"
              >
                {link?.title}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/login"
          className="btn lg:flex lg:items-center btn-sm hidden bg-white px-6 py-0 font-semibold border border-black rounded"
        >
          Log In
        </Link>
        {/* mobile  */}
        <div className="lg:hidden">
          <div onClick={() => setOpen(!open)} className="block lg:hidden">
            {open ? <AiOutlineClose size={22} /> : <AiOutlineMenu size={22} />}
          </div>
          <ul
            onClick={() => setOpen(!open)}
            className={`items-stretch ${
              open
                ? "flex flex-col fixed left-0 top-0 w-[70%] md:w-[80%] ease-in-out duration-500 bg-teal-500 h-full z-10 !important"
                : "fixed left-[-100%]"
            }`}
          >
            {links?.map((link) => (
              <li key={link.id} className="py-2  border-b-2">
                <Link
                  href={link.link}
                  className="p-4 text-white uppercase text-sm tracking-wide"
                >
                  {link.title}
                </Link>
              </li>
            ))}
            <Link
              href="/login"
              className=" lg:hidden p-4 uppercase text-sm tracking-wide py-2 border-b-2 text-white"
            >
              Log in
            </Link>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
