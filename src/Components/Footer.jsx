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
//       <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
//         {/* Logo & Name */}
//         <aside className="flex flex-col sm:flex-row items-center sm:items-start gap-3 text-center sm:text-left">
//           <div>
//             <h2 className="text-2xl font-bold mb-2">PawMart</h2>
//             <p className="text-gray-200 leading-relaxed text-sm">
//               PawMart is an online platform where local pet owners and buyers
//               can connect with each other. Here, you can adopt pets, find a new
//               home for your own pet, and buy or sell essential pet care
//               products. PawMart’s goal is to create a safe and loving community
//               for all pet lovers.
//             </p>
//           </div>
//         </aside>

//         {/* Useful Links */}
//         <nav className="flex flex-col sm:items-start items-center">
//           <h6 className="text-lg font-semibold mb-3 border-b border-gray-300 pb-1">
//             Useful Links
//           </h6>
//           <a
//             href="/"
//             className="flex items-center gap-2 hover:text-yellow-300 my-1 transition-all"
//           >
//             <FaHome /> Home
//           </a>
//           <a
//             href="/contact"
//             className="flex items-center gap-2 hover:text-yellow-300 my-1 transition-all"
//           >
//             <FaPhoneAlt /> Contact
//           </a>
//           <a
//             href="/terms"
//             className="flex items-center gap-2 hover:text-yellow-300 my-1 transition-all"
//           >
//             <FaFileContract /> Terms & Conditions
//           </a>
//         </nav>

//         {/* Contact & Social */}
//         {/* <div className="flex flex-col sm:items-start items-center">
//           <h6 className="text-lg font-semibold mb-3 border-b border-gray-300 pb-1">
//             Contact
//           </h6>
//           <p className="text-gray-200 text-sm mb-1">
//             101 Independence Avenue, S.E.
//           </p>
//           <p className="text-gray-200 text-sm mb-3">Dhaka, D.C. 20559-6000</p>

//           <div className="flex gap-5 mt-2">
//             <a
//               href="#"
//               className="text-2xl hover:text-yellow-300 transition-all duration-300"
//             >
//               <FaFacebook />
//             </a>
//             <a
//               href="#"
//               className="text-2xl hover:text-yellow-300 transition-all duration-300"
//             >
//               <FaTwitter />
//             </a>
//             <a
//               href="#"
//               className="text-2xl hover:text-yellow-300 transition-all duration-300"
//             >
//               <FaInstagram />
//             </a>
//           </div>
//         </div> */}
//       </div>

//       {/* Bottom Section */}
//       <div className="border-t border-gray-400 text-center py-4 text-sm text-gray-200 bg-[#063b47]/80">
//         <p>
//           © 2025 <span className="font-semibold">PawMart</span>. All rights
//           reserved. <br />
//           Developed by{" "}
//           <span className="text-yellow-300 font-medium">Haridas Sarker</span>.
//         </p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaHome,
  FaPhoneAlt,
  FaFileContract,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#0b5c6b] to-[#0e8a9a] text-white">
      {/* Top Section */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Logo & Description */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-3">
          <h2 className="text-3xl font-extrabold tracking-wide text-yellow-300">
            PawMart
          </h2>
          <p className="text-gray-200 leading-relaxed text-[15px]">
            PawMart is an online platform where local pet owners and buyers can
            connect with each other. Here, you can adopt pets, find a new home
            for your own pet, and buy or sell essential pet care products.
            PawMart’s goal is to create a safe and loving community for all pet
            lovers.
          </p>

          {/* Social Icons */}
          <div className="flex gap-5 mt-4">
            <a
              href="#"
              className="text-2xl hover:text-yellow-300 transition-transform duration-300 hover:scale-110"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              className="text-2xl hover:text-yellow-300 transition-transform duration-300 hover:scale-110"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="text-2xl hover:text-yellow-300 transition-transform duration-300 hover:scale-110"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Useful Links */}
        <div className="flex flex-col items-center md:items-start">
          <h6 className="text-lg font-semibold mb-4 border-b border-gray-300 pb-1">
            Useful Links
          </h6>
          <ul className="space-y-2">
            <li>
              <a
                href="/"
                className="flex items-center gap-2 hover:text-yellow-300 transition-all"
              >
                <FaHome /> Home
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="flex items-center gap-2 hover:text-yellow-300 transition-all"
              >
                <FaPhoneAlt /> Contact
              </a>
            </li>
            <li>
              <a
                href="/terms"
                className="flex items-center gap-2 hover:text-yellow-300 transition-all"
              >
                <FaFileContract /> Terms & Conditions
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-400 text-center py-4 text-sm text-gray-300 bg-[#062f38]/80">
        <p>
          © 2025 <span className="font-semibold text-white">PawMart</span>. All
          rights reserved. <br />
          Developed by{" "}
          <span className="text-yellow-300 font-medium">Haridas Sarker</span>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
