import Link from "next/link";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { CgMenuGridR } from "react-icons/cg";
import { useSelector } from "react-redux";
import Mobile from "./Mobile";
import Sidebar from "./Sidebar";

const navLinks = [
  { id: 1, title: "হোম", link: "/" },
  { id: 2, title: "বই সমূহ", link: "/category" },
  { id: 3, title: "আমাদের সম্পর্কে", link: "/about" },
  { id: 4, title: "যোগাযোগ", link: "/contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [dashboarOpen, dashboarSetOpen] = useState(false);
  const { user } = useSelector((state) => state.user);

  return (
    <header className="">
      <div className=" bg-base-100">
        <div className="p-2 container flex flex-row-reverse lg:flex-row justify-between items-center h-14 lg:h-16 mx-auto">
          <Link
            href="/"
            className="hidden lg:block text-teal-700 text-xs font-bold"
          >
            Talim Online Libary
          </Link>
          <div className="hidden lg:flex">
            <ul className="items-stretch lg:flex space-x-3">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    href={link.link}
                    className="flex items-center uppercase px-4 text-sm tracking-wide"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="">
            {!user?.email ? (
              <Link
                href="/login"
                className=" lg:btn btn-xs lg:px-6 rounded-md lg:bg-gray-50 hover:border-none"
              >
                লগিন
              </Link>
            ) : (
              <div onClick={() => dashboarSetOpen(!dashboarOpen)} className="">
                <CgMenuGridR size={25} />
              </div>
            )}
          </div>
          <div className="lg:hidden text-xs text-teal-700 font-bold">
            Talim Online Libary
          </div>
          <div className="lg:hidden">
            <div onClick={() => setOpen(!open)} className="block lg:hidden">
              {open ? (
                <AiOutlineClose size={23} />
              ) : (
                <AiOutlineMenu size={23} />
              )}
            </div>
          </div>
        </div>
        {/* mobile ul  */}
        <Mobile navLinks={navLinks} open={open} setOpen={setOpen}></Mobile>
        <Sidebar
          dashboarOpen={dashboarOpen}
          dashboarSetOpen={dashboarSetOpen}
        ></Sidebar>
      </div>
    </header>
  );
};

export default Header;
