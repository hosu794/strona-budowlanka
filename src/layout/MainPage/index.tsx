import Layout from "../Layout"
import ContactLandingPage from "./ContactLandingPage"
import GalleryLandingPage from "./GalleryLandingPage"
import LandingPage from "./LandingPage"
import LessonsLandingPage from "./LessonsLandingPage"

 const Home = () => {
  return (
   <Layout>
      <LandingPage />
      <LessonsLandingPage />
      <GalleryLandingPage />
      <ContactLandingPage />
   </Layout>
  )
}


export default Home