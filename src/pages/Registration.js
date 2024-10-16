import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../components/LanguageContext";
import NavContact from "../components/NavContact";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import BackToTopButton from "../components/BackToTopButton";

const Registration = () => {
  const { t, language } = useContext(LanguageContext);
  const isArabic = language === "ar";
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://docs.google.com/spreadsheets/d/e/2PACX-1vTNJ98maM71km2Kd5wbZWKVz6ixbnXDecLnc8fiBMW_In2sn5zvxbmNcjEF8BJUhii5bWlceCFXgU7f/pub?output=csv"
        );
        const csvData = await response.text();
        const rows = csvData.split("\n").map((row) => row.split(","));
        setData(rows.slice(1));
      } catch (error) {
        console.error("Error fetching the spreadsheet data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div id="top" className="bg-gray-50 min-h-screen">
      <NavContact />
      <NavBar />

      <div
        dir={`${language === "ar" ? "rtl" : "ltr"}`}
        className={`container mx-auto p-8 md:p-12 lg:p-20 ${
          isArabic ? "text-right" : "text-left"
        }`}
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-sky-500 text-center mb-10">
          {t("registrations")}
        </h1>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4 text-sky-500">
            {t("policies_guidelines")}
          </h2>

          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h3 className="text-2xl font-semibold mb-2">
              {t("registration_formalities")}
            </h3>
            <ol className="list-decimal pl-5 mb-4">
              <li>
                {t("placement_tests_mandatory")}
                <ul className="list-disc pl-5">
                  <li>{t("new_students_placeholder")}</li>
                  <li>{t("interrupted_courses_placeholder")}</li>
                </ul>
              </li>
              <li>{t("registration_form_requirement")}</li>
            </ol>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h3 className="text-2xl font-semibold mb-2">
              {t("accepted_payment_methods")}
            </h3>
            <ul className="list-disc pl-5 mb-4">
              <li>{t("registration_fees_fixed")}</li>
              <li>{t("fees_payment_requirement")}</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4 text-sky-500">
            {t("tuition_fees")}
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <ul className="list-disc pl-5 mb-4">
              <li>
                {t("children_teens_fee")}: <strong>3600 MAD/year</strong> (
                {t("90_hours")})
              </li>
              <li>
                {t("adults_fee")}: <strong>1200 MAD/term</strong> (
                {t("30_hours")})
              </li>
              <li>
                {t("registration_fee")}: <strong>200 MAD</strong>{" "}
                {t("new_registration")}
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4 text-sky-500">
            {t("academic_calendar")}
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h3 className="text-2xl font-semibold mb-2">{t("schedule")}</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-sky-500 text-white">
                  <tr>
                    <th
                      className={`px-4 py-2 ${
                        isArabic ? "text-right" : "text-left"
                      }`}
                    >
                      {t("day")}
                    </th>
                    <th
                      className={`px-4 py-2 ${
                        isArabic ? "text-right" : "text-left"
                      }`}
                    >
                      {t("session_1")}
                    </th>
                    <th
                      className={`px-4 py-2 ${
                        isArabic ? "text-right" : "text-left"
                      }`}
                    >
                      {t("session_2")}
                    </th>
                    <th
                      className={`px-4 py-2 ${
                        isArabic ? "text-right" : "text-left"
                      }`}
                    >
                      {t("session_3")}
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {data.map((row, index) => (
                    <tr
                      key={index}
                      className={`hover:bg-gray-100 ${
                        index % 2 === 0 ? "bg-gray-50" : "bg-white"
                      }`}
                    >
                      <td
                        className={`px-4 py-2 font-semibold ${
                          isArabic ? "text-right" : "text-left"
                        }`}
                      >
                        {row[0]}
                      </td>
                      <td
                        className={`px-4 py-2 ${
                          isArabic ? "text-right" : "text-left"
                        }`}
                      >
                        {row[1] || "-"}
                      </td>
                      <td
                        className={`px-4 py-2 ${
                          isArabic ? "text-right" : "text-left"
                        }`}
                      >
                        {row[2] || "-"}
                      </td>
                      <td
                        className={`px-4 py-2 ${
                          isArabic ? "text-right" : "text-left"
                        }`}
                      >
                        {row[3] || "-"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <hr />
            <br />
            <p className="mt-2">*{t("adult_schedule_note")}</p>
            <p className="mt-2 font-semibold text-red-600">
              {t("schedule_change_note")}
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4 text-sky-500">
            {t("english_program")}
          </h2>

          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h3 className="text-2xl font-semibold mb-2">
              {t("alc_young_learner_program_levels")}
            </h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-sky-500 text-white">
                  <tr>
                    <th
                      className={`px-4 py-2 ${
                        isArabic ? "text-right" : "text-left"
                      }`}
                    >
                      {t("cefr")}
                    </th>
                    <th
                      className={`px-4 py-2 ${
                        isArabic ? "text-right" : "text-left"
                      }`}
                    >
                      {t("alc_level")}
                    </th>
                    <th
                      className={`px-4 py-2 ${
                        isArabic ? "text-right" : "text-left"
                      }`}
                    >
                      {t("hours")}
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {[
                    {
                      cefr: "Pre-A1",
                      alcLevel: "VYL 1 and VYL 2",
                      hours: `90 ${t("hours")}`,
                    },
                    {
                      cefr: "A1",
                      alcLevel: "YL Starter",
                      hours: `90 ${t("hours")}`,
                    },
                    {
                      cefr: "A1+",
                      alcLevel: "Young Learner 1",
                      hours: `90 ${t("hours")}`,
                    },
                    {
                      cefr: "A2",
                      alcLevel: "Young Learner 2",
                      hours: `90 ${t("hours")}`,
                    },
                    {
                      cefr: "A2+",
                      alcLevel: "Young Learner 3",
                      hours: `90 ${t("hours")}`,
                    },
                    {
                      cefr: "B1",
                      alcLevel: "Young Learner 4",
                      hours: `90 ${t("hours")}`,
                    },
                  ].map((row, index) => (
                    <tr
                      key={index}
                      className={`hover:bg-gray-100 ${
                        index % 2 === 0 ? "bg-gray-50" : "bg-white"
                      }`}
                    >
                      <td
                        className={`px-4 py-2 font-semibold ${
                          isArabic ? "text-right" : "text-left"
                        }`}
                      >
                        {row.cefr}
                      </td>
                      <td
                        className={`px-4 py-2 ${
                          isArabic ? "text-right" : "text-left"
                        }`}
                      >
                        {row.alcLevel}
                      </td>
                      <td
                        className={`px-4 py-2 ${
                          isArabic ? "text-right" : "text-left"
                        }`}
                      >
                        {row.hours}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <hr />
            <h3 className="text-2xl font-semibold my-5">{t("teens")}</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-sky-500 text-white">
                  <tr>
                    <th
                      className={`px-4 py-2 ${
                        isArabic ? "text-right" : "text-left"
                      }`}
                    >
                      {t("level")}
                    </th>
                    <th
                      className={`px-4 py-2 ${
                        isArabic ? "text-right" : "text-left"
                      }`}
                    >
                      {t("alc_level")}
                    </th>
                    <th
                      className={`px-4 py-2 ${
                        isArabic ? "text-right" : "text-left"
                      }`}
                    >
                      {t("cefr")}
                    </th>
                    <th
                      className={`px-4 py-2 ${
                        isArabic ? "text-right" : "text-left"
                      }`}
                    >
                      {t("hours")}
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {[
                    {
                      level: t("beginning"),
                      alcLevel: "T1, T2, T3",
                      cefr: "A1",
                      hours: `90 ${t("hours")}`,
                    },
                    {
                      level: t("beginning"),
                      alcLevel: "T4, T5, T6",
                      cefr: "A2",
                      hours: `90 ${t("hours")}`,
                    },
                    {
                      level: t("pre_intermediate"),
                      alcLevel: "T7",
                      cefr: "A2",
                      hours: `30 ${t("hours")}`,
                    },
                    {
                      level: t("pre_intermediate"),
                      alcLevel: "T8",
                      cefr: "A2/B1",
                      hours: `30 ${t("hours")}`,
                    },
                    {
                      level: t("pre_intermediate"),
                      alcLevel: "T9",
                      cefr: "B1",
                      hours: `30 ${t("hours")}`,
                    },
                    {
                      level: t("intermediate"),
                      alcLevel: "T10, T11, T12",
                      cefr: "B1",
                      hours: `90 ${t("hours")}`,
                    },
                    {
                      level: t("intermediate"),
                      alcLevel: "T13, T14, T15",
                      cefr: "B2",
                      hours: `90 ${t("hours")}`,
                    },
                    {
                      level: t("advanced"),
                      alcLevel: "T16, T17, T19",
                      cefr: "C1/C2",
                      hours: `90 ${t("hours")}`,
                    },
                  ].map((row, index) => (
                    <tr
                      key={index}
                      className={`hover:bg-gray-100 ${
                        index % 2 === 0 ? "bg-gray-50" : "bg-white"
                      }`}
                    >
                      <td className="px-4 py-2">{row.level}</td>
                      <td className="px-4 py-2 whitespace-pre-line">
                        {row.alcLevel}
                      </td>
                      <td className="px-4 py-2">{row.cefr}</td>
                      <td className="px-4 py-2">{row.hours}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <hr />

            <h3 className="text-2xl font-semibold my-5">{t("adults")}</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-sky-500 text-white">
                  <tr>
                    <th
                      className={`px-4 py-2 ${
                        isArabic ? "text-right" : "text-left"
                      }`}
                    >
                      {t("level")}
                    </th>
                    <th
                      className={`px-4 py-2 ${
                        isArabic ? "text-right" : "text-left"
                      }`}
                    >
                      {t("alc_level")}
                    </th>
                    <th
                      className={`px-4 py-2 ${
                        isArabic ? "text-right" : "text-left"
                      }`}
                    >
                      {t("cefr")}
                    </th>
                    <th
                      className={`px-4 py-2 ${
                        isArabic ? "text-right" : "text-left"
                      }`}
                    >
                      {t("hours")}
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {[
                    {
                      alcLevel: t("beginning"),
                      levels: "Beg1, Beg2, Beg3",
                      cefr: "A1",
                      hours: `90 ${t("hours")}`,
                    },
                    {
                      alcLevel: t("beginning"),
                      levels: "Beg4, Beg5, Beg6",
                      cefr: "A2",
                      hours: `90 ${t("hours")}`,
                    },
                    {
                      alcLevel: t("pre_intermediate"),
                      levels: "Pre-Int1, Pre-Int2, Pre-Int3",
                      cefr: "B1",
                      hours: `90 ${t("hours")}`,
                    },
                    {
                      alcLevel: t("intermediate"),
                      levels: "Int1, Int2, Int3",
                      cefr: "B1+",
                      hours: `90 ${t("hours")}`,
                    },
                    {
                      alcLevel: t("intermediate"),
                      levels: "Int4, Int5, Int6",
                      cefr: "B2",
                      hours: `90 ${t("hours")}`,
                    },
                    {
                      alcLevel: t("advanced"),
                      levels: "Adv1, Adv2, Adv3, Adv4, Adv5, Adv6",
                      cefr: "C1/C2",
                      hours: `90 ${t("hours")}`,
                    },
                  ].map((row, index) => (
                    <tr
                      key={index}
                      className={`hover:bg-gray-100 ${
                        index % 2 === 0 ? "bg-gray-50" : "bg-white"
                      }`}
                    >
                      <td className="px-4 py-2">{row.alcLevel}</td>
                      <td className="px-4 py-2 whitespace-pre-line">
                        {row.levels}
                      </td>
                      <td className="px-4 py-2">{row.cefr}</td>
                      <td className="px-4 py-2">{row.hours}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <hr />

            <h3 className="text-2xl font-semibold my-5">
              {t("objective_proficiency")}
            </h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-sky-500 text-white">
                  <tr>
                    <th
                      className={`px-4 py-2 ${
                        isArabic ? "text-right" : "text-left"
                      }`}
                    >
                      {t("alc_level")}
                    </th>
                    <th
                      className={`px-4 py-2 ${
                        isArabic ? "text-right" : "text-left"
                      }`}
                    >
                      {t("cefr")}
                    </th>
                    <th
                      className={`px-4 py-2 ${
                        isArabic ? "text-right" : "text-left"
                      }`}
                    >
                      {t("hours")}
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {[
                    {
                      alcLevel: `${t("proficiency")} 1`,
                      cefr: "C2",
                      hours: `30 ${t("hours")}`,
                    },
                    {
                      alcLevel: `${t("proficiency")} 2`,
                      cefr: "C2",
                      hours: `30 ${t("hours")}`,
                    },
                    {
                      alcLevel: `${t("proficiency")} 3`,
                      cefr: "C2",
                      hours: `30 ${t("hours")}`,
                    },
                    {
                      alcLevel: `${t("proficiency")} 4`,
                      cefr: "C2",
                      hours: `30 ${t("hours")}`,
                    },
                    {
                      alcLevel: `${t("proficiency")} 5`,
                      cefr: "C2",
                      hours: `30 ${t("hours")}`,
                    },
                  ].map((row, index) => (
                    <tr
                      key={index}
                      className={`hover:bg-gray-100 ${
                        index % 2 === 0 ? "bg-gray-50" : "bg-white"
                      }`}
                    >
                      <td className="px-4 py-2">{row.alcLevel}</td>
                      <td className="px-4 py-2">{row.cefr}</td>
                      <td className="px-4 py-2">{row.hours}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>

      <Footer />
      <BackToTopButton />
    </div>
  );
};

export default Registration;
