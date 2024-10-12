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
            backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/en_1.jpg)`,
            backgroundAttachment: "fixed",
          }}
          aria-label="General English"
        >
          <div className="absolute inset-0 bg-black opacity-50" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-4 relative z-10">
            General English Courses
          </h2>
        </div>
        <p className="text-black text-base md:text-lg mb-6 max-w-4xl mx-auto px-10 text-justify">
          Our General English courses are carefully crafted to provide learners
          with a solid foundation in the four key language skills: reading,
          writing, speaking, and listening. Whether you're a beginner or looking
          to refine your existing skills, these courses are suitable for
          learners of all proficiency levels. With a focus on real-world,
          practical language use, our curriculum emphasizes everyday
          communication scenarios, helping students not only improve their
          grammar and vocabulary but also develop the confidence to engage in
          meaningful conversations. Through interactive lessons, group
          discussions, and immersive activities, students experience rapid
          progress in their language abilities, all while building a strong,
          adaptable foundation for future learning and personal growth.
        </p>
      </section>

      <section id="business-english">
        <div
          className="relative bg-cover bg-center py-24 md:py-32 my-16 shadow-lg"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/en_2.jpg)`,
            backgroundAttachment: "fixed",
          }}
          aria-label="Business English"
        >
          <div className="absolute inset-0 bg-black opacity-50" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-4 relative z-10">
            Business English
          </h2>
        </div>
        <p className="text-black text-base md:text-lg mb-6 max-w-4xl mx-auto px-10 text-justify">
          For professionals and students aiming to enhance their careers or
          academic goals, our Business English courses are tailored to develop
          the specific language skills required in professional settings. These
          courses focus on expanding your business-related vocabulary, honing
          effective communication skills, and mastering industry-specific
          language usage. Whether you're preparing for business meetings,
          presentations, negotiations, or writing professional emails and
          reports, our courses will equip you with the linguistic tools and
          confidence necessary to thrive in a global business environment. By
          the end of the program, you'll be well-prepared to communicate with
          clarity and precision in any professional context, helping you achieve
          success and stand out in your field.
        </p>
      </section>

      <section id="conversational-english">
        <div
          className="relative bg-cover bg-center py-24 md:py-32 my-16 shadow-lg"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/en_3.jpg)`,
            backgroundAttachment: "fixed",
          }}
          aria-label="Conversational English"
        >
          <div className="absolute inset-0 bg-black opacity-50" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-4 relative z-10">
            Conversational English
          </h2>
        </div>
        <p className="text-black text-base md:text-lg mb-6 max-w-4xl mx-auto px-10 text-justify">
          Enhance your speaking fluency and deepen your cultural understanding
          with our Conversational English classes. These sessions offer a
          dynamic and supportive setting where you can actively participate in
          discussions, debates, and interactive activities. You'll practice
          real-life conversations, improve your pronunciation, and gain
          confidence in expressing yourself clearly and naturally. Whether
          you're preparing for travel, social interactions, or professional
          communication, our classes are designed to help you build the skills
          needed for effective and engaging conversations in any context.
        </p>
      </section>

      <section id="skill-based-classes">
        <div
          className="relative bg-cover bg-center py-24 md:py-32 my-16 shadow-lg"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/en_4.jpg)`,
            backgroundAttachment: "fixed",
          }}
          aria-label="Skill-Based Classes"
        >
          <div className="absolute inset-0 bg-black opacity-50" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-4 relative z-10">
            Skill-Based Classes
          </h2>
        </div>
        <p className="text-black text-base md:text-lg mb-6 max-w-4xl mx-auto px-10 text-justify">
          Our Skill-Based Classes are crafted to boost your English proficiency
          while simultaneously developing exciting new skills. Each class
          emphasizes practical application and hands-on learning, ensuring an
          interactive and engaging experience. By focusing on real-world
          scenarios and active participation, these courses help you apply
          language skills in meaningful ways. The journey culminates in a final
          performance, project, or exhibition, allowing you to showcase your
          newfound abilities in both English and the specialized skill area.
        </p>
      </section>
      <section id="academic-english">
        <div
          className="relative bg-cover bg-center py-24 md:py-32 my-16 shadow-lg"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/en_5.jpg)`,
            backgroundAttachment: "fixed",
          }}
          aria-label="Academic English & Research Methodology"
        >
          <div className="absolute inset-0 bg-black opacity-50" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-4 relative z-10">
            Academic English & Research Methodology
          </h2>
        </div>
        <p className="text-black text-base md:text-lg mb-6 max-w-4xl mx-auto px-10 text-justify">
          Our Academic English & Research Methodology course is specifically
          designed for university students seeking to refine their academic
          writing skills, master various research methodologies, and develop
          foundational statistical analysis techniques. This comprehensive
          course not only focuses on enhancing the quality of written
          communication but also equips students with the necessary tools to
          effectively conduct research and critically analyze data. By fostering
          a deep understanding of these essential skills, participants will be
          better prepared to engage with academic literature, participate in
          scholarly discussions, and produce high-quality research outputs. This
          course is an invaluable opportunity for students to enhance their
          research capabilities and improve communication within diverse
          academic environments.
        </p>

        <div className="m-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h4 className="text-2xl font-semibold text-sky-600 mb-4">
                Academic Writing Skills
              </h4>
              <ul className="text-gray-700 list-disc list-inside space-y-2">
                <li>
                  Master essay structuring, paragraph cohesion, and precise
                  academic language.
                </li>
                <li>
                  Develop critical thinking, argumentation, and proper citation
                  techniques.
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h4 className="text-2xl font-semibold text-sky-600 mb-4">
                Research Methodology
              </h4>
              <ul className="text-gray-700 list-disc list-inside space-y-2">
                <li>
                  Learn about various research methods, study design, data
                  collection, and analysis.
                </li>
                <li>
                  Understand ethical considerations and apply research tools.
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h4 className="text-2xl font-semibold text-sky-600 mb-4">
                Basic Statistics
              </h4>
              <ul className="text-gray-700 list-disc list-inside space-y-2">
                <li>
                  Explore fundamental statistics, including hypothesis testing
                  and regression analysis.
                </li>
                <li>
                  Use statistical software for data analysis and interpretation.
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h4 className="text-2xl font-semibold text-sky-600 mb-4">
                Structure & Duration
              </h4>
              <p className="text-gray-700 leading-relaxed">
                The course runs for 20 weeks, with a total of 60 hours of
                instruction. It includes lectures, group discussions, hands-on
                activities, and assignments to ensure a comprehensive learning
                experience.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://docs.google.com/document/d/1vAmSsB_kaJ3fIPqA5lpv2ulIc0fAEltj/edit"
            className="inline-block bg-sky-600 text-white px-6 py-3 rounded-lg font-medium text-lg hover:bg-sky-700 transition duration-300"
          >
            Learn More
          </a>
        </div>
      </section>

      <section id="exam-preparation">
        <div
          className="relative bg-cover bg-center py-24 md:py-32 my-16 shadow-lg"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/en_6.jpg)`,
            backgroundAttachment: "fixed",
          }}
          aria-label="Exam Preparation"
        >
          <div className="absolute inset-0 bg-black opacity-50" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-4 relative z-10">
            Exam Preparation (TOEFL, TOEIC, and IELTS)
          </h2>
        </div>
        <p className="text-black text-base md:text-lg mb-6 max-w-4xl mx-auto px-10 text-justify">
          Prepare for internationally recognized English proficiency exams such
          as TOEFL, TOEIC, and IELTS with our specialized exam preparation
          courses. These comprehensive programs are designed to provide you with
          intensive training, practice tests, and proven exam strategies
          tailored to maximize your potential for success. Under the guidance of
          our experienced instructors, you will navigate each section of the
          exam with confidence, focusing on essential skills such as reading
          comprehension, listening, speaking, and writing. Our courses not only
          cover the specific content and format of each exam but also equip you
          with valuable test-taking techniques to help you manage your time
          effectively and reduce test anxiety. With personalized feedback and
          support, you’ll be well-prepared to achieve your desired score and
          open doors to educational and professional opportunities worldwide.
        </p>
      </section>

      <section id="baccalaureat-program">
        <div
          className="relative bg-cover bg-center py-24 md:py-32 my-16 shadow-lg"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/en_7.jpg)`,
            backgroundAttachment: "fixed",
          }}
          aria-label="Baccalaureat Program"
        >
          <div className="absolute inset-0 bg-black opacity-50" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-4 relative z-10">
            Baccalaureat Program
          </h2>
        </div>
        <p className="text-black text-base md:text-lg mb-6 max-w-4xl mx-auto px-10 text-justify">
          Our Baccalaureat Program provides a thorough English language
          preparation designed specifically for Moroccan students striving to
          excel in their baccalaureate exams. These courses encompass all
          essential language skills and strategies necessary for achieving
          academic success. Through engaging and interactive lessons, students
          will not only improve their proficiency in reading, writing,
          listening, and speaking but also develop critical thinking skills
          essential for higher education. Our curriculum emphasizes essay
          writing and exam techniques tailored to the Moroccan baccalaureate
          framework, ensuring that students are well-prepared for the challenges
          of the exam. Additionally, our experienced instructors offer
          personalized feedback and support to guide each student on their
          learning journey, fostering confidence and competence in their English
          language abilities.
        </p>
      </section>

      <section id="private-courses">
        <div
          className="relative bg-cover bg-center py-24 md:py-32 my-16 shadow-lg"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/en_8.jpg)`,
            backgroundAttachment: "fixed",
          }}
          aria-label="Private Courses"
        >
          <div className="absolute inset-0 bg-black opacity-50" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-4 relative z-10">
            Private Courses
          </h2>
        </div>
        <p className="text-black text-base md:text-lg mb-6 max-w-4xl mx-auto px-10 text-justify">
          Elevate your learning experience with our personalized Private
          Courses, meticulously tailored to address your specific language needs
          and fit seamlessly into your schedule. Enjoy the advantages of
          one-on-one attention, allowing for a focused and engaging learning
          environment. Our customized lesson plans are designed to accelerate
          your language proficiency, ensuring you make significant progress in a
          shorter time frame. Whether you seek intensive grammar practice,
          improvement in conversational skills, or specialized vocabulary
          training for professional or academic contexts, our private courses
          are crafted to meet your individual learning goals. With our dedicated
          instructors by your side, you will receive personalized feedback and
          strategies that empower you to achieve fluency and confidence in your
          language abilities.
        </p>
      </section>
    </div>
  );
};

export default EnglishPrograms;
