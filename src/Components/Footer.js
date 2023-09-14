import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faGithub,
  faYoutube,
  faFacebook,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer max-w-full mx-auto px-4 sm:px-6 bg-gray-100 border-t border-b py-30">
          {/* Top area: Blocks */}
          <div className="grid sm:grid-cols-12 gap-5 py-8 md:py-12 border-t border-gray-200 lg:ml-11">
            {/* 1st block */}
            <div className="col-span-12 lg:col-span-4">
              <div className="box-border border-b-4 border-blue-900 p-8 bg-gray-200 text-gray-600 text-center rounded-lg xl:w-80 mx-auto">
                <h3 className="font-bold text-4xl mb-4">SovMatic</h3>
                <div className="text-md font-medium text-gray-600">
                  <h5>Solutions</h5>
                  <h5>Nairobi</h5>
                  <p>2nd Avenue Parklands</p>
                </div>
              </div>
            </div>

            {/* 2nd block */}
            <div className="col-span-6 md:col-span-6 lg:col-span-1 ml-7 mx-auto">
              <h6 className="text-[#013289] text-xl font-bold mb-4">LINKS</h6>
              <ul className="text-md">
                <li className="mb-2">
                  <HashLink
                    to="#"
                    className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    About
                  </HashLink>
                </li>
                <li className="mb-2">
                  <HashLink
                    to="#"
                    className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    Services
                  </HashLink>
                </li>
                <li className="mb-2">
                  <HashLink
                    to="#"
                    className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    Contact
                  </HashLink>
                </li>
              </ul>
            </div>

            {/* 3rd block */}
            <div className="col-span-6 md:col-span-6 lg:col-span-4 mx-auto">
              <h6 className="text-[#013289] text-xl font-bold mb-4">
                OUR SERVICES
              </h6>
              <ul className="text-md">
                <li className="mb-2">
                  <Link
                    to="#"
                    className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    Web Development
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="#"
                    className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    Mobile App Development
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="#"
                    className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    Domain and Hosting
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="#"
                    className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    General IT Consultations
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="#"
                    className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    Business Card design
                  </Link>
                </li>
              </ul>
            </div>

            {/* 4th block */}
            <div className="col-span-12 text-center mx-auto lg:col-span-3 font-bold uppercase text-blue-900">
              <div className="text-xl mb-6">Social Media Links.</div>

              <div className="text-md font-medium mb-6">
                Follow us on social media.
              </div>
              <div className="mx-auto text-center mt-2">
               
                <ul className="wrapper">
                  <li className="icon facebook">
                  <span className="tooltip">Facebook</span>
                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                   
                      <span>
                        <FontAwesomeIcon icon={faFacebookF} />
                      </span>
                    </a>
                  </li>
                  <li className="icon twitter">
                  <span className="tooltip">Twitter</span>
                    <a
                      href="https://www.twitter.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                    
                      <span>
                        <FontAwesomeIcon icon={faTwitter} />
                      </span>
                    </a>
                  </li>
                  <li className="icon instagram">
                  <span className="tooltip">Instagram</span>
                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                    
                      <span>
                        <FontAwesomeIcon icon={faInstagram} />
                      </span>
                    </a>
                  </li>
                  <li className="icon github">
                  <span className="tooltip">Github</span>
                    <a
                      href="https://www.github.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                    
                      <span>
                        <FontAwesomeIcon icon={faGithub} />
                      </span>
                    </a>
                  </li>
                  {/* <li className="icon youtube">
                  <span className="tooltip">Youtube</span>
                    <a
                      href="https://www.youtube.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                     
                      <span>
                        <FontAwesomeIcon icon={faYoutube} />
                      </span>
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center md:justify-between justify-center mx-auto px-4">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center py-2">
              <div className="text-sm text-black-200 font-semibold py-1">
                Copyright &copy; {new Date().getFullYear()}
                {"  "}
                <HashLink to="#" className=" hover:text-gray-900">
                  SovMatic
                </HashLink>
                . All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
