import Layout from "../Layout";
import ContactLandingPage from "./ContactLandingPage";
import GalleryLandingPage from "./GalleryLandingPage";
import LandingPage from "./LandingPage";
import LessonsLandingPage from "./LessonsLandingPage";
import ShieldsLandingPage from "./ShieldsLandingPage";

const Home = () => {
  return (
    <Layout>
      <LandingPage />
      <ShieldsLandingPage />
      <LessonsLandingPage />
      <GalleryLandingPage />
      <ContactLandingPage />
    </Layout>
  );
};

export default Home;
