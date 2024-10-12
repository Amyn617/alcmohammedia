import NavContact from "../components/NavContact.js";
import NavBar from "../components/NavBar.js";
import Footer from "../components/Footer.js";
import BackToTopButton from "../components/BackToTopButton.js";
import EnglishPrograms from "../components/EnglishPrograms.js";

const EnglishProgram = () => {
  return (
    <div id="top">
        <NavContact />
        <NavBar />
        <EnglishPrograms/>
        <Footer />
        <BackToTopButton />
      </div>
  );
};

export default EnglishProgram;