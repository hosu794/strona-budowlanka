import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";

export interface ILayout {
  children: React.ReactNode;
}

const PostsLayout = ({ children }: ILayout) => (
  <div className="h-screen overflow-x-hidden">
    <Navbar />
    {children}
    <Footer />
  </div>
);

export default PostsLayout;
