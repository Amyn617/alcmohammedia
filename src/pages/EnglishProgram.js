import React from "react";
import NavContact from "../components/NavContact";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import BackToTopButton from "../components/BackToTopButton";
import EnglishPrograms from "../components/EnglishPrograms";

const EnglishProgram = () => {
  return (
    <div id="top" className="flex flex-col min-h-screen">
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
