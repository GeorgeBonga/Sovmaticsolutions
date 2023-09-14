import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navlinks = () => {
  return (
    <>
      <HashLink
        className="px-4 font-extrabold text-custom hover:text-blue-900"
        smooth
        to="/#about"
      >
        About
      </HashLink>
      <HashLink
        className="px-4 font-extrabold text-custom hover:text-blue-900"
        smooth
        to="/#services"
      >
        Services
      </HashLink>
      <HashLink
        className="px-4 font-extrabold text-custom  hover:text-blue-900"
        to="/portfolio"
      >
        Projects
      </HashLink>
      <Link
        className="text-white bg-custom hover:bg-blue-900 inline-flex items-center justify-center w-auto px-6 py-3 shadow-xl rounded-xl"
        smooth
        to="/Contactus"
      >
        Contact Us
      </Link>
    </>
  );
};

export default Navlinks;
