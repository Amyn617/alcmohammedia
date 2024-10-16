import { useContext } from "react";
import { LanguageContext } from "../components/LanguageContext";
import NavContact from "../components/NavContact";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import BackToTopButton from "../components/BackToTopButton";

const Join = () => {
  const { t, language } = useContext(LanguageContext);
  const isArabic = language === "ar";

  return (
    <div id="top">
      <NavContact />
      <NavBar />
      <section
        dir={isArabic ? "rtl" : "ltr"}
        className="bg-gradient-to-b from-gray-50 to-gray-100"
      >
        <div className="container mx-auto p-6 md:p-20">
          <div className="text-center mb-10 md:mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-sky-500 text-center">
              {t("work_with_us")}
            </h1>
            <p className="text-lg text-gray-700 mt-4">{t("join_alc_team")}</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
            <div
              className="bg-cover bg-center py-24 md:py-32 relative"
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/join_1.jpg)`,
                backgroundAttachment: "fixed",
              }}
            ></div>
            <div className="p-8 md:p-12">
              <h3 className="text-3xl font-semibold text-gray-800 mb-6">
                {t("overview")}
              </h3>
              <p className="text-lg text-gray-700 mb-6">{t("alc_pride")}</p>
              <p className="text-lg text-gray-700 mb-6">
                {t("collaborative_innovative_work")}
              </p>
              <ul className="list-disc list-inside text-lg text-gray-700 mb-6 space-y-4">
                <li>{t("modern_classrooms")}</li>
                <li>{t("professional_development")}</li>
                <li>{t("vibrant_community")}</li>
                <li>{t("social_cultural_events")}</li>
              </ul>
              <p className="text-lg text-gray-700 mb-6">
                {t("looking_for_teachers")}
              </p>
              <p className="text-lg text-gray-700">{t("prior_experience")}</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
            <div
              className="bg-cover bg-center py-24 md:py-32 relative"
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/join_2.jpg)`,
                backgroundAttachment: "fixed",
              }}
            ></div>
            <div className="p-8 md:p-12">
              <h3 className="text-3xl font-semibold text-gray-800 mb-6">
                {t("how_to_apply")}
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                {t("apply_documents")}
              </p>

              <div className="text-lg text-gray-700 mb-8">
                <p className="mb-2">
                  <strong>{t("for_local_teachers")}: </strong>
                  <button className="ml-2 text-sky-500 hover:underline">
                    <a href="mailto:recruitment@alcmohammedia.com">
                      recruitment@alcmohammedia.com
                    </a>
                  </button>
                </p>
                <p className="mb-4">
                  <strong>{t("for_international_teachers")}: </strong>
                  <button className="ml-2 text-sky-500 hover:underline">
                    <a href="mailto:recruit.nest@alcmohammedia.com">
                      recruit.nest@alcmohammedia.com
                    </a>
                  </button>
                </p>
              </div>

              <ul className="text-lg text-gray-700 space-y-10">
                {[
                  {
                    number: "1.",
                    title: t("resume"),
                    description: t("resume_description"),
                  },
                  {
                    number: "2.",
                    title: t("passport_cin"),
                    description: t("passport_cin_description"),
                  },
                  {
                    number: "3.",
                    title: t("cover_letter"),
                    description: t("cover_letter_description"),
                  },
                  {
                    number: "4.",
                    title: t("references"),
                    description: t("references_description"),
                  },
                  {
                    number: "5.",
                    title: t("diplomas_certificates"),
                    description: t("diplomas_certificates_description"),
                  },
                ].map((item, index) => (
                  <li
                    key={index}
                    className={`relative pl-16 ${
                      isArabic ? "text-right pr-16 pl-0" : ""
                    }`}
                  >
                    <span
                      className={`absolute top-0 text-6xl font-bold text-sky-500 ${
                        isArabic ? "right-0" : "left-0"
                      }`}
                    >
                      {item.number}
                    </span>
                    <strong>{item.title}:</strong> {item.description}
                  </li>
                ))}
              </ul>
              <br />

              <p className="text-lg text-gray-700 mt-8">
                {t("foreign_candidates_note")}
              </p>
              <p className="text-lg text-gray-700 mt-4">
                {t("more_info_criminal_report")}
                <a
                  href="https://www.fbi.gov/how-we-can-help-you/more-fbi-services-and-information/identity-history-summary-checks"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-500 hover:underline ml-1"
                >
                  {t("fbi_identity_history")}
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <BackToTopButton />
    </div>
  );
};

export default Join;
