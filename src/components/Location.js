import React, { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

const Location = () => {
  const { t, language } = useContext(LanguageContext);

  return (
    <section dir={`${language === "ar" ? "rtl" : "ltr"}`} className="py-10 lg:py-20 mx-auto max-w-7xl px-4 lg:px-8">
      <div className="text-center mb-6">
        <p className="text-md text-red-500 uppercase tracking-wide">
          {t("locationSubtitle")}
        </p>
        <h2 className="text-3xl lg:text-5xl font-bold text-gray-500 mt-2">
          {t("visitUs")}{" "}
          <span className="text-sky-500">{t("alcMohammedia")}</span>
        </h2>
      </div>

      <p className="text-center text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed mb-6 lg:mb-12">
        {t("locationDescription1")} <br />
        {t("locationDescription2")} <br />
        {t("locationDescription3")}
      </p>

      <div className="w-full h-96 overflow-hidden rounded-lg shadow-lg">
        <iframe
          className="w-full h-full border-0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.4129397530337!2d-7.3934237000000005!3d33.6982622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7b6f154fbb861%3A0xea51518c14999cb1!2sAmerican%20Language%20Center%2C%20Mohammedia.!5e0!3m2!1sen!2sma!4v1721125639506!5m2!1sen!2sma;"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="ALC Mohammedia Location"
        ></iframe>
      </div>
    </section>
  );
};

export default Location;
