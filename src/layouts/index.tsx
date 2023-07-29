import Footer from "./Footer";
import Navbar from "./Navbar";

interface IProps {
  children: React.ReactNode; // Use React.ReactNode type for children prop
}

const Layout = ({ children }: IProps) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
