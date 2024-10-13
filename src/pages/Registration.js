import { useEffect, useState } from "react";
import NavContact from "../components/NavContact";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import BackToTopButton from "../components/BackToTopButton";

const Registration = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://docs.google.com/spreadsheets/d/e/2PACX-1vTNJ98maM71km2Kd5wbZWKVz6ixbnXDecLnc8fiBMW_In2sn5zvxbmNcjEF8BJUhii5bWlceCFXgU7f/pub?output=csv"
        );
        const csvData = await response.text();

        // Convert CSV text to array
        const rows = csvData.split("\n").map((row) => row.split(","));
        setData(rows.slice(1)); // Store the data, excluding header row
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

      <div className="container mx-auto p-8 md:p-12 lg:p-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-sky-600 text-center mb-10">
          Registrations
        </h1>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4 text-sky-600">
            Policies & Guidelines
          </h2>

          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h3 className="text-2xl font-semibold mb-2">
              Registration Formalities
            </h3>
            <ol className="list-decimal pl-5 mb-4">
              <li>
                Placement tests are mandatory for:
                <ul className="list-disc pl-5">
                  <li>
                    New students, even if they are requesting the Beginner 1
                    level.
                  </li>
                  <li>
                    Anyone who has interrupted their courses at the center for a
                    year.
                  </li>
                </ul>
              </li>
              <li>
                The registration form (available from the administration) must
                be duly completed.
              </li>
            </ol>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h3 className="text-2xl font-semibold mb-2">
              Accepted Payment Methods
            </h3>
            <ul className="list-disc pl-5 mb-4">
              <li>Registration fees are fixed and non-refundable.</li>
              <li>
                Fees must be paid in full before the start of the course and
                cannot be divided.
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4 text-sky-600">
            Tuition/Fees
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <ul className="list-disc pl-5 mb-4">
              <li>
                Children/Teens: <strong>3600 MAD/year</strong> (3 sessions of 30
                hours = 90 hours)
              </li>
              <li>
                Adults: <strong>1200 MAD/term</strong> (session of 30 hours)
              </li>
              <li>
                Registration Fee: <strong>200 MAD</strong> for any new
                registration
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4 text-sky-600">
            Academic Calendar
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h3 className="text-2xl font-semibold mb-2">Schedule</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-sky-600 text-white">
                  <tr>
                    <th className="px-4 py-2 text-left">Day</th>
                    <th className="px-4 py-2 text-left">Session 1</th>
                    <th className="px-4 py-2 text-left">Session 2</th>
                    <th className="px-4 py-2 text-left">Session 3</th>
                    {/* Add more session columns as needed */}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {data.map((row, index) => (
                    <tr
                      key={index}
                      className={`${
                        index % 2 === 0 ? "bg-gray-50" : "bg-white"
                      }`}
                    >
                      <td className="px-4 py-2 font-semibold">{row[0]}</td>
                      <td className="px-4 py-2">{row[1] || "-"}</td>
                      <td className="px-4 py-2">{row[2] || "-"}</td>
                      <td className="px-4 py-2">{row[3] || "-"}</td>
                      {/* Add more cells for additional sessions as needed */}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-2">
              *Adult schedule, twice a week, 1.5 hours each session.
            </p>
            <p className="mt-2 font-semibold text-red-600">
              Note: The schedule is open to change.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4 text-sky-600">
            English Program
          </h2>

          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h3 className="text-2xl font-semibold mb-2">
              ALC Young Learner Program Levels
            </h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-sky-600 text-white">
                  <tr>
                    <th className="px-4 py-2 text-left">CEFR</th>
                    <th className="px-4 py-2 text-left">ALC LEVEL</th>
                    <th className="px-4 py-2 text-left">HOURS</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {[
                    {
                      cefr: "Pre-A1",
                      alcLevel: "VYL 1 and VYL 2",
                      hours: "90 hrs",
                    },
                    { cefr: "A1", alcLevel: "YL Starter", hours: "90 hrs" },
                    {
                      cefr: "A1+",
                      alcLevel: "Young Learner 1",
                      hours: "90 hrs",
                    },
                    {
                      cefr: "A2",
                      alcLevel: "Young Learner 2",
                      hours: "90 hrs",
                    },
                    {
                      cefr: "A2+",
                      alcLevel: "Young Learner 3",
                      hours: "90 hrs",
                    },
                    {
                      cefr: "B1",
                      alcLevel: "Young Learner 4",
                      hours: "90 hrs",
                    },
                    {
                      cefr: "B1+",
                      alcLevel: "Young Learner 5",
                      hours: "90 hrs",
                    },
                    {
                      cefr: "B2",
                      alcLevel: "Young Learner 6",
                      hours: "90 hrs",
                    },
                  ].map((row, index) => (
                    <tr
                      key={index}
                      className={`hover:bg-gray-100 ${
                        index % 2 === 0 ? "bg-gray-50" : "bg-white"
                      }`}
                    >
                      <td className="px-4 py-2">{row.cefr}</td>
                      <td className="px-4 py-2">{row.alcLevel}</td>
                      <td className="px-4 py-2">{row.hours}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <hr />

            <h3 className="text-2xl font-semibold my-5">Teens</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-sky-600 text-white">
                  <tr>
                    <th className="px-4 py-2 text-left">LEVEL</th>
                    <th className="px-4 py-2 text-left">ALC LEVEL</th>
                    <th className="px-4 py-2 text-left">CEFR</th>
                    <th className="px-4 py-2 text-left">HOURS</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {[
                    {
                      level: "Beginning",
                      alcLevel: "T1, T2, T3",
                      cefr: "A1",
                      hours: "90 hrs",
                    },
                    {
                      level: "Beginning",
                      alcLevel: "T4, T5, T6",
                      cefr: "A2",
                      hours: "90 hrs",
                    },
                    {
                      level: "Pre-Intermediate",
                      alcLevel: "T7",
                      cefr: "A2",
                      hours: "30 hrs",
                    },
                    {
                      level: "Pre-Intermediate",
                      alcLevel: "T8",
                      cefr: "A2/B1",
                      hours: "30 hrs",
                    },
                    {
                      level: "Pre-Intermediate",
                      alcLevel: "T9",
                      cefr: "B1",
                      hours: "30 hrs",
                    },
                    {
                      level: "Intermediate",
                      alcLevel: "T10, T11, T12",
                      cefr: "B1",
                      hours: "90 hrs",
                    },
                    {
                      level: "Intermediate",
                      alcLevel: "T13, T14, T15",
                      cefr: "B2",
                      hours: "90 hrs",
                    },
                    {
                      level: "Advanced",
                      alcLevel: "T16, T17, T19",
                      cefr: "C1/C2",
                      hours: "90 hrs",
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

            <h3 className="text-2xl font-semibold my-5">Adults</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-sky-600 text-white">
                  <tr>
                    <th className="px-4 py-2 text-left">LEVEL</th>
                    <th className="px-4 py-2 text-left">ALC LEVEL</th>
                    <th className="px-4 py-2 text-left">CEFR</th>
                    <th className="px-4 py-2 text-left">HOURS</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {[
                    {
                      alcLevel: "Beginning",
                      levels: "Beg1, Beg2, Beg3",
                      cefr: "A1",
                      hours: "90 hrs",
                    },
                    {
                      alcLevel: "Beginning",
                      levels: "Beg4, Beg5, Beg6",
                      cefr: "A2",
                      hours: "90 hrs",
                    },
                    {
                      alcLevel: "Pre-Intermediate",
                      levels: "Pre-Int1, Pre-Int2, Pre-Int3",
                      cefr: "B1",
                      hours: "90 hrs",
                    },
                    {
                      alcLevel: "Intermediate",
                      levels: "Int1, Int2, Int3",
                      cefr: "B1+",
                      hours: "90 hrs",
                    },
                    {
                      alcLevel: "Intermediate",
                      levels: "Int4, Int5, Int6",
                      cefr: "B2",
                      hours: "90 hrs",
                    },
                    {
                      alcLevel: "Advanced",
                      levels: "Adv1, Adv2, Adv3, Adv4, Adv5, Adv6",
                      cefr: "C1/C2",
                      hours: "90 hrs",
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
              Objective Proficiency
            </h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-sky-600 text-white">
                  <tr>
                    <th className="px-4 py-2 text-left">PROFICIENCY</th>
                    <th className="px-4 py-2 text-left">ALC LEVEL</th>
                    <th className="px-4 py-2 text-left">CEFR</th>
                    <th className="px-4 py-2 text-left">HOURS</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {[
                    { alcLevel: "Proficiency 1", cefr: "C2", hours: "30 hrs" },
                    { alcLevel: "Proficiency 2", cefr: "C2", hours: "30 hrs" },
                    { alcLevel: "Proficiency 3", cefr: "C2", hours: "30 hrs" },
                    { alcLevel: "Proficiency 4", cefr: "C2", hours: "30 hrs" },
                    { alcLevel: "Proficiency 5", cefr: "C2", hours: "30 hrs" },
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
