import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import { useSelector } from "react-redux";

const Mobile = ({ navLinks, open, setOpen }) => {
  const { user } = useSelector((state) => state.user);
  const mobileMenuClass = open
    ? "flex flex-col fixed right-0 top-0 w-[100%] md:w-[100%] ease-in-out duration-500 bg-gray-800 h-full z-10 !important"
    : "fixed right-[-100%]";

  return (
    <div className="lg:hidden">
      <div onClick={() => setOpen(!open)} className={mobileMenuClass}>
        <div className="bg-gray-50 p-4 h-12 lg:h-16 flex justify-between items-center">
          <div className=" font-bold">
            <Link href="/">Tanjim Online Library</Link>
          </div>
          <div onClick={() => setOpen(!open)}>
            <AiOutlineClose size={23} />
          </div>
        </div>
        <ul>
          {navLinks.map((link) => (
            <li key={link.id} className="py-3 ml-4 border-b-2">
              <Link href={link.link} className="w-full block">
                <span className="py-4 uppercase text-gray-50 text-sm tracking-wide">
                  {link.title}
                </span>
              </Link>
            </li>
          ))}
          {!user?.email && (
            <li className="py-3 ml-4 border-b-2">
              <Link href="/login" className="w-full block">
                <span className="py-4 uppercase text-gray-50 text-sm tracking-wide">
                  লগিন
                </span>
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Mobile;
