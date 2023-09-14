import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import img from '../images/web.svg';
import img2 from '../images/app.svg';
import img3 from '../images/hosting.svg';
import img4 from '../images/consultation.svg';

const ServiceCard = ({ image, title, description }) => (
  <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
    <div className="m-2 text-justify text-sm">
      <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={image} />
      <h2 className="font-semibold my-4 text-2xl text-center">{title}</h2>
      <p className="text-md font-medium">{description}</p>
    </div>
  </div>
);

const Services = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div id="services" className="bg-gray-100 py-12">
      <section data-aos="zoom-in-down">
        <div className="my-4 py-4 text-center">
          <h2 className="text-3xl text-blue-900 uppercase font-bold">services</h2>
          <div className="w-24 border-b-4 border-blue-900 mx-auto"></div>
          <h2 className="mt-4 text-xl lg:text-2xl font-semibold text-blue-900">
            We are deeply committed to the growth and success of our clients.
          </h2>
        </div>

        <div className="px-12" data-aos="fade-down" data-aos-delay="600">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <ServiceCard
              image={img}
              title="Web Development"
              description="We specialize in creating and optimizing high-quality, custom websites for businesses and organizations of all sizes. Building mobile-friendly and easy-to-use websites and applications for clients."
            />

            <ServiceCard
              image={img2}
              title="Mobile App Development"
              description="We develop high-quality, custom cross-platform mobile applications that are robust and optimized for performance, scalability, and accessibility."
            />

            <ServiceCard
              image={img3}
              title="Domain and Hosting Services"
              description="We provide domain registration and web hosting services to individuals and organizations to enable them gain visibility in the digital space."
            />

            <ServiceCard
              image={img4}
              title="General IT Consultations"
              description="Our IT consultations service provides expert guidance and support for businesses and individuals looking to optimize their technology solutions."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
