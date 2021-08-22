import Layout from "../Layout";
import PostsLayout from "../PostsLayout";
import ContactLandingPage from "./ContactLandingPage";
import GalleryLandingPage from "./GalleryLandingPage";
import LandingPage from "./LandingPage";
import LessonsLandingPage from "./LessonsLandingPage";
import ShieldsLandingPage from "./ShieldsLandingPage";

const Home = () => {
  return (
    <PostsLayout>
      <LandingPage />
      <ShieldsLandingPage />
      <LessonsLandingPage />
      <GalleryLandingPage />
      <ContactLandingPage />
    </PostsLayout>
  );
};

export default Home;
