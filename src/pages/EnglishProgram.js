import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import NavContact from "../components/NavContact";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import BackToTopButton from "../components/BackToTopButton";
import EnglishPrograms from "../components/EnglishPrograms";

const EnglishProgram = () => {
  const { section } = useParams();

  useEffect(() => {
    if (section) {
      const element = document.getElementById(section);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [section]);

  return (
    <div className="flex flex-col min-h-screen">
      <NavContact />
      <NavBar />
      <main className="flex-grow">
        <EnglishPrograms />
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  );
};

export default EnglishProgram;
