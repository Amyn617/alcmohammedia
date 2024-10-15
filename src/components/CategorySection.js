import React, { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

const CategorySection = () => {
  const { t, language } = useContext(LanguageContext);
  return (
    <section
      dir={`${language === "ar" ? "rtl" : "ltr"}`}
      className="p-10 lg:p-20 bg-white"
      aria-label="category"
    >
      <div className="text-center max-w-7xl mx-auto px-4">
        <p className="text-md text-red-500 mb-4 uppercase">{t("highlights")}</p>

        <h2 className="text-3xl lg:text-5xl font-semibold mb-6 text-gray-500">
          {t("whatWeOffer")}
          <span className="text-sky-500"> {t("inTheCenter")}</span>
        </h2>

        <p className="text-gray-500 mb-10">{t("discoverBenefits")}</p>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <li className="flex flex-col h-full">
            <div className="p-8 lg:px-8 lg:py-16 text-center rounded-lg flex-grow bg-sky-50">
              <div className="bg-sky-100 w-20 h-20 mx-auto flex items-center justify-center rounded-full mb-6">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/cat-1.svg`}
                  width="40"
                  height="40"
                  loading="lazy"
                  alt={t("qualityEnglishCoursesAlt")}
                />
              </div>

              <h3 className="text-xl font-semibold mb-5">
                <div className="text-sky-500">{t("qualityEnglishCourses")}</div>
              </h3>

              <p className="text-gray-600">
                {t("qualityEnglishCoursesDescription")}
              </p>
            </div>
          </li>

          <li className="flex flex-col h-full">
            <div className="p-8 lg:px-8 lg:py-16 text-center rounded-lg flex-grow bg-red-50">
              <div className="bg-red-100 w-20 h-20 mx-auto flex items-center justify-center rounded-full mb-6">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/cat-2.svg`}
                  width="40"
                  height="40"
                  loading="lazy"
                  alt={t("professionalDevelopmentAlt")}
                />
              </div>

              <h3 className="text-xl font-semibold mb-5">
                <div className="text-red-600">
                  {t("professionalDevelopment")}
                </div>
              </h3>

              <p className="text-gray-600">
                {t("professionalDevelopmentDescription")}
              </p>
            </div>
          </li>

          <li className="flex flex-col h-full">
            <div className="p-8 lg:px-8 lg:py-16 text-center rounded-lg flex-grow bg-indigo-50">
              <div className="bg-indigo-100 w-20 h-20 mx-auto flex items-center justify-center rounded-full mb-6">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/cat-3.svg`}
                  width="40"
                  height="40"
                  loading="lazy"
                  alt={t("culturalExchangeAlt")}
                />
              </div>

              <h3 className="text-xl font-semibold mb-5">
                <div className="text-indigo-600">{t("culturalExchange")}</div>
              </h3>

              <p className="text-gray-600">
                {t("culturalExchangeDescription")}
              </p>
            </div>
          </li>

          <li className="flex flex-col h-full">
            <div className="p-8 lg:px-8 lg:py-16 text-center rounded-lg flex-grow bg-green-50">
              <div className="bg-green-100 w-20 h-20 mx-auto flex items-center justify-center rounded-full mb-6">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/cat-4.svg`}
                  width="40"
                  height="40"
                  loading="lazy"
                  alt={t("outstandingTeachersAlt")}
                />
              </div>

              <h3 className="text-xl font-semibold mb-5">
                <div className="text-green-600">{t("outstandingTeachers")}</div>
              </h3>

              <p className="text-gray-600">
                {t("outstandingTeachersDescription")}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default CategorySection;
