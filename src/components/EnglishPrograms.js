import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const EnglishPrograms = () => {
  const location = useLocation();

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
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-sky-600">
          English Programs
        </h1>
        <p className="text-base md:text-lg text-gray-700 mt-2">
          Explore a World of English Language Excellence
        </p>
      </div>
      <section id="general-english">
        <div
          className="relative bg-cover bg-center py-24 md:py-32 my-16 shadow-lg"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/english_program.jpg)`,
            backgroundAttachment: "fixed",
          }}
          aria-label="General English"
        >
          <div className="absolute inset-0 bg-black opacity-50" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-4 relative z-10">
            General English Courses
          </h2>
        </div>
        <p className="text-black text-base md:text-lg text-center mb-6 max-w-2xl mx-auto px-4">
          Our General English courses are designed to build a strong foundation
          in reading, writing, speaking, and listening. Suitable for learners of
          all levels, these courses focus on practical language use in everyday
          contexts, fostering rapid progress and confidence in communication.
        </p>
      </section>

      <section id="business-english">
        <div
          className="relative bg-cover bg-center py-24 md:py-32 my-16 shadow-lg"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/video-banner.jpg)`,
            backgroundAttachment: "fixed",
          }}
          aria-label="Business English"
        >
          <div className="absolute inset-0 bg-black opacity-50" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-4 relative z-10">
            Business English
          </h2>
        </div>
        <p className="text-black text-base md:text-lg text-center mb-6 max-w-2xl mx-auto px-4">
          For professionals and students seeking to advance their careers or
          academic pursuits, our Business English courses focus on specialized
          vocabulary, business communication skills, and industry-specific
          language use. These courses equip you with the language tools needed
          for success in a global business environment.
        </p>
      </section>

      <section id="conversational-english">
        <div
          className="relative bg-cover bg-center py-24 md:py-32 my-16 shadow-lg"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/alc.jpeg)`,
            backgroundAttachment: "fixed",
          }}
          aria-label="Conversational English"
        >
          <div className="absolute inset-0 bg-black opacity-50" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-4 relative z-10">
            Conversational English
          </h2>
        </div>
        <p className="text-black text-base md:text-lg text-center mb-6 max-w-2xl mx-auto px-4">
          Improve your speaking fluency and cultural understanding through our
          Conversational English classes. These sessions provide a supportive
          environment for engaging in discussions, debates, and interactive
          activities that enhance your conversational skills and confidence.
        </p>
      </section>

      <section id="skill-based-classes">
        <div
          className="relative bg-cover bg-center py-24 md:py-32 my-16 shadow-lg"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/alc.jpeg)`,
            backgroundAttachment: "fixed",
          }}
          aria-label="Skill-Based Classes"
        >
          <div className="absolute inset-0 bg-black opacity-50" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-4 relative z-10">
            Skill-Based Classes
          </h2>
        </div>
        <p className="text-black text-base md:text-lg text-center mb-6 max-w-2xl mx-auto px-4">
          Our skill-based classes are designed to help students enhance their
          English proficiency while learning new and exciting skills. Each class
          focuses on practical application, hands-on learning, and culminates in
          a final performance or exhibition.
        </p>
      </section>
      <section id="academic-english">
        <div
          className="relative bg-cover bg-center py-24 md:py-32 my-16 shadow-lg"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/alc.jpeg)`,
            backgroundAttachment: "fixed",
          }}
          aria-label="Academic English & Research Methodology"
        >
          <div className="absolute inset-0 bg-black opacity-50" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-4 relative z-10">
            Academic English & Research Methodology
          </h2>
        </div>
        <div className="text-black text-base md:text-lg text-center mb-6 max-w-2xl mx-auto px-4">
          <p>
            Our Academic English class is designed specifically for university
            students who seek to enhance their academic writing skills, develop
            a strong understanding of research methodology, and gain proficiency
            in basic statistical analysis.
          </p>
          <h3 className="mt-4 font-bold">Course Objectives:</h3>
          <p>The course focuses on three main areas:</p>
          <ul className="list-disc list-inside">
            <li>
              <strong>Academic Writing Skills:</strong> Develop effective
              academic writing, critical thinking, argumentation, and proper use
              of citations.
            </li>
            <li>
              <strong>Research Methodology:</strong> Learn various research
              methodologies, study design, data collection methods, and ethical
              considerations.
            </li>
            <li>
              <strong>Basic Statistics:</strong> Understand fundamental
              statistical concepts and use statistical software for data
              analysis.
            </li>
          </ul>
          <h3 className="mt-4 font-bold">Course Structure & Duration:</h3>
          <p>
            The course follows a structured approach with lectures, group
            discussions, hands-on activities, and a final research project over
            20 weeks (60 hours).
          </p>
          <h3 className="mt-4 font-bold">Course Instructor:</h3>
          <p>
            Our instructor is a Fulbright Scholar and a Ph.D. candidate in
            Cognitive Science, with expertise in advanced research methods,
            statistical analysis, and R coding.
          </p>
          <h3 className="mt-4 font-bold">Prerequisites:</h3>
          <p>
            This course is open to university students with an
            upper-intermediate level of English proficiency.
          </p>
          <h3 className="mt-4 font-bold">Course Benefits:</h3>
          <p>
            Students will develop advanced academic writing skills, understand
            research methodology, and attain proficiency in basic statistical
            analysis, enhancing their academic and research capabilities.
          </p>
          <p className="mt-4">
            <a
              href="https://docs.google.com/document/d/1vAmSsB_kaJ3fIPqA5lpv2ulIc0fAEltj/edit"
              className="text-blue-500 underline"
            >
              For more information, visit this link.
            </a>
          </p>
        </div>
      </section>

      <section id="exam-preparation">
        <div
          className="relative bg-cover bg-center py-24 md:py-32 my-16 shadow-lg"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/alc.jpeg)`,
            backgroundAttachment: "fixed",
          }}
          aria-label="Exam Preparation"
        >
          <div className="absolute inset-0 bg-black opacity-50" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-4 relative z-10">
            Exam Preparation (TOEFL, TOEIC, and IELTS)
          </h2>
        </div>
        <p className="text-black text-base md:text-lg text-center mb-6 max-w-2xl mx-auto px-4">
          Prepare for international English proficiency exams such as TOEFL,
          TOEIC, and IELTS with our specialized exam preparation courses. These
          programs include intensive training, practice tests, and exam
          strategies tailored to maximize your potential for success. Our
          experienced instructors will guide you through each section of the
          exam, focusing on key skills like reading comprehension, listening,
          speaking, and writing.
        </p>
      </section>

      <section id="baccalaureat-program">
        <div
          className="relative bg-cover bg-center py-24 md:py-32 my-16 shadow-lg"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/alc.jpeg)`,
            backgroundAttachment: "fixed",
          }}
          aria-label="Baccalaureat Program"
        >
          <div className="absolute inset-0 bg-black opacity-50" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-4 relative z-10">
            Baccalaureat Program
          </h2>
        </div>
        <p className="text-black text-base md:text-lg text-center mb-6 max-w-2xl mx-auto px-4">
          Our Baccalaureat Program offers comprehensive English language
          preparation for Moroccan students aiming to excel in their
          baccalaureate exams. These courses cover all necessary English
          language skills and strategies required for academic success. Students
          will engage in interactive lessons that emphasize critical thinking,
          essay writing, and exam techniques specific to the Moroccan
          baccalaureate curriculum.
        </p>
      </section>

      <section id="private-courses">
        <div
          className="relative bg-cover bg-center py-24 md:py-32 my-16 shadow-lg"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/alc.jpeg)`,
            backgroundAttachment: "fixed",
          }}
          aria-label="Private Courses"
        >
          <div className="absolute inset-0 bg-black opacity-50" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-4 relative z-10">
            Private Courses
          </h2>
        </div>
        <p className="text-black text-base md:text-lg text-center mb-6 max-w-2xl mx-auto px-4">
          Enhance your learning experience with personalized Private Courses
          tailored to your specific language needs and schedule. Benefit from
          one-on-one attention and customized lesson plans designed to
          accelerate your language proficiency. Whether you need intensive
          grammar practice, conversation skills improvement, or specialized
          vocabulary training, our private courses are designed to meet your
          individual learning goals.
        </p>
      </section>
    </div>
  );
};

export default EnglishPrograms;
