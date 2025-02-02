import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
  FaLinkedin,
} from "react-icons/fa";

const NavContact = () => {
  return (
    <div className="hidden xl:flex items-center justify-center bg-blue-900 text-white py-3 text-base">
      <ul className="nav-contact flex gap-12 2xl:gap-28">
        <li className="flex items-center">
          <a
            href="https://maps.app.goo.gl/cyF9dEkNf9ypKHMM7"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:text-blue-300 transition"
          >
            <FaMapMarkerAlt className="mr-2" /> 33 Rue de Damas, Mohammedia
          </a>
        </li>
        <li className="flex items-center">
          <a
            href="tel:+212661545636"
            className="flex items-center hover:text-blue-300 transition"
          >
            <i className="fa-solid fa-phone mr-2" />
            +212 661-545636
          </a>
        </li>
        <li className="flex items-center">
          <a
            href="mailto:admin@alcmohammedia.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:text-blue-300 transition"
          >
            <FaEnvelope className="mr-2" /> admin@alcmohammedia.com
          </a>
        </li>
        <li className="flex items-center">
          <a
            href="https://linktr.ee/alcmohammedia"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:text-blue-300 transition"
          >
            <i className="fa-solid fa-link mr-2"></i>All Links
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavContact;
