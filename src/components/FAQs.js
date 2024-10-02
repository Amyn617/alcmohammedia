import React, { useContext, useState } from "react";
import { LanguageContext } from "./LanguageContext";

const FAQs = () => {
  const { t, language } = useContext(LanguageContext);
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      dir={`${language === "ar" ? "rtl" : "ltr"}`}
      className="mx-auto max-w-7xl px-4 lg:p-10"
      aria-label="faq"
    >
      <div className="text">
        <p className="text-md text-red-500 mb-4 uppercase">FAQ</p>
        <h2 className="text-gray-500 text-3xl lg:text-5xl font-bold mb-6">
          {t("faq")}
        </h2>
        <p className="text-gray-500 mb-8 text-lg">{t("faqDescription")}</p>
      </div>
      <div>
        {[...Array(6)].map((_, index) => (
          <div className="bg-blue-200 my-5 rounded-lg" key={index}>
            <button
              aria-expanded={activeIndex === index ? "true" : "false"}
              className={`flex justify-between items-center w-full font-semibold p-5 
                          hover:text-sky-500 transition-colors duration-200 cursor-pointer 
                          ${
                            activeIndex === index
                              ? "text-sky-500"
                              : "text-gray-700"
                          }`}
              onClick={() => handleToggle(index)}
            >
              <div className="text-lg text-wrap text-start">
                {t(`question_${index + 1}`)}
              </div>
              <span aria-hidden="true" className="text-2xl">
                {activeIndex === index ? "-" : "+"}
              </span>
            </button>
            <div
              className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
                activeIndex === index
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <hr className="border-t-2 border-sky-500 mx-5" />
              <p className="font-light text-gray-600 px-5 py-4">
                {t(`respond_${index + 1}`)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQs;
