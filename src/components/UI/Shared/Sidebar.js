import { logoutUser } from "@/redux/features/userSlice";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";

const links = [
  {
    id: "1",
    link: "/dashboard",
    title: "Category Management",
  },
  {
    id: "2",
    link: "/dashboard/subcategory-management",
    title: "Sub Category Management",
  },
  { id: "3", link: "/dashboard/book-management", title: "Book Management" },
  {
    id: "4",
    link: "/dashboard/add-admin",
    title: "Add Admin",
  },
];

const Sidebar = ({ dashboardOpen, setDashboardOpen }) => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <aside
      onClick={() => setDashboardOpen(!dashboardOpen)}
      className={`items-stretch ${
        dashboardOpen
          ? "flex flex-col fixed left-0 top-0 w-[100%] md:w-[100%] lg:w-[30%] ease-in-out duration-500 bg-gray-800 h-full z-10 !important"
          : "fixed left-[-100%]"
      }`}
    >
      <div className="bg-gray-50 p-4 h-12 lg:h-16 flex justify-between items-center">
        <div className=" font-bold">
          <Link href="/">Tanjim Online Library</Link>
        </div>
        <div onClick={() => setDashboardOpen(!dashboardOpen)} className="">
          <AiOutlineClose size={25} />
        </div>
      </div>
      <ul className="">
        {links.map((link) => (
          <li key={link.id} className="py-3 ml-4 border-b-2">
            <Link
              className="w-full block uppercase text-gray-50 text-sm tracking-wide"
              href={link.link}
            >
              {link.title}
            </Link>
          </li>
        ))}
        <button
          onClick={handleLogout}
          className=" ml-4 py-3 w-full  border-b-2 text-start text-gray-50"
        >
          Log out
        </button>
      </ul>
    </aside>
  );
};

export default Sidebar;
