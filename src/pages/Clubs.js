import { useContext } from "react";
import { LanguageContext } from "../components/LanguageContext";
import NavContact from "../components/NavContact";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import BackToTopButton from "../components/BackToTopButton";
import ScrollAnimation from "../components/ScrollAnimation";

const Clubs = () => {
  const { t, language } = useContext(LanguageContext);
  const isArabic = language === "ar";

  return (
    <div id="top">
      <NavContact />
      <NavBar />
      <section
        className="bg-gradient-to-b from-gray-50 to-gray-100"
        dir={isArabic ? "rtl" : "ltr"}
      >
        <div className="container mx-auto p-6 md:p-20">
          <ScrollAnimation>
            <div className="text-center mb-10 md:mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-sky-500 text-center">
                {t("explore_our_clubs")}
              </h1>
              <p className="text-lg text-gray-700 mt-4">{t("get_involved")}</p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
              <div
                className="bg-cover bg-center py-24 md:py-32 relative"
                style={{
                  backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/music_club.jpg)`,
                  backgroundAttachment: "fixed",
                }}
              ></div>
              <div className="p-8">
                <h3 className="text-3xl font-semibold text-gray-800 mb-6">
                  {t("music_club")}
                </h3>
                <p className="text-lg text-gray-700 mb-6">
                  {t("music_club_description")}
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  {t("music_club_activities")}
                </p>
                <ul className="list-disc list-inside text-lg text-gray-700 mb-6">
                  <li>{t("regular_jam_sessions")}</li>
                  <li>{t("live_performances")}</li>
                  <li>{t("music_workshops")}</li>
                </ul>
                <p className="text-lg text-gray-700 mb-6">
                  {t("music_club_open")}
                </p>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
              <div
                className="bg-cover bg-center py-24 md:py-32 relative"
                style={{
                  backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/theater_club.jpg)`,
                  backgroundAttachment: "fixed",
                }}
              ></div>
              <div className="p-8">
                <h3 className="text-3xl font-semibold text-gray-800 mb-6">
                  {t("theater_club")}
                </h3>
                <p className="text-lg text-gray-700 mb-6">
                  {t("theater_club_description")}
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  {t("theater_club_activities")}
                </p>
                <ul className="list-disc list-inside text-lg text-gray-700 mb-6">
                  <li>{t("acting_workshops")}</li>
                  <li>{t("performing_opportunities")}</li>
                  <li>{t("collaborative_environment")}</li>
                </ul>
                <p className="text-lg text-gray-700 mb-6">
                  {t("theater_club_passion")}
                </p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
      <Footer />
      <BackToTopButton />
    </div>
  );
};

export default Clubs;
