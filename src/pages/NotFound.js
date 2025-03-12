import NavContact from "../components/NavContact";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import BackToTopButton from "../components/BackToTopButton";
import { FaExclamationTriangle } from "react-icons/fa";
import { LanguageContext } from "../components/LanguageContext";
import { useContext } from "react";

const NotFound = () => {
  const { t, language } = useContext(LanguageContext);

  return (
    <div id="top" className="min-h-screen flex flex-col">
      <NavContact />
      <NavBar />
      <div className="flex flex-col items-center justify-center flex-grow bg-gray-100 p-8 md:p-16 lg:p-10">
        <FaExclamationTriangle className="text-red-600 text-8xl" />
        <h1 className="text-7xl font-extrabold text-red-600 mt-4">{t('notFound404')}</h1>
        <p className={`mt-4 text-xl text-gray-700 text-center max-w-md ${language === 'ar' ? 'rtl' : 'ltr'}`}>
          {t('pageNotFoundTitle')} {t('pageNotFoundDescription')}
        </p>
        <a
          href="/"
          className="mt-6 px-6 py-3 text-white bg-sky-500 rounded-lg shadow-lg hover:bg-sky-700 transition duration-300 transform hover:scale-105"
        >
          {t('goToHome')}
        </a>
      </div>
      <Footer />
      <BackToTopButton />
    </div>
  );
};

export default NotFound;
