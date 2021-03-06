import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";

export interface ILayout {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayout) => (
  <div className="h-screen overflow-x-hidden bg-image-king">
    <Navbar />
    {children}
    <Footer />
  </div>
);

export default Layout;
