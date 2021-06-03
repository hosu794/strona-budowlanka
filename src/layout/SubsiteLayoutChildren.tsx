import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";

import SubsiteNavbar from "./Navbar/SubsiteNavbar";

export interface ILayout {
  children: React.ReactNode;
}

const SubsiteLayoutChildren = ({ children }: ILayout) => (
  <div className="h-screen overflow-x-hidden">
    <SubsiteNavbar />
    {children}
    <Footer />
  </div>
);

export default SubsiteLayoutChildren;
