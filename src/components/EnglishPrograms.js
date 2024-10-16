import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { LanguageContext } from "./LanguageContext";

const EnglishPrograms = () => {
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
          {t("englishPrograms")}
        </h1>
        <p className="text-base md:text-lg text-gray-700 mt-2">
          {t("exploreWorldOfEnglish")}
        </p>
      </div>
      <section id="general-english">
        <div
          className="relative bg-cover bg-center py-24 md:py-32 my-16 shadow-lg"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/en_1.jpg)`,
            backgroundAttachment: "fixed",
          }}
          aria-label={t("general_english")}
        >
          <div className="absolute inset-0 bg-black opacity-50" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-4 relative z-10">
            {t("general_english")}
          </h2>
        </div>
        <p className="text-black text-base md:text-lg mb-6 max-w-4xl mx-auto px-10 text-justify">
          {t("generalEnglishDescription")}
        </p>
      </section>

      <section id="business-english">
        <div
          className="relative bg-cover bg-center py-24 md:py-32 my-16 shadow-lg"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/en_2.jpg)`,
            backgroundAttachment: "fixed",
          }}
          aria-label={t("business_english")}
        >
          <div className="absolute inset-0 bg-black opacity-50" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-4 relative z-10">
            {t("business_english")}
          </h2>
        </div>
        <p className="text-black text-base md:text-lg mb-6 max-w-4xl mx-auto px-10 text-justify">
          {t("businessEnglishDescription")}
        </p>
      </section>

      <section id="conversational-english">
        <div
          className="relative bg-cover bg-center py-24 md:py-32 my-16 shadow-lg"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/en_3.jpg)`,
            backgroundAttachment: "fixed",
          }}
          aria-label={t("conversational_english")}
        >
          <div className="absolute inset-0 bg-black opacity-50" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-4 relative z-10">
            {t("conversational_english")}
          </h2>
        </div>
        <p className="text-black text-base md:text-lg mb-6 max-w-4xl mx-auto px-10 text-justify">
          {t("conversationalEnglishDescription")}
        </p>
      </section>

      <section id="skill-based-classes">
        <div
          className="relative bg-cover bg-center py-24 md:py-32 my-16 shadow-lg"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/en_4.jpg)`,
            backgroundAttachment: "fixed",
          }}
          aria-label={t("skill_based_classes")}
        >
          <div className="absolute inset-0 bg-black opacity-50" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-4 relative z-10">
            {t("skill_based_classes")}
          </h2>
        </div>
        <p className="text-black text-base md:text-lg mb-6 max-w-4xl mx-auto px-10 text-justify">
          {t("skillBasedClassesDescription")}
        </p>
      </section>

      <section id="academic-english">
        <div
          className="relative bg-cover bg-center py-24 md:py-32 my-16 shadow-lg"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/en_5.jpg)`,
            backgroundAttachment: "fixed",
          }}
          aria-label={t("academic_english")}
        >
          <div className="absolute inset-0 bg-black opacity-50" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-4 relative z-10">
            {t("academic_english")}
          </h2>
        </div>
        <p className="text-black text-base md:text-lg mb-6 max-w-4xl mx-auto px-10 text-justify">
          {t("academicEnglishResearchMethodologyDescription")}
        </p>

        <div className="m-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h4 className="text-2xl font-semibold text-sky-500 mb-4">
                {t("academicWritingSkills")}
              </h4>
              <ul className="text-gray-700 list-disc list-inside space-y-2">
                <li>{t("academicWritingSkill1")}</li>
                <li>{t("academicWritingSkill2")}</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h4 className="text-2xl font-semibold text-sky-500 mb-4">
                {t("researchMethodology")}
              </h4>
              <ul className="text-gray-700 list-disc list-inside space-y-2">
                <li>{t("researchMethodology1")}</li>
                <li>{t("researchMethodology2")}</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h4 className="text-2xl font-semibold text-sky-500 mb-4">
                {t("basicStatistics")}
              </h4>
              <ul className="text-gray-700 list-disc list-inside space-y-2">
                <li>{t("basicStatistics1")}</li>
                <li>{t("basicStatistics2")}</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h4 className="text-2xl font-semibold text-sky-500 mb-4">
                {t("structureAndDuration")}
              </h4>
              <p className="text-gray-700 leading-relaxed">
                {t("structureAndDurationDescription")}
              </p>
            </div>
          </div>
        </div>
        <div className="mt-16 text-center">
          <a
            href="https://docs.google.com/document/d/1vAmSsB_kaJ3fIPqA5lpv2ulIc0fAEltj/edit"
            className="inline-block bg-sky-600 text-white px-6 py-3 rounded-lg font-medium text-lg hover:bg-sky-700 transition duration-300"
          >
            {t("learn_more")}
          </a>
        </div>
      </section>

      <section id="exam-preparation">
        <div
          className="relative bg-cover bg-center py-24 md:py-32 my-16 shadow-lg"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/en_6.jpg)`,
            backgroundAttachment: "fixed",
          }}
          aria-label="Exam Preparation"
        >
          <div className="absolute inset-0 bg-black opacity-50" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-4 relative z-10">
            {t("exam_preparation")}
          </h2>
        </div>
        <p className="text-black text-base md:text-lg mb-6 max-w-4xl mx-auto px-10 text-justify">
          {t("exam_preparation_description")}
        </p>
      </section>

      <section id="baccalaureat-program">
        <div
          className="relative bg-cover bg-center py-24 md:py-32 my-16 shadow-lg"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/en_7.jpg)`,
            backgroundAttachment: "fixed",
          }}
          aria-label="Baccalaureat Program"
        >
          <div className="absolute inset-0 bg-black opacity-50" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-4 relative z-10">
            {t("baccalaureat_program")}
          </h2>
        </div>
        <p className="text-black text-base md:text-lg mb-6 max-w-4xl mx-auto px-10 text-justify">
          {t("baccalaureat_program_description")}
        </p>
      </section>

      <section id="private-courses">
        <div
          className="relative bg-cover bg-center py-24 md:py-32 my-16 shadow-lg"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/en_8.jpg)`,
            backgroundAttachment: "fixed",
          }}
          aria-label="Private Courses"
        >
          <div className="absolute inset-0 bg-black opacity-50" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-4 relative z-10">
            {t("private_courses")}
          </h2>
        </div>
        <p className="text-black text-base md:text-lg mb-6 max-w-4xl mx-auto px-10 text-justify">
          {t("private_courses_description")}
        </p>
      </section>
    </div>
  );
};

export default EnglishPrograms;
