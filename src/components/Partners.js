import React, { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

const Partners = () => {
  const { t, language } = useContext(LanguageContext);

  const logos = [
    { 
      src: `${process.env.PUBLIC_URL}/assets/images/svg/ACA.svg`, 
      alt: "ACA", 
      name: "ACA",
      url: "https://www.aca.org.ma"
    },
    {
      src: `${process.env.PUBLIC_URL}/assets/images/svg/CSC_Mohammedia.svg`,
      alt: "CSC Mohammedia",
      name: "CSC Mohammedia",
      url: "https://www.instagram.com/csc_mohammedia/"
    },
    {
      src: `${process.env.PUBLIC_URL}/assets/images/svg/Brainlyne.svg`,
      alt: "Brainlyne",
      name: "Brainlyne",
      url: "https://www.brainlyne.com"
    },
    {
      src: `${process.env.PUBLIC_URL}/assets/images/svg/US_Embassy_Morocco.svg`,
      alt: "US Embassy Morocco",
      name: "US Embassy Morocco",
      url: "https://ma.usembassy.gov"
    },
    {
      src: `${process.env.PUBLIC_URL}/assets/images/svg/Association_Nahdat_Zenata.svg`,
      alt: "Association Nahdat Zenata",
      name: "Association Nahdat Zenata",
      url: "https://nahdatzenata.wixsite.com/"
    },
  ];

  return (
    <section dir={`${language === "ar" ? "rtl" : "ltr"}`} className="py-10 lg:py-20 mx-auto">
      <div className="text-center mb-6">
        <p className="text-md text-red-500 uppercase tracking-wide">
          {t("networkSubtitle")}
        </p>
        <h2 className="text-3xl lg:text-5xl font-bold text-gray-500 mt-2">
          {t("connectingWith")}{" "}
          <span className="text-sky-500">{t("excellence")}</span>
        </h2>
      </div>

      <p className="text-center text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed mb-6 lg:mb-12">
        {t("partnersDescription1")} <br />
        {t("partnersDescription2")} <br />
        {t("partnersDescription3")}
      </p>
        <div className="flex flex-wrap justify-center gap-4">
          {logos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center">
              <a 
                href={logo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-300 hover:scale-110"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-20 lg:h-28 object-contain mx-10 grayscale opacity-50 transition-all duration-500 hover:opacity-100 hover:grayscale-0"
                  title={logo.name}
                />
              </a>
            </div>
          ))}
        </div>
    </section>
  );
};

export default Partners;
