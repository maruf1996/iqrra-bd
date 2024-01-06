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
  const [dashboardOpen, setDashboardOpen] = useState(false);
  const { user } = useSelector((state) => state.user);

  return (
    <header className="shadow-xl bg-gray-100">
      <div className="">
        <div
          className={`p-2 container flex flex-row lg:flex-row justify-between items-center h-12 lg:h-16 mx-auto ${
            user?.email && "flex-row-reverse"
          }`}
        >
          <Link href="/" className="hidden lg:block font-bold">
            Tanjim Online Library
          </Link>
          <div className="hidden lg:flex">
            <ul className="items-stretch lg:flex space-x-3">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    href={link.link}
                    className="flex w-full items-center uppercase px-4 text-sm tracking-wide font-bold"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
              {!user?.email && (
                <li>
                  <Link
                    href="/login"
                    className="flex w-full items-center uppercase px-4 text-sm tracking-wide font-bold"
                  >
                    লগিন
                  </Link>
                </li>
              )}
            </ul>
          </div>

          {user?.email && (
            <div onClick={() => setDashboardOpen(!dashboardOpen)} className="">
              <CgMenuGridR size={23} />
            </div>
          )}
          <div className="lg:hidden font-bold">Tanjim Online Library</div>
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
          dashboardOpen={dashboardOpen}
          setDashboardOpen={setDashboardOpen}
        ></Sidebar>
      </div>
    </header>
  );
};

export default Header;
