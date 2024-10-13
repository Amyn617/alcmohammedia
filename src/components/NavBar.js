import React, { useContext, useState, useEffect, useRef } from "react";
import { LanguageContext } from "./LanguageContext.js";
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
        <a href="/"><img
          src={`${process.env.PUBLIC_URL}/assets/images/logo.svg`}
          alt="ALC Mohammedia"
          className="w-56 py-6"
        /></a>
        {/* Overlay for sidebar */}
        <div
          className={`fixed inset-0 bg-black z-40 transition-opacity duration-500 ${
            sidebarActive ? "opacity-50 visible" : "opacity-0 invisible"
          }`}
        />

        <ul
          dir={`${language === "ar" ? "rtl" : "ltr"}`}
          ref={sidebarRef}
          className={`hidden max-xl:flex max-xl:gap-8 max-xl:flex-col max-xl:z-50 max-xl:text-white max-xl:bg-blue-950 max-xl:absolute max-xl:top-0 max-xl:px-12 max-xl:py-20 max-xl:h-[100vh] max-xl:transition-all max-xl:duration-500 max-xl:ease-in-out xl:flex gap-10 ${
            sidebarActive
              ? "max-xl:translate-x-0 max-xl:left-0 opacity-100"
              : "max-xl:-translate-x-full max-xl:left-0 max-xl:opacity-0"
          }`}
        >
          <li>
            <a href="Home" className=" hover:text-sky-600 transition-all">
              {t("home")}
            </a>
          </li>
          <li
            className="relative"
            onMouseEnter={() => handleMouseEnter("registration")}
            onMouseLeave={handleMouseLeave}
          >
            <a
              href="Registration"
              className="flex items-center hover:text-sky-600 transition-all"
            >
              {t("registration")}
              <FaChevronDown className="ml-2 text-sm" />
            </a>
            <ul
              className={`${
                activeDropdown === "registration"
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible translate-y-2"
              } absolute top-full left-0 mt-2 bg-white backdrop-blur-md border border-gray-200 min-w-[220px] transition-all duration-300 ease-in-out z-50`}
            >
              <li>
                <a
                  href="Registration"
                  className="p-2 block hover:bg-sky-500 max-xl:text-black"
                >
                  {t("new_students")}
                </a>
              </li>
              <li>
                <a
                  href="Registration"
                  className="p-2 block hover:bg-sky-500 max-xl:text-black"
                >
                  {t("continuing_students")}
                </a>
              </li>
              <li>
                <a
                  href="Registration"
                  className="p-2 block hover:bg-sky-500 max-xl:text-black"
                >
                  {t("returning_students")}
                </a>
              </li>
            </ul>
          </li>
          <li
  className="relative"
  onMouseEnter={() => handleMouseEnter("english")}
  onMouseLeave={handleMouseLeave}
>
  <div
    href=""
    className="flex items-center hover:text-sky-600 transition-all cursor-pointer"
  >
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
        className="p-2 block hover:bg-sky-500 max-xl:text-black"
      >
        {t("general_english")}
      </a>
    </li>
    <li>
      <a
        href="#english-program#business-english"
        className="p-2 block hover:bg-sky-500 max-xl:text-black"
      >
        {t("business_english")}
      </a>
    </li>
    <li>
      <a
        href="#english-program#conversational-english"
        className="p-2 block hover:bg-sky-500 max-xl:text-black"
      >
        {t("conversational_english")}
      </a>
    </li>
    <li>
      <a
        href="#english-program#skill-based-classes"
        className="p-2 block hover:bg-sky-500 max-xl:text-black"
      >
        {t("skill_based_classes")}
      </a>
    </li>
    <li>
      <a
        href="#english-program#academic-english"
        className="p-2 block hover:bg-sky-500 max-xl:text-black"
      >
        {t("academic_english")}
      </a>
    </li>
    <li>
      <a
        href="#english-program#exam-preparation"
        className="p-2 block hover:bg-sky-500 max-xl:text-black"
      >
        {t("exam_preparation")}
      </a>
    </li>
    <li>
      <a
        href="#english-program#baccalaureat-program"
        className="p-2 block hover:bg-sky-500 max-xl:text-black"
      >
        {t("baccalaureat_program")}
      </a>
    </li>
    <li>
      <a
        href="#english-program#private-courses"
        className="p-2 block hover:bg-sky-500 max-xl:text-black"
      >
        {t("private_courses")}
      </a>
    </li>
  </ul>
</li>

          <li
            className="relative"
            onMouseEnter={() => handleMouseEnter("french")}
            onMouseLeave={handleMouseLeave}
          >
            <a
              href="FrenchProgram"
              className="flex items-center hover:text-sky-600 transition-all"
            >
              {t("french_program")}
              <FaChevronDown className="ml-2 text-sm" />
            </a>
            <ul
              className={`${
                activeDropdown === "french"
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible translate-y-2"
              } absolute top-full left-0 mt-2 bg-white backdrop-blur-md border border-gray-200 min-w-[220px] transition-all duration-300 ease-in-out z-50`}
            >
              <li>
                <a
                  href="FrenchProgram"
                  className="p-2 block hover:bg-sky-500 max-xl:text-black"
                >
                  {t("general_french")}
                </a>
              </li>
              <li>
                <a
                  href="FrenchProgram"
                  className="p-2 block hover:bg-sky-500 max-xl:text-black"
                >
                  {t("professional_french")}
                </a>
              </li>
              <li>
                <a
                  href="FrenchProgram"
                  className="p-2 block hover:bg-sky-500 max-xl:text-black"
                >
                  {t("communication_french")}
                </a>
              </li>
              <li>
                <a
                  href="FrenchProgram"
                  className="p-2 block hover:bg-sky-500 max-xl:text-black"
                >
                  {t("exam_preparation_french")}
                </a>
              </li>
              <li>
                <a
                  href="FrenchProgram"
                  className="p-2 block hover:bg-sky-500 max-xl:text-black"
                >
                  {t("regional_french")}
                </a>
              </li>
              <li>
                <a
                  href="FrenchProgram"
                  className="p-2 block hover:bg-sky-500 max-xl:text-black"
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
              href="join"
              className="flex items-center hover:text-sky-600 transition-all"
            >
              {t("join")}

              <FaChevronDown className="ml-2 text-sm" />
            </a>
            <ul
              className={`${
                activeDropdown === "join"
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible translate-y-2"
              } absolute top-full left-0 mt-2 bg-white backdrop-blur-md border border-gray-200 min-w-[220px] transition-all duration-300 ease-in-out z-50`}
            >
              <li>
                <a
                  href="join"
                  className="p-2 block hover:bg-sky-500 max-xl:text-black"
                >
                  {t("local_teacher")}
                </a>
              </li>
              <li>
                <a
                  href="join"
                  className="p-2 block hover:bg-sky-500 max-xl:text-black"
                >
                  {t("native_teacher")}
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="Clubs" className="hover:text-sky-600 transition-all">
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
                    href=""
                    onClick={() => handleLanguageChange(lang.code)}
                    className="p-2 flex items-center hover:bg-sky-500"
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
          className="xl:hidden text-2xl"
          onClick={() => setSidebarActive((prev) => !prev)}
        >
          <FaBars />
        </button>
      </div>
    </div>
  );
};

export default NavBar;
