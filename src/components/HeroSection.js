import React, { useContext, useEffect, useState } from 'react';
import { LanguageContext } from "./LanguageContext";

const HeroSection = () => {
  const { language } = useContext(LanguageContext);
  const { t } = useContext(LanguageContext);
  
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      className="relative bg-cover bg-center py-20"
      style={{
        backgroundImage: "url('./assets/images/alc.jpeg')",
        backgroundAttachment: "fixed", // Optional: gives a more pronounced effect
        backgroundPosition: `center ${scrollY * -0.1}px`, // Adjust the value for the desired effect
      }}
      id="home"
      aria-label="home"
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative container mx-auto">
        <div className="text-center text-white px-10">
        <h1 className="text-4xl sm:text-6xl py-9 font-bold mb-4">
            {language === 'en' && (
              <>
                The <span className='text-gradient'>{t("hero_main")}</span> of Mohammedia
              </>
            )}
            {language === 'ar' && (
              <>
                <span className='text-gradient py-5'>{t("hero_main")}</span> بالمحمدية
              </>
            )}
            {language === 'fr' && (
              <>
                Le <span className='text-gradient'>{t("hero_main")}</span> de Mohammedia
              </>
            )}
          </h1>
          <p className="text-lg">
            {t("hero_sub")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
