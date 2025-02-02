import NavContact from "../components/NavContact";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import Instagram from "../components/Instagram";
import CategorySection from "../components/CategorySection";
import About from "../components/About";
import Pedagogy from "../components/Pedagogy";
import FAQs from "../components/FAQs";
import Location from "../components/Location";
import Partners from "../components/Partners";
import Footer from "../components/Footer";
import BackToTopButton from "../components/BackToTopButton";
import ScrollAnimation from "../components/ScrollAnimation";

const Home = () => {
  return (
    <div id="top">
      <NavContact />
      <NavBar />
      <HeroSection />
      <ScrollAnimation>
        <CategorySection />
      </ScrollAnimation>
      <ScrollAnimation>
        <Instagram />
      </ScrollAnimation>
      <ScrollAnimation>
        <About />
      </ScrollAnimation>
      <ScrollAnimation>
        <Pedagogy />
      </ScrollAnimation>
      <ScrollAnimation>
        <FAQs />
      </ScrollAnimation>
      <ScrollAnimation>
        <Location />
      </ScrollAnimation>
      <ScrollAnimation>
        <Partners />
      </ScrollAnimation>
      <Footer />
      <BackToTopButton />
    </div>
  );
};

export default Home;
