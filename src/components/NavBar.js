import React, { useContext, useState, useEffect, useRef } from "react";
import { LanguageContext } from "./LanguageContext";
import { FaChevronDown, FaBars } from "react-icons/fa";

const NavBar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [sidebarActive, setSidebarActive] = useState(false);

  const { language, setLanguage } = useContext(LanguageContext);
  const { t } = useContext(LanguageContext);

  const sidebarRef = useRef(null);

  const handleMouseEnter = (key) => setActiveDropdown(key);
  const handleMouseLeave = () => setActiveDropdown(null);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setActiveDropdown(null);
    console.log(`Language changed to: ${lang}`);
  };

  const languages = [
    {
      code: "en",
      name: "English",
      flag: "https://flagsapi.com/US/flat/64.png",
    },
    {
      code: "fr",
      name: "Français",
      flag: "https://flagsapi.com/FR/flat/64.png",
    },
    {
      code: "ar",
      name: "العربية",
      flag: "https://flagsapi.com/MA/flat/64.png",
    },
  ];

  const handleClickOutside = (event) => {
    if (
      sidebarActive &&
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target)
    ) {
      setSidebarActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebarActive]);

  return (
    <div className="sticky z-50 top-0">
      <div className="flex items-center justify-between px-10 xl:px-20 bg-white shadow-md">
        <a href="#home">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/logo.svg`}
            alt="ALC Mohammedia"
            className="w-56 lg:w-48 py-6"
          />
        </a>
        <div
          className={`fixed inset-0 bg-black z-40 transition-opacity duration-500 ${
            sidebarActive ? "opacity-50 visible" : "opacity-0 invisible"
          }`}
        />

        <ul
          dir={`${language === "ar" ? "rtl" : "ltr"}`}
          ref={sidebarRef}
          className={`hidden gap-10 max-lg:flex max-xl:gap-6 max-lg:flex-col max-lg:z-50 max-lg:text-white max-lg:bg-blue-900 max-lg:absolute max-lg:top-0 max-lg:px-12 max-lg:py-20 max-lg:h-[100vh] max-lg:transition-all max-lg:duration-500 max-lg:ease-in-out lg:flex ${
            sidebarActive
              ? "max-lg:translate-x-0 max-lg:left-0 opacity-100"
              : "max-lg:-translate-x-full max-lg:left-0 max-lg:opacity-0"
          }`}
        >
          <li>
            <a
              href="#home"
              className=" hover:text-sky-600 transition-all navbar-link"
            >
              {t("home")}
            </a>
          </li>
          <li
            className="relative"
            onMouseEnter={() => handleMouseEnter("registration")}
            onMouseLeave={handleMouseLeave}
          >
            <a
              href="#registration"
              className="flex items-center hover:text-sky-600 transition-all navbar-link"
            >
              {t("registration")}
            </a>
          </li>
          <li
            className="relative cursor-pointer"
            onMouseEnter={() => handleMouseEnter("english")}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex items-center hover:text-sky-600 transition-all navbar-link">
              {t("english_program")}
              <FaChevronDown className="ml-2 text-sm" />
            </div>
            <ul
              className={`${
                activeDropdown === "english"
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible translate-y-2"
              } absolute top-full left-0 mt-2 bg-white backdrop-blur-md border border-gray-200 min-w-[220px] transition-all duration-300 ease-in-out z-50`}
            >
              <li>
                <a
                  href="#english-program#general-english"
                  className="p-2 block hover:bg-sky-300 max-xl:text-black"
                >
                  {t("general_english")}
                </a>
              </li>
              <li>
                <a
                  href="#english-program#business-english"
                  className="p-2 block hover:bg-sky-300 max-xl:text-black"
                >
                  {t("business_english")}
                </a>
              </li>
              <li>
                <a
                  href="#english-program#conversational-english"
                  className="p-2 block hover:bg-sky-300 max-xl:text-black"
                >
                  {t("conversational_english")}
                </a>
              </li>
              <li>
                <a
                  href="#english-program#skill-based-classes"
                  className="p-2 block hover:bg-sky-300 max-xl:text-black"
                >
                  {t("skill_based_classes")}
                </a>
              </li>
              <li>
                <a
                  href="#english-program#academic-english"
                  className="p-2 block hover:bg-sky-300 max-xl:text-black"
                >
                  {t("academic_english")}
                </a>
              </li>
              <li>
                <a
                  href="#english-program#exam-preparation"
                  className="p-2 block hover:bg-sky-300 max-xl:text-black"
                >
                  {t("exam_preparation")}
                </a>
              </li>
              <li>
                <a
                  href="#english-program#baccalaureat-program"
                  className="p-2 block hover:bg-sky-300 max-xl:text-black"
                >
                  {t("baccalaureat_program")}
                </a>
              </li>
              <li>
                <a
                  href="#english-program#private-courses"
                  className="p-2 block hover:bg-sky-300 max-xl:text-black"
                >
                  {t("private_courses")}
                </a>
              </li>
            </ul>
          </li>

          <li
            className="relative cursor-pointer"
            onMouseEnter={() => handleMouseEnter("french")}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex items-center hover:text-sky-600 transition-all navbar-link">
              {t("french_program")}
              <FaChevronDown className="ml-2 text-sm" />
            </div>
            <ul
              className={`${
                activeDropdown === "french"
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible translate-y-2"
              } absolute top-full left-0 mt-2 bg-white backdrop-blur-md border border-gray-200 min-w-[220px] transition-all duration-300 ease-in-out z-50`}
            >
              <li>
                <a
                  href="#french-program#general-french"
                  className="p-2 block hover:bg-sky-300 max-xl:text-black"
                >
                  {t("general_french")}
                </a>
              </li>
              <li>
                <a
                  href="#french-program#professional-french"
                  className="p-2 block hover:bg-sky-300 max-xl:text-black"
                >
                  {t("professional_french")}
                </a>
              </li>
              <li>
                <a
                  href="#french-program#communication-french"
                  className="p-2 block hover:bg-sky-300 max-xl:text-black"
                >
                  {t("communication_french")}
                </a>
              </li>
              <li>
                <a
                  href="#french-program#exam-preparation-french"
                  className="p-2 block hover:bg-sky-300 max-xl:text-black"
                >
                  {t("exam_preparation_french")}
                </a>
              </li>
              <li>
                <a
                  href="#french-program#regional-french"
                  className="p-2 block hover:bg-sky-300 max-xl:text-black"
                >
                  {t("regional_french")}
                </a>
              </li>
              <li>
                <a
                  href="#french-program#french-middle-school"
                  className="p-2 block hover:bg-sky-300 max-xl:text-black"
                >
                  {t("french_middle_school")}
                </a>
              </li>
            </ul>
          </li>
          <li
            className="relative"
            onMouseEnter={() => handleMouseEnter("join")}
            onMouseLeave={handleMouseLeave}
          >
            <a
              href="#join"
              className="flex items-center hover:text-sky-600 transition-all navbar-link"
            >
              {t("join")}
            </a>
          </li>
          <li>
            <a
              href="#clubs"
              className="hover:text-sky-600 transition-all navbar-link"
            >
              {t("clubs")}
            </a>
          </li>
        </ul>

        <div
          className="relative"
          onMouseEnter={() => handleMouseEnter("language")}
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex items-center cursor-pointer">
            <img
              src={languages.find((lang) => lang.code === language).flag}
              width="30"
              alt={language}
            />
            <FaChevronDown className="ml-2 text-sm" />
          </div>
          <ul
            className={`${
              activeDropdown === "language"
                ? "opacity-100 visible translate-y-0"
                : "opacity-0 invisible translate-y-2"
            } absolute top-full right-0 mt-2 bg-white backdrop-blur-md border border-gray-200 min-w-[150px] transition-all duration-300 ease-in-out z-50`}
          >
            {languages
              .filter((lang) => lang.code !== language)
              .map((lang) => (
                <li key={lang.code}>
                  <a
                    onClick={() => handleLanguageChange(lang.code)}
                    className="p-2 flex items-center hover:bg-sky-300 cursor-pointer"
                  >
                    <img
                      src={lang.flag}
                      width="20"
                      alt={lang.name}
                      className="mr-2"
                    />
                    {lang.name}
                  </a>
                </li>
              ))}
          </ul>
        </div>

        <button
          className="lg:hidden text-2xl"
          onClick={() => setSidebarActive((prev) => !prev)}
        >
          <FaBars />
        </button>
      </div>
    </div>
  );
};

export default NavBar;
