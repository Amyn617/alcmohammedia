import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LanguageContext } from "./LanguageContext";

const SocialLink = ({ icon, link, prefix = "solid" }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-500 hover:scale-110 transition-all duration-300"
    aria-label={`Visit our ${icon} page`}
  >
    <i className={`fa-${prefix} fa-${icon} text-base`}></i>
  </a>
);

const NavLink = ({ to, children }) => (
  <li>
    <Link
      to={to}
      className="group flex items-center gap-2 hover:text-red-500 transition-all duration-300"
    >
      <span className="opacity-0 group-hover:opacity-100 transition-opacity">
        <i className="fa-solid fa-chevron-right text-xs"></i>
      </span>
      <span className="group-hover:translate-x-1 transition-transform">
        {children}
      </span>
    </Link>
  </li>
);

const Footer = () => {
  const navigate = useNavigate();
  const { t, language } = useContext(LanguageContext);
  const isArabic = language === "ar";

  const contactInfo = [
    {
      icon: "location-dot",
      text: "33 Rue de Damas, Mohammedia",
      link: "https://maps.app.goo.gl/cyF9dEkNf9ypKHMM7",
    },
    { icon: "phone", text: "+212 661-545636", link: "tel:+212661545636" },
    {
      icon: "envelope",
      text: "admin@alcmohammedia.com",
      link: "mailto:admin@alcmohammedia.com",
    },
    { icon: "link", text: "All Links", link: "#links" },
  ];

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className={`bg-no-repeat bg-cover bg-blue-900/95 text-gray-300 ${
        isArabic ? "text-right" : "text-left"
      }`}
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/footer-bg.svg)`,
      }}
      dir={isArabic ? "rtl" : "ltr"}
    >
      <div className="container mx-auto px-6 md:px-8 lg:px-12 py-16 lg:py-20">
        <div className="grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {/* Logo and Description Section */}
          <div className="space-y-6">
            <Link
              to="/"
              onClick={() => handleNavigation("/")}
              className="block w-36 sm:w-48 transition-transform hover:scale-105"
            >
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/logo.svg`}
                alt={t("alcLogo")}
                className="brightness-0 invert"
              />
            </Link>
            <p className="text-base leading-relaxed opacity-90 max-w-md">
              {t("footerDescription")}
            </p>
            <div className="space-y-3 pt-4 border-t border-white/20">
              {contactInfo.map(({ icon, text, link }) => (
                <a
                  key={text}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-red-500 transition-all duration-300 group"
                >
                  <i
                    className={`fa-solid fa-${icon} w-5 group-hover:scale-110 transition-transform`}
                  ></i>
                  <span className="group-hover:translate-x-1 transition-transform">
                    {text}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-6">
            <h3 className="text-xl text-white font-semibold relative after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-red-500 pb-3">
              {t("alcMohammedia")}
            </h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-3 text-base">
                {[
                  { path: "/", label: "home" },
                  { path: "/registration", label: "registration" },
                  { path: "/english-program", label: "english_program" },
                  { path: "/french-program", label: "french_program" },
                  { path: "/join", label: "join" },
                  { path: "/clubs", label: "clubs" },
                ].map((item) => (
                  <NavLink
                    key={item.label}
                    to={item.path}
                    onClick={() => handleNavigation(item.path)}
                  >
                    {t(item.label)}
                  </NavLink>
                ))}
              </ul>
            </nav>
          </div>

          {/* External Links Section */}
          <div className="space-y-6">
            <h3 className="text-xl text-white font-semibold relative after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-red-500 pb-3">
              {t("links")}
            </h3>
            <ul className="space-y-3 text-base">
              <li>
                <a
                  href="https://aca.org.ma/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-500 transition-colors inline-block hover:translate-x-2 duration-300"
                >
                  {t("aca")}
                </a>
              </li>
              <li>
                <a
                  href="https://aca.org.ma/contact-3/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-500 transition-colors inline-block hover:translate-x-2 duration-300"
                >
                  {t("allAlcs")}
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="space-y-6">
            <h3 className="text-xl text-white font-semibold relative after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-red-500 pb-3">
              {t("contacts")}
            </h3>
            <div dir="ltr" className="flex flex-wrap gap-4">
              {[
                { icon: "envelope", link: "mailto:admin@alcmohammedia.com" },
                { icon: "phone", link: "tel:+212661545636" },
                {
                  icon: "facebook-f",
                  prefix: "brands",
                  link: "https://www.facebook.com/ALC.Mohammedia/",
                },
                {
                  icon: "instagram",
                  prefix: "brands",
                  link: "https://www.instagram.com/alcmohammedia/",
                },
                {
                  icon: "linkedin-in",
                  prefix: "brands",
                  link: "https://www.linkedin.com/company/alc-mohammedia/",
                },
                {
                  icon: "youtube",
                  prefix: "brands",
                  link: "https://www.youtube.com/@alcmohammedia6915",
                },
                {
                  icon: "location-dot",
                  link: "https://maps.app.goo.gl/cyF9dEkNf9ypKHMM7",
                },
              ].map((social) => (
                <SocialLink key={social.icon} {...social} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-gray-800">
        <div className="container mx-auto px-6 md:px-8 lg:px-12 py-4">
          <p className="text-center text-sm text-gray-400">
            &copy; {new Date().getFullYear()} {t("allRightsReserved")}{" "}
            <Link
              to="/"
              onClick={() => handleNavigation("/")}
              className="text-sky-400 hover:text-red-500 transition-colors"
            >
              {t("alcMohammedia")}
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
