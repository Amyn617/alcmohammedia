import NavContact from "../components/NavContact.js";
import NavBar from "../components/NavBar.js";
import HeroSection from "../components/HeroSection.js";
import CategorySection from "../components/CategorySection.js";
import About from "../components/About.js";
import Pedagogy from "../components/Pedagogy.js";
import FAQs from "../components/FAQs.js";
import Location from "../components/Location.js";
import Partners from "../components/Partners.js";
import Footer from "../components/Footer.js";
import BackToTopButton from "../components/BackToTopButton.js";

const Home = () => {
  return (
    <div id="top">
      <NavContact />
      <NavBar />
      <HeroSection />
      <CategorySection />
      <About />
      <Pedagogy />
      <FAQs />
      <Location />
      <Partners />
      <Footer />
      <BackToTopButton />
    </div>
  );
};

export default Home;
