import NavContact from "../components/NavContact";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import BackToTopButton from "../components/BackToTopButton";
import FrenchPrograms from "../components/FrenchPrograms";

const FrenchProgram = () => {
  return (
    <div id="top" className="flex flex-col min-h-screen">
      <NavContact />
      <NavBar />
      <main className="flex-grow">
        <FrenchPrograms />
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  );
};

export default FrenchProgram;
