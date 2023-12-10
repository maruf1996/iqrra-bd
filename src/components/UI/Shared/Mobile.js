import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";

const Mobile = ({ navLinks, open, setOpen }) => {
  return (
    <div className="lg:hidden">
      <div
        onClick={() => setOpen(!open)}
        className={`items-stretch ${
          open
            ? "flex flex-col fixed right-0 top-0 w-[100%] md:w-[100%] ease-in-out duration-500 bg-gray-800 h-full z-10 !important"
            : "fixed right-[-100%]"
        }`}
      >
        <div className="bg-gray-50 p-4 h-12 lg:h-16 flex justify-between items-center">
          <div className="text-teal-700 font-bold text-xs">
            Talim Online Libary
          </div>
          <div onClick={() => setOpen(!open)} className="">
            <AiOutlineClose size={25} />
          </div>
        </div>
        <ul>
          {navLinks.map((link) => (
            <li key={link.id} className="py-3 ml-4 border-b-2">
              <Link
                href={link.link}
                className="py-4 uppercase text-gray-50 text-sm tracking-wide"
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Mobile;
