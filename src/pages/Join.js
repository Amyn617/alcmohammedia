import NavContact from "../components/NavContact";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import BackToTopButton from "../components/BackToTopButton";

const Join = () => {
  return (
    <div id="top">
      <NavContact />
      <NavBar />
      <section className="bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="container mx-auto p-6 md:p-20">
          {/* Header */}
          <div className="text-center mb-10 md:mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-sky-500 text-center">
              Work With Us
            </h1>
            <p className="text-lg text-gray-700 mt-4">
              Join the ALC Mohammedia team and shape the future of English
              education.
            </p>
          </div>

          {/* Overview */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
            <div
              className="bg-cover bg-center py-24 md:py-32 relative"
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/join_1.jpg)`,
                backgroundAttachment: "fixed",
              }}
            >
            </div>
            <div className="p-8 md:p-12">
              <h3 className="text-3xl font-semibold text-gray-800 mb-6">
                Overview
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                At the American Language Center (ALC) Mohammedia, we pride
                ourselves on creating an engaging and culturally enriching
                environment for both teachers and students. Our instructors come
                from diverse backgrounds, creating a vibrant community dedicated
                to excellence in teaching.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                We offer a collaborative and innovative work environment,
                supported by modern classrooms equipped with the latest teaching
                tools, and exciting opportunities for professional development.
                Our team also enjoys a rich schedule of social and cultural
                events throughout the year.
              </p>
              <ul className="list-disc list-inside text-lg text-gray-700 mb-6 space-y-4">
                <li>Modern classrooms with state-of-the-art teaching tools</li>
                <li>Professional development opportunities</li>
                <li>A vibrant community of educators and staff</li>
                <li>Participation in social and cultural events</li>
              </ul>
              <p className="text-lg text-gray-700 mb-6">
                We are looking for enthusiastic, experienced English teachers
                who enjoy working in a multicultural setting. Applicants must
                hold a TEFL/TESOL certificate from an internationally recognized
                institution (with at least 120 hours of instruction and
                practical teaching experience).
              </p>
              <p className="text-lg text-gray-700">
                Prior experience living in Morocco or an interest in its culture
                is highly valued. We also seek candidates with emotional
                intelligence and the ability to thrive in an international
                environment. Applications are accepted year-round, but most
                recruitment occurs in April and May for the academic year
                beginning in September.
              </p>
            </div>
          </div>

          {/* How to Apply */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
            <div
              className="bg-cover bg-center py-24 md:py-32 relative"
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/join_2.jpg)`,
                backgroundAttachment: "fixed",
              }}
            >
            </div>
            <div className="p-8 md:p-12">
              <h3 className="text-3xl font-semibold text-gray-800 mb-6">
                How to Apply
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                To apply for a position at ALC Mohammedia, please send the
                following documents to the appropriate email address:
              </p>

              {/* Email Links */}
              <div className="text-lg text-gray-700 mb-8">
                <p className="mb-2">
                  <strong>For Local Teachers:</strong>
                  <button className="ml-2 text-sky-500 hover:underline">
                    <a href="mailto:recruitment@alcmohammedia.com">
                      recruitment@alcmohammedia.com
                    </a>
                  </button>
                </p>
                <p className="mb-4">
                  <strong>For International Teachers:</strong>
                  <button className="ml-2 text-sky-500 hover:underline">
                    <a href="mailto:recruit.nest@alcmohammedia.com">
                      recruit.nest@alcmohammedia.com
                    </a>
                  </button>
                </p>
              </div>

              {/* Application Steps */}
              <ul className="text-lg text-gray-700 space-y-10">
                {[
                  {
                    number: "1.",
                    title: "Resume",
                    description:
                      "Submit your CV in PDF format, clearly identifying the issuer of your TEFL/TESOL certification.",
                  },
                  {
                    number: "2.",
                    title: "Passport / CIN Card",
                    description:
                      "Foreign nationals should submit a scanned copy of the passport's name/photo page. Moroccan nationals should submit a copy of their CIN card.",
                  },
                  {
                    number: "3.",
                    title: "Cover Letter",
                    description:
                      "A PDF cover letter describing your teaching approach, relevant experience, and reasons for wanting to work at ALC Mohammedia. Foreign nationals should also include their motivation to live in Morocco.",
                  },
                  {
                    number: "4.",
                    title: "References",
                    description:
                      "Provide letters of reference (PDF format) from your university or past employers, including your last job.",
                  },
                  {
                    number: "5.",
                    title: "Diplomas / Certificates",
                    description:
                      "Submit scanned copies (JPEG or PDF) of your university diploma(s) and TEFL/TESOL certificate(s).",
                  },
                ].map((item, index) => (
                  <li key={index} className="relative pl-16">
                    <span className="absolute left-0 top-0 text-6xl font-bold text-sky-500">
                      {item.number}
                    </span>
                    <strong>{item.title}:</strong> {item.description}
                  </li>
                ))}
              </ul>
              <br />

              <p className="text-lg text-gray-700 mt-8">
                Please note: Foreign candidates must arrive with a criminal
                history background report issued no more than 60 days prior to
                arrival. Additionally, original copies of your diplomas and
                certificates are required upon arrival.
              </p>
              <p className="text-lg text-gray-700 mt-4">
                For more information on how to obtain a criminal background
                report, please visit:
                <a
                  href="https://www.fbi.gov/how-we-can-help-you/more-fbi-services-and-information/identity-history-summary-checks"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-500 hover:underline ml-1"
                >
                  FBI Identity History Summary Checks
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <BackToTopButton />
    </div>
  );
};

export default Join;
