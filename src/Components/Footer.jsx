import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-12">
      <div className="max-w-[1380px] mx-auto px-4 md:px-0 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About / Logo */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">PawMart</h2>
          <p className="text-gray-400">
            Your one-stop platform for pets, supplies, and adoption.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-indigo-500">
                Home
              </Link>
            </li>
            <li>
              <Link to="/addListing" className="hover:text-indigo-500">
                Add Listing
              </Link>
            </li>
            <li>
              <Link to="/myListings" className="hover:text-indigo-500">
                My Listings
              </Link>
            </li>
            <li>
              <Link to="/petsAndSupplies" className="hover:text-indigo-500">
                Pets & Supplies
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-indigo-500">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Contact</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Email: horidassarker6@gmail.com</li>
            <li>Phone: +880 172 486 1584</li>
            <li>Address: Savar, Dhaka, Bangladesh</li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com/horidas.sarker.1"
              className="hover:text-indigo-500"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://www.instagram.com/horidassagor/"
              className="hover:text-indigo-500"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/haridas-sarker-658970288/"
              className="hover:text-indigo-500"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-400 text-center py-4 text-sm text-gray-300 bg-[#062f38]/80">
        <p>
          © 2025 <span className="font-semibold text-white">PawMart</span>. All
          rights reserved. <br />
          Developed by
          <span className="text-yellow-300 font-medium"> Haridas Sarker</span>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
