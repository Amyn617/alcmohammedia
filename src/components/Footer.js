import React, { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

const Footer = () => {
  const { t, language } = useContext(LanguageContext);
  const isArabic = language === "ar";

  return (
    <footer
      className={`bg-no-repeat bg-cover bg-blue-950 text-gray-300 ${
        isArabic ? "text-right" : "text-left"
      }`}
      style={{ backgroundImage: "url('./assets/images/footer-bg.png')" }}
      dir={isArabic ? "rtl" : "ltr"} // Set direction based on the selected language
    >
      <div className="px-24 py-12 grid gap-10 md:grid-cols-3 lg:grid-cols-4">
        {/* Footer Brand Section */}
        <div className="mb-8">
          <a href="#" className="block mb-4">
            <img
              src="./assets/images/logo.svg"
              alt={t("alcLogo")}
              className="brightness-0 invert"
            />
          </a>
          <p className="leading-loose text-justify">{t("footerDescription")}</p>
          <br />
          <div className="mt-2">
            <a
              href="https://maps.app.goo.gl/cyF9dEkNf9ypKHMM7"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:text-red-500 transition-all duration-200"
            >
              33 Rue de Damas, Mohammedia
            </a>
            <a
              dir="ltr"
              href="tel:+212661545636"
              className="block hover:text-red-500 transition-all duration-200"
            >
              +212 661-545636
            </a>
            <a
              href="mailto:info@alcmohammedia.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:text-red-500 transition-all duration-200"
            >
              info@alcmohammedia.com
            </a>
          </div>
        </div>

        {/* Footer Links Section 1 */}
        <ul className="space-y-4">
          <li className="text-white text-xl font-semibold">
            {t("alcMohammedia")}
          </li>
          <li>
            <a
              href="#"
              className="hover:text-red-500 transition-all duration-200"
            >
              {t("about")}
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-red-500 transition-all duration-200"
            >
              {t("courses")}
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-red-500 transition-all duration-200"
            >
              {t("events")}
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-red-500 transition-all duration-200"
            >
              {t("clubs")}
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-red-500 transition-all duration-200"
            >
              {t("results")}
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-red-500 transition-all duration-200"
            >
              {t("join")}
            </a>
          </li>
        </ul>

        {/* Footer Links Section 2 */}
        <ul className="space-y-4">
          <li className="text-white text-xl font-semibold">{t("links")}</li>
          <li>
            <a
              href="https://aca.org.ma/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500 transition-all duration-200"
            >
              {t("aca")}
            </a>
          </li>
          <li>
            <a
              href="https://aca.org.ma/contact-3/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500 transition-all duration-200"
            >
              {t("allAlcs")}
            </a>
          </li>
        </ul>

        {/* Social Links Section */}
        <div>
          <p className="text-white text-xl font-semibold">{t("contacts")}</p>
          <br />
          <ul dir="ltr" className="flex space-x-4">
            <li>
              <a
                href="mailto:info@alcmohammedia.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-500 transition-all duration-200"
              >
                <i className="fa-solid fa-envelope text-2xl"></i>
              </a>
            </li>
            <li>
              <a
                href="tel:+212661545636"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-500 transition-all duration-200"
              >
                <i className="fa-solid fa-phone text-2xl"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/ALC.Mohammedia/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-500 transition-all duration-200"
              >
                <i className="fa-brands fa-facebook text-2xl"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/alcmohammedia/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-500 transition-all duration-200"
              >
                <i className="fa-brands fa-instagram text-2xl"></i>
              </a>
            </li>
            <li>
              <a
                href="https://maps.app.goo.gl/cyF9dEkNf9ypKHMM7"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-500 transition-all duration-200"
              >
                <i className="fa-solid fa-location-dot text-2xl"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-gray-800 p-6">
        <div className="text-center">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} {t("allRightsReserved")}{" "}
            <a
              href="#"
              className="text-sky-400 hover:text-red-500 transition-all duration-200"
            >
              {t("alcMohammedia")}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
