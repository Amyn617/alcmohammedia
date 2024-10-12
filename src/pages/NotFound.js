import NavContact from "../components/NavContact.js";
import NavBar from "../components/NavBar.js";
import Footer from "../components/Footer.js";
import BackToTopButton from "../components/BackToTopButton.js";
import { FaExclamationTriangle } from "react-icons/fa"; // Import an icon for added visual appeal

const NotFound = () => {
  return (
    <div id="top" className="min-h-screen flex flex-col">
      <NavContact />
      <NavBar />
      <div className="flex flex-col items-center justify-center flex-grow bg-gray-100 p-8 md:p-16 lg:p-10">
        {/* Add an icon for visual appeal */}
        <FaExclamationTriangle className="text-red-600 text-8xl" />
        <h1 className="text-7xl font-extrabold text-red-600 mt-4">404</h1>
        <p className="mt-4 text-xl text-gray-700 text-center max-w-md">
          Oops! The page you are looking for does not exist. Please check the URL or return home.
        </p>
        <a
          href="/"
          className="mt-6 px-6 py-3 text-white bg-sky-600 rounded-lg shadow-lg hover:bg-sky-700 transition duration-300 transform hover:scale-105"
        >
          Go to Home
        </a>
      </div>
      <Footer />
      <BackToTopButton />
    </div>
  );
};

export default NotFound;
