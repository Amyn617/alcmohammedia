import React, { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

const About = () => {
  const { t, language } = useContext(LanguageContext);
  return (
    <section
      dir={`${language === "ar" ? "rtl" : "ltr"}`}
      className="py-10 bg-white"
      aria-label="about"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 max-sm:gap-7 gap-10 lg:gap-20 md:py-10 px-10">
        <div className="img-holder rounded-lg overflow-hidden">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/alc2.jpg`}
            width="520"
            height="370"
            loading="lazy"
            alt={t("aboutBannerAlt")}
            className="w-full h-full object-cover hover:scale-110 transition-all duration-500"
          />
        </div>

        <div className="about-content">
          <p className="text-md text-red-500 mb-4 uppercase">{t("aboutUs")}</p>

          <h2 className="text-gray-500 text-3xl lg:text-5xl  font-semibold mb-6">
            {t("welcomeTo")}{" "}
            <span className="text-sky-500 leading-tight">
              {t("alcMohammedia")}
            </span>
          </h2>

          <p className="text-gray-500 mb-6 text-justify">
            {t("aboutDescription")}
          </p>

          <ul className="list-disc">
            <li className="flex items-center gap-3 mb-4">
              <i className="fa-solid fa-check text-red-500 text-xl"></i>
              <span className="text-gray-800">
                {t("excellenceInEducation")}
              </span>
            </li>
            <li className="flex items-center gap-3 mb-4">
              <i className="fa-solid fa-check text-red-500 text-xl"></i>
              <span className="text-gray-800">{t("outstandingTeachers")}</span>
            </li>
            <li className="flex items-center gap-3 mb-4">
              <i className="fa-solid fa-check text-red-500 text-xl"></i>
              <span className="text-gray-800">{t("culturalEnrichment")}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
