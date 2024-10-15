import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const FrenchPrograms = () => {
  const location = useLocation();

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

  useEffect(() => {
    const scrollToElement = () => {
      if (location.hash) {
        const element = document.querySelector(location.hash);
        if (element) {
          const viewportHeight = window.innerHeight;

          const elementRect = element.getBoundingClientRect();
          const offset = viewportHeight / 2;
          const scrollPosition =
            window.scrollY + elementRect.top - offset + elementRect.height / 2;
          window.scrollTo({ top: scrollPosition, behavior: "smooth" });
        }
      }
    };

    scrollToElement();

    const handleHashChange = () => {
      scrollToElement();
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [location]);

  return (
    <div className="bg-gray-100 py-12">
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-sky-500">
          French Programs
        </h1>
        <p className="text-base md:text-lg text-gray-700 mt-2">
          Explore a World of French Language Excellence
        </p>
      </div>

      <section id="general-french">
        <div
          className="relative bg-cover bg-center py-24 md:py-32 my-16 shadow-lg"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/fr_1.jpg)`,
            backgroundAttachment: "fixed",
            backgroundPosition: `center ${scrollY * -0.1}px`,
          }}
          aria-label="General French"
        >
          <div className="absolute inset-0 bg-black opacity-50" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-4 relative z-10">
            General French
          </h2>
        </div>
        <p className="text-black text-base md:text-lg mb-6 max-w-4xl mx-auto px-10 text-justify">
          Our General French program is designed for learners of all levels,
          focusing on developing foundational skills in reading, writing,
          speaking, and listening. Classes emphasize interactive learning and
          practical usage of the language, making it ideal for students looking
          to enhance their everyday communication skills and cultural
          understanding.
        </p>
      </section>

      <section id="professional-french">
        <div
          className="relative bg-cover bg-center py-24 md:py-32 my-16 shadow-lg"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/fr_2.jpg)`,
            backgroundAttachment: "fixed",
            backgroundPosition: `center ${scrollY * -0.1}px`,
          }}
          aria-label="Professional French"
        >
          <div className="absolute inset-0 bg-black opacity-50" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-4 relative z-10">
            Professional French
          </h2>
        </div>
        <p className="text-black text-base md:text-lg mb-6 max-w-4xl mx-auto px-10 text-justify">
          The Professional French program caters to individuals aiming to
          improve their language skills for the workplace. This course covers
          business vocabulary, formal communication, and essential skills for
          various professional contexts. Participants will engage in
          role-playing, case studies, and industry-specific terminology to build
          confidence in their professional interactions.
        </p>
      </section>

      <section id="communication-french">
        <div
          className="relative bg-cover bg-center py-24 md:py-32 my-16 shadow-lg"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/fr_3.jpg)`,
            backgroundAttachment: "fixed",
            backgroundPosition: `center ${scrollY * -0.1}px`,
          }}
          aria-label="Communication: Oral/Written"
        >
          <div className="absolute inset-0 bg-black opacity-50" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-4 relative z-10">
            Communication: Oral/Written
          </h2>
        </div>
        <p className="text-black text-base md:text-lg mb-6 max-w-4xl mx-auto px-10 text-justify">
          Our Communication program focuses on enhancing both oral and written
          French proficiency. Through dynamic exercises and discussions,
          students will improve their fluency and comprehension, honing their
          ability to express ideas clearly and effectively. This program is
          suitable for anyone looking to elevate their communication skills in a
          French-speaking environment.
        </p>
      </section>

      <section id="exam-preparation-french">
        <div
          className="relative bg-cover bg-center py-24 md:py-32 my-16 shadow-lg"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/fr_4.jpg)`,
            backgroundAttachment: "fixed",
            backgroundPosition: `center ${scrollY * -0.1}px`,
          }}
          aria-label="Exam Preparation (DELF B1 - B2, DALF, and TCF)"
        >
          <div className="absolute inset-0 bg-black opacity-50" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-4 relative z-10">
            Exam Preparation (DELF B1 - B2, DALF, and TCF)
          </h2>
        </div>
        <p className="text-black text-base md:text-lg mb-6 max-w-4xl mx-auto px-10 text-justify">
          Our Exam Preparation program is tailored for students aiming to take
          the DELF B1, DELF B2, DALF, or TCF exams. This course provides
          comprehensive review materials, practice tests, and strategies for
          success. Instructors will guide students through the exam format,
          helping them to build the necessary skills and confidence to achieve
          their desired scores.
        </p>
      </section>

      <section id="regional-french">
        <div
          className="relative bg-cover bg-center py-24 md:py-32 my-16 shadow-lg"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/fr_5.jpg)`,
            backgroundAttachment: "fixed",
            backgroundPosition: `center ${scrollY * -0.1}px`,
          }}
          aria-label="Regional French (6th Year High School)"
        >
          <div className="absolute inset-0 bg-black opacity-50" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-4 relative z-10">
            Regional French (6th Year High School)
          </h2>
        </div>
        <p className="text-black text-base md:text-lg mb-6 max-w-4xl mx-auto px-10 text-justify">
          The Regional French program is specifically designed for 6th-year high
          school students. This course focuses on cultural aspects of the
          Francophone world while reinforcing grammar and vocabulary. Students
          will explore regional dialects, traditions, and literature, enriching
          their understanding of the diverse French-speaking communities.
        </p>
      </section>

      <section id="french-middle-school">
        <div
          className="relative bg-cover bg-center py-24 md:py-32 my-16 shadow-lg"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/fr_6.jpg)`,
            backgroundAttachment: "fixed",
            backgroundPosition: `center ${scrollY * -0.1}px`,
          }}
          aria-label="French (9th Year Middle School)"
        >
          <div className="absolute inset-0 bg-black opacity-50" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-4 relative z-10">
            French (9th Year Middle School)
          </h2>
        </div>
        <p className="text-black text-base md:text-lg mb-6 max-w-4xl mx-auto px-10 text-justify">
          Our 9th Year Middle School French program offers a comprehensive
          introduction to the language for younger learners. The curriculum
          includes interactive activities, games, and projects to engage
          students and foster a love for the French language. Emphasis is placed
          on foundational skills, preparing students for future language studies
          and cultural exploration.
        </p>
      </section>
    </div>
  );
};

export default FrenchPrograms;
