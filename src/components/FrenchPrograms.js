import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { LanguageContext } from "./LanguageContext";

const FrenchPrograms = () => {
  const { t, language } = useContext(LanguageContext);
  const location = useLocation();

  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const scrollToElement = () => {
      if (location.hash) {
        const element = document.querySelector(location.hash);
        if (element) {
          const viewportHeight = window.innerHeight;

          const elementRect = element.getBoundingClientRect();
          const offset = viewportHeight / 2;
          const scrollPosition =
            window.scrollY + elementRect.top - offset + elementRect.height / 2;
          window.scrollTo({ top: scrollPosition, behavior: "smooth" });
        }
      }
    };

    scrollToElement();

    const handleHashChange = () => {
      scrollToElement();
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [location]);

  return (
    <div
      dir={`${language === "ar" ? "rtl" : "ltr"}`}
      className="bg-gray-100 py-12"
    >
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-sky-500">
          {t("french_program")}
        </h1>
        <p className="text-base md:text-lg text-gray-700 mt-2">
          {t("exploreWorldOfFrench")}
        </p>
      </div>

      <section id="general-french">
        <div
          className="relative bg-cover bg-center py-24 md:py-32 my-16 shadow-lg"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/fr_1.jpg)`,
            backgroundAttachment: "fixed",
          }}
          aria-label="General French"
        >
          <div className="absolute inset-0 bg-black opacity-50" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-4 relative z-10">
            {t("general_french")}
          </h2>
        </div>
        <p className="text-black text-base md:text-lg mb-6 max-w-4xl mx-auto px-10 text-justify">
        {t("general_french_desc")}
        </p>
      </section>

      <section id="professional-french">
        <div
          className="relative bg-cover bg-center py-24 md:py-32 my-16 shadow-lg"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/fr_2.jpg)`,
            backgroundAttachment: "fixed",
          }}
          aria-label="Professional French"
        >
          <div className="absolute inset-0 bg-black opacity-50" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-4 relative z-10">
            {t("professional_french")}
          </h2>
        </div>
        <p className="text-black text-base md:text-lg mb-6 max-w-4xl mx-auto px-10 text-justify">
        {t("professional_french_desc")}
        </p>
      </section>

      <section id="communication-french">
        <div
          className="relative bg-cover bg-center py-24 md:py-32 my-16 shadow-lg"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/fr_3.jpg)`,
            backgroundAttachment: "fixed",
          }}
          aria-label="Communication: Oral/Written"
        >
          <div className="absolute inset-0 bg-black opacity-50" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-4 relative z-10">
            {t("communication_french")}
          </h2>
        </div>
        <p className="text-black text-base md:text-lg mb-6 max-w-4xl mx-auto px-10 text-justify">
        {t("communication_french_desc")}
        </p>
      </section>

      <section id="exam-preparation-french">
        <div
          className="relative bg-cover bg-center py-24 md:py-32 my-16 shadow-lg"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/fr_4.jpg)`,
            backgroundAttachment: "fixed",
          }}
          aria-label="Exam Preparation (DELF B1 - B2, DALF, and TCF)"
        >
          <div className="absolute inset-0 bg-black opacity-50" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-4 relative z-10">
            {t("exam_preparation_french")}
          </h2>
        </div>
        <p className="text-black text-base md:text-lg mb-6 max-w-4xl mx-auto px-10 text-justify">
        {t("exam_preparation_french_desc")}
        </p>
      </section>

      <section id="regional-french">
        <div
          className="relative bg-cover bg-center py-24 md:py-32 my-16 shadow-lg"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/fr_5.jpg)`,
            backgroundAttachment: "fixed",
          }}
          aria-label="Regional French (6th Year High School)"
        >
          <div className="absolute inset-0 bg-black opacity-50" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-4 relative z-10">
            {t("regional_french")}
          </h2>
        </div>
        <p className="text-black text-base md:text-lg mb-6 max-w-4xl mx-auto px-10 text-justify">
        {t("regional_french_desc")}
        </p>
      </section>

      <section id="french-middle-school">
        <div
          className="relative bg-cover bg-center py-24 md:py-32 my-16 shadow-lg"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/fr_6.jpg)`,
            backgroundAttachment: "fixed",
          }}
          aria-label="French (9th Year Middle School)"
        >
          <div className="absolute inset-0 bg-black opacity-50" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-4 relative z-10">
            {t("french_middle_school")}
          </h2>
        </div>
        <p className="text-black text-base md:text-lg mb-6 max-w-4xl mx-auto px-10 text-justify">
        {t("french_middle_school_desc")}
        </p>
      </section>
    </div>
  );
};

export default FrenchPrograms;
