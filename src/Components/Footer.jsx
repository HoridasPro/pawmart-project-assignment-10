import React from "react";
// import footerImg from "../assets/cat.png";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#094359]">
      <div className="footer sm:footer-horizontal  text-base-content p-10 ">
        <aside>
          {/* <img className="w-20" src={footerImg} alt="" /> */}
          <p className="text-2xl text-start">Toy Zone</p>
        </aside>
        <nav>
          <h6 className="footer-title">Brands</h6>
          <a className="link link-hover">NERF</a>
          <a className="link link-hover">Leapfrog</a>
          <a className="link link-hover">Funko</a>
          <a className="link link-hover">Barbie</a>
        </nav>
        <nav>
          <h6 className="footer-title">Categories</h6>
          <a className="link link-hover">Marble runs</a>
          <a className="link link-hover">Science & nature toys</a>
          <a className="link link-hover">Playsets & figures</a>
          <a className="link link-hover">Doll & dollhouses</a>
        </nav>
        <nav>
          <h6 className="footer-title">About Us</h6>
          <a className="link link-hover">Help Center</a>
          <a className="link link-hover">Store Locations</a>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Terms of Conditions</a>
        </nav>
        <nav>
          <h6 className="footer-title">Contact</h6>
          <a className="link link-hover">101 Independence Avenue. S.E.</a>
          <a className="link link-hover">Dhaka. D.C. 20559-6000</a>
          <div className="flex my-2">
            <a className="mx-3 cursor-pointer">
              <FaFacebook />
            </a>
            <a className="mx-3 cursor-pointer">
              <FaTwitter />
            </a>
            <a className="mx-3 cursor-pointer">
              <FaInstagram />
            </a>
          </div>
        </nav>
      </div>
      <p className="text-[12px] text-center pb-5">
        © 2025 A Local Kids Toy Zone. All rights reserved. Developed by Haridas
        Sarker
      </p>
    </footer>
  );
};

export default Footer;
