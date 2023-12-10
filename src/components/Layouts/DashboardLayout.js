import Sidebar from "../UI/Shared/Sidebar";
import RootLayout from "./RootLayout";

const DashboardLayout = ({ children }) => {
  return (
    <>
      <RootLayout>
        <div className="lg:min-h-screen lg:flex">
          <Sidebar></Sidebar>
          <main className="w-full">{children}</main>
        </div>
      </RootLayout>
    </>
  );
};

export default DashboardLayout;
