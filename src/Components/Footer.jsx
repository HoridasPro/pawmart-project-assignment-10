// import {
//   FaFacebook,
//   FaInstagram,
//   FaTwitter,
//   FaHome,
//   FaPhoneAlt,
//   FaFileContract,
// } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className="bg-gradient-to-r from-[#0b5c6b] to-[#0e8a9a] text-white">
//       {/* Top Section */}
//       <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10">
//         {/* Logo & Description */}
//         <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-3">
//           <h2 className="text-3xl font-extrabold tracking-wide text-yellow-300">
//             PawMart
//           </h2>
//           <p className="text-gray-200 leading-relaxed text-[15px]">
//             PawMart is an online platform where local pet owners and buyers can
//             connect with each other. Here, you can adopt pets, find a new home
//             for your own pet, and buy or sell essential pet care products.
//             PawMart’s goal is to create a safe and loving community for all pet
//             lovers.
//           </p>

//           {/* Social Icons */}
//           <div className="flex gap-5 mt-4">
//             <a
//               href="#"
//               className="text-2xl hover:text-yellow-300 transition-transform duration-300 hover:scale-110"
//             >
//               <FaFacebook />
//             </a>
//             <a
//               href="#"
//               className="text-2xl hover:text-yellow-300 transition-transform duration-300 hover:scale-110"
//             >
//               <FaTwitter />
//             </a>
//             <a
//               href="#"
//               className="text-2xl hover:text-yellow-300 transition-transform duration-300 hover:scale-110"
//             >
//               <FaInstagram />
//             </a>
//           </div>
//         </div>

//         {/* Useful Links */}
//         <div className="flex flex-col items-center md:items-start">
//           <h6 className="text-lg font-semibold mb-4 border-b border-gray-300 pb-1">
//             Useful Links
//           </h6>
//           <ul className="space-y-2">
//             <li>
//               <a
//                 href="/"
//                 className="flex items-center gap-2 hover:text-yellow-300 transition-all"
//               >
//                 <FaHome /> Home
//               </a>
//             </li>
//             <li>
//               <a
//                 href="/contact"
//                 className="flex items-center gap-2 hover:text-yellow-300 transition-all"
//               >
//                 <FaPhoneAlt /> Contact
//               </a>
//             </li>
//             <li>
//               <a
//                 href="/terms"
//                 className="flex items-center gap-2 hover:text-yellow-300 transition-all"
//               >
//                 <FaFileContract /> Terms & Conditions
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>

//       {/* Bottom Section */}
//       <div className="border-t border-gray-400 text-center py-4 text-sm text-gray-300 bg-[#062f38]/80">
//         <p>
//           © 2025 <span className="font-semibold text-white">PawMart</span>. All
//           rights reserved. <br />
//           Developed by{" "}
//           <span className="text-yellow-300 font-medium">Haridas Sarker</span>.
//         </p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
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
