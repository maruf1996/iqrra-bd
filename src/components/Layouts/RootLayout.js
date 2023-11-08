import Footer from "../UI/Shared/Footer";
import Header from "../UI/Shared/Header";

const RootLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="">{children}</div>
      <Footer />
    </>
  );
};

export default RootLayout;
