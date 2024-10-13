import NavContact from "../components/NavContact";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import CategorySection from "../components/CategorySection";
import About from "../components/About";
import Pedagogy from "../components/Pedagogy";
import FAQs from "../components/FAQs";
import Location from "../components/Location";
import Partners from "../components/Partners";
import Footer from "../components/Footer";
import BackToTopButton from "../components/BackToTopButton";

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
