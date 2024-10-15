import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
} from "react-icons/fa";

const NavContact = () => {
  return (
    <div className="hidden xl:flex items-center justify-center  bg-blue-900 text-white p-3 text-base">
      <ul className="nav-contact flex gap-28">
        <li className="flex items-center">
          <a
            href="mailto:admin@alcmohammedia.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:text-blue-500 transition"
          >
            <FaEnvelope className="mr-2" /> admin@alcmohammedia.com
          </a>
        </li>
        <li className="flex items-center">
          <a
            href="tel:+212661545636"
            className="flex items-center hover:text-blue-500 transition"
          >
            <i className="fa-solid fa-phone mr-2" />
            +212 661-545636
          </a>
        </li>
        <li className="flex items-center">
          <a
            href="https://www.facebook.com/ALC.Mohammedia/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:text-blue-500 transition"
          >
            <FaFacebook className="mr-2" />
            Facebook
          </a>
        </li>
        <li className="flex items-center">
          <a
            href="https://www.instagram.com/alcmohammedia/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:text-blue-500 transition"
          >
            <FaInstagram className="mr-2" /> Instagram
          </a>
        </li>
        <li className="flex items-center">
          <a
            href="https://maps.app.goo.gl/cyF9dEkNf9ypKHMM7"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:text-blue-500 transition"
          >
            <FaMapMarkerAlt className="mr-2" /> 33 Rue de Damas, Mohammedia
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavContact;
