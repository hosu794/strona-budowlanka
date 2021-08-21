import Footer from "./Footer";
import Navbar from "./Navbar/Navbar";

export interface ILayout {
  children: React.ReactNode;
}

const CategoryLayoutChildren = ({ children }: ILayout) => (
  <div className="h-screen overflow-x-hidden bg-image-king">
    <Navbar />
    {children}
    <Footer />
  </div>
);

export default CategoryLayoutChildren;
