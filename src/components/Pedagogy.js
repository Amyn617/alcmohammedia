import React, { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

const Pedagogy = () => {
  const { t, language } = useContext(LanguageContext);
  return (
    <section
      dir={`${language === "ar" ? "rtl" : "ltr"}`}
      className="lg:py-10 bg-white"
      aria-label="pedagogy"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-5 lg:gap-20 p-10 lg:p-10">
        <div className="about-content">
          <p className="text-md text-red-500 mb-4 uppercase">{t("pedagogy")}</p>

          <h2 className="text-gray-500 text-3xl lg:text-5xl font-semibold mb-6">
            <span className="text-sky-500">{t("our")}</span>{" "}
            {t("pedagogyTitle")}
          </h2>

          <p className="text-gray-500 mb-6 text-justify">
            {t("pedagogyDescription")}
          </p>
        </div>

        <div className="rounded-lg overflow-hidden">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/alc.jpeg`}
            width="520"
            height="270"
            loading="lazy"
            alt={t("pedagogyBannerAlt")}
            className="w-full h-full object-cover hover:scale-110 transition-all duration-500"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 lg:gap-20 px-10 md:py-10">
        <div className="rounded-lg overflow-hidden">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/alc3.jpg`}
            width="520"
            height="470"
            loading="lazy"
            alt={t("pblBannerAlt")}
            className="w-full h-full object-cover hover:scale-110 transition-all duration-500"
          />
        </div>
        <div>
          <h2 className="text-gray-500 text-3xl lg:text-5xl font-semibold mb-6">
            {t("projectBasedLearning")}{" "}
            <span className="text-sky-500 leading-tight">{t("(PBL)")}</span>
          </h2>

          <p className="text-gray-500 mb-6 text-justify">
            {t("pblDescription")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pedagogy;
