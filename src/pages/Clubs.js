import NavContact from "../components/NavContact";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import BackToTopButton from "../components/BackToTopButton";

const Clubs = () => {
  return (
    <div id="top">
      <NavContact />
      <NavBar />
      <section className="bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="container mx-auto p-6 md:p-20">
          {/* Header */}
          <div className="text-center mb-10 md:mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-sky-500 text-center">
              Explore Our Clubs
            </h1>
            <p className="text-lg text-gray-700 mt-4">
              Get involved in exciting extracurricular activities at ALC
              Mohammedia.
            </p>
          </div>

          {/* Music Club */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
            <div
              className="bg-cover bg-center py-24 md:py-32 relative"
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/music_club.jpg)`,
                backgroundAttachment: "fixed",
              }}
            ></div>
            <div className="p-8">
              <h3 className="text-3xl font-semibold text-gray-800 mb-6">
                Music Club
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                The ALC Mohammedia Music Club is the perfect place for students
                who are passionate about music. Whether you're a singer,
                musician, or simply love music, this club offers a platform to
                explore your talents and connect with fellow music enthusiasts.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Members of the Music Club get to participate in jam sessions,
                live performances, and music workshops that enhance their skills
                and expand their knowledge of different musical genres.
              </p>
              <ul className="list-disc list-inside text-lg text-gray-700 mb-6">
                <li>Regular jam sessions and rehearsals</li>
                <li>Live performances at ALC events</li>
                <li>Music workshops and collaborations</li>
              </ul>
              <p className="text-lg text-gray-700 mb-6">
                No matter your skill level, all are welcome to join and be part
                of the ALC music community.
              </p>
            </div>
          </div>

          {/* Theater Club */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
            <div
              className="bg-cover bg-center py-24 md:py-32 relative"
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/theater_club.jpg)`,
                backgroundAttachment: "fixed",
              }}
            ></div>
            <div className="p-8">
              <h3 className="text-3xl font-semibold text-gray-800 mb-6">
                Theater Club
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                The ALC Mohammedia Theater Club provides an opportunity for
                students to explore the world of acting, directing, and stage
                production. Whether you're a seasoned actor or a beginner,
                you'll have the chance to learn, perform, and express yourself
                through dramatic arts.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                The Theater Club organizes plays, improv sessions, and acting
                workshops that allow members to hone their theatrical skills and
                gain confidence in their performances.
              </p>
              <ul className="list-disc list-inside text-lg text-gray-700 mb-6">
                <li>Acting workshops and improv sessions</li>
                <li>Opportunities to perform in plays</li>
                <li>
                  Collaborative environment for aspiring actors and directors
                </li>
              </ul>
              <p className="text-lg text-gray-700 mb-6">
                If you're passionate about the performing arts, this is the club
                for you!
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

export default Clubs;
