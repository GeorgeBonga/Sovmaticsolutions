import React, { useState } from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";
import { useDocTitle } from "./CustomHooks";
import  emailjs  from "emailjs-com";
import Notiflix from "notiflix";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faFacebookF,
  faTelegram,
  faTwitter,
  faInstagram,
  faGithub,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import Type from "./Type";

const ContactUs = (props) => {
  useDocTitle("SovMatic |  Solutions - Contact Us");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState([]);
  const [subject, setSubject] = useState("");
  const [isSending, setIsSending] = useState(false);

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!firstName) {
      newErrors.first_name = "First Name is required.";
      isValid = false;
    }

    if (!lastName) {
      newErrors.last_name = "Last Name is required.";
      isValid = false;
    }

    if (!email) {
      newErrors.email = "Email is required.";
      isValid = false;
    }

    if (!phone) {
      newErrors.phone_number = "Phone is required.";
      isValid = false;
    }
    if (!subject) {
      newErrors.subject = "Subject is required.";
      isValid = false;
    }

    if (!message) {
      newErrors.message = "Message is required.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const clearErrors = () => {
    setErrors([]);
  };

  const clearInput = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setSubject("");
    setMessage("");
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    setIsSending(true);

    const templateParams = {
      subject,
      firstName,
      lastName,
      email,
      phone,
      message,
    };

    emailjs.send(
        "service_0mfok1n",
        "template_ys352qi",
        templateParams,
        "ra8Rncy96lQYh4_OE"
      )
      .then((response) => {
        console.log("Email sent successfully!", response);
        Notiflix.Report.success("Success", "Email sent", "Okay");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        Notiflix.Report.failure(
          "An error occurred",
          "Please try sending the message again.",
          "Okay"
        );
      })
      .finally(() => {
        setIsSending(false);
        clearInput();
      });
  };
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="flex justify-center items-center mt-8 w-full bg-white py-12 lg:py-24">
        <div className="container mx-auto my-8 px-4 lg:px-20">
          <form onSubmit={sendEmail} id="demoProductForm">
            <div className="w-full bg-white p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
              <div className="flex">
                <h1 className="font-bold text-center lg:text-left text-blue-900 uppercase text-4xl">
                  <Type />
                </h1>
              </div>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                <div>
                  <input
                    name="first_name"
                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="First Name*"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    onKeyUp={clearErrors}
                  />
                  {errors && (
                    <p className="text-red-500 text-sm">{errors.first_name}</p>
                  )}
                </div>

                <div>
                  <input
                    name="last_name"
                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Last Name*"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    onKeyUp={clearErrors}
                  />
                  {errors && (
                    <p className="text-red-500 text-sm">{errors.last_name}</p>
                  )}
                </div>

                <div>
                  <input
                    name="email"
                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="email"
                    placeholder="Email*"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyUp={clearErrors}
                  />
                  {errors && (
                    <p className="text-red-500 text-sm">{errors.email}</p>
                  )}
                </div>

                <div>
                  <input
                    name="phone_number"
                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Phone*"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    onKeyUp={clearErrors}
                  />
                  {errors && (
                    <p className="text-red-500 text-sm">
                      {errors.phone_number}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <input
                  name="subject"
                  className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  onKeyUp={clearErrors}
                />
                {errors && (
                  <p className="text-red-500 text-sm">{errors.subject}</p>
                )}
              </div>

              <div className="my-4">
                <textarea
                  name="message"
                  placeholder="Message*"
                  className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyUp={clearErrors}
                ></textarea>
                {errors && (
                  <p className="text-red-500 text-sm">{errors.message}</p>
                )}
              </div>
              {/* <div className="my-2 w-1/2 lg:w-2/4">
                <button
                  type="submit"
                  id="submitBtn"
                  className="uppercase text-sm font-bold tracking-wide bg-gray-500 hover:bg-blue-900 text-gray-100 p-3 rounded-lg w-full 
                                    focus:outline-none focus:shadow-outline"
                >
                  Send Message
                </button>
              </div> */}

              <div className="my-2 w-1/2 lg:w-2/4">
              <button
                type="submit"
                id="submitBtn"
                className={`uppercase text-sm font-bold tracking-wide ${
                  isSending ? "bg-gray-500" : "bg-blue-900 hover:bg-blue-900"
                } text-gray-100 p-3 rounded-lg w-full 
                                focus:outline-none focus:shadow-outline`}
                disabled={isSending}
              >
                {isSending ? "Sending..." : "Send Message"}
              </button>
            </div>
            </div>
          </form>
          <div></div>

          <div className="w-full  lg:-mt-96 lg:w-2/6 px-8 py-6 ml-auto bg-blue-900 rounded-2xl">
            <div className="flex flex-col text-white">
              <div className="flex my-4 w-2/3 lg:w-3/4">
                <div className="flex flex-col">
                  <i className="fas fa-map-marker-alt pt-2 pr-2" />
                </div>
                <div className="flex flex-col">
                  <h2 className="text-2xl">Office Address</h2>
                  <p className="text-gray-200">*Physical address coming soon</p>
                </div>
              </div>

              <div className="flex my-4 w-2/3 lg:w-1/2">
                <div className="flex flex-col">
                  <i className="fas fa-phone-alt pt-2 pr-2" />
                </div>

                <div className="flex flex-col">
                  <h2 className="text-2xl">Call Us</h2>
                  <p className="text-gray-200">Tel: 0717544539</p>
                  <p className="text-gray-200">Tel: 0793874880</p>

                  <div className="mt-5">
                    <h2 className="text-2xl">Send an E-mail</h2>
                    <p className="text-gray-200">sovmaticsolutions@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="flex text-blue-900  my-4 w-2/3 lg:w-1/2">
                <ul className="wrapper">
                  <li className="icon twitter">
                    <span className="tooltip">Twitter</span>
                    <a
                      href="https://www.twitter.com/Sovmatic"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>
                        <FontAwesomeIcon icon={faTwitter} />
                      </span>
                    </a>
                  </li>
                  <li className="icon whatsapp">
                    <span className="tooltip">WhatsApp</span>
                    <a
                      href="https://api.whatsapp.com/send?phone=0712345678"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>
                        <FontAwesomeIcon icon={faWhatsapp} />
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};




export default ContactUs;
