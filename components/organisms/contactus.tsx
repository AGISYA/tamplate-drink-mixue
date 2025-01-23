"use client";
import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

const Contact = () => {
  const { ref } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div>
      <div className="text-[#1b3b34] p-6 bg-white">
        <div className="flex flex-col md:flex-row h-screen overflow-hidden">
          {/* Left: Google Maps */}
          <div className="w-full md:w-1/2 h-full mb-6 mt-14 md:mb-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63336.19801941607!2d107.8533808!3d-7.2153724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68b1d24f10a22d%3A0xec8e83f727c67d21!2sToko%20Kue%20Ayu%20Ayu!5e0!3m2!1sen!2sid!4v1673449000000!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>

          {/* Right: Contact Information */}
          <div className="w-full  md:w-1/2 pl-6 mt-10 md:mt-0 flex flex-col justify-center">
            <h2 className="text-xl font-medium mb-2 text-[#1b3b34]">
              Information
            </h2>
            <h1 className="text-3xl font-semibold mb-4">Contact Us</h1>
            <p className="mb-4">
              If you have any questions or problems, simply use the following
              contact details:
            </p>
            <div className="mb-4 flex items-center">
              <div className="text-white bg-[#1b3b34] p-3 rounded-full mr-3">
                <FaMapMarkerAlt className="text-3xl" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Main Office</h3>
                <p>Jl. Ahmad Yani no.1, Garut, Jawa Barat, Indonesia</p>
              </div>
            </div>
            <div className="mb-4 flex items-center">
              <div className="text-white bg-[#1b3b34] p-3 rounded-full mr-3">
                <FaPhone className="text-3xl" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Contact Number</h3>
                <p>+62 8128 008 0275</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="text-white bg-[#1b3b34] p-3 rounded-full mr-3">
                <FaEnvelope className="text-3xl" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Email</h3>
                <p>info@webekspor.com</p>
              </div>
            </div>
          </div>
        </div>

        <section
          ref={ref}
          className="relative h-screen bg-fixed bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/images/Red Typography Coming Soon Template (Instagram Post) (2).png')",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          <div className=" mt-20 md:mt-0 relative flex flex-col lg:flex-row justify-around items-center py-16 text-white container mx-auto h-full">
            <div className="flex flex-col items-center">
              <h2 className="md:text-5xl text-2xl text-center font-bold">
                Got questions? Please Contact us!
              </h2>
              <p className="text-lg mt-2">Reach us through</p>

              <a
                href="https://wa.me/yourphonenumber"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 px-6 py-3 bg-green-500 text-white font-semibold rounded-full shadow-lg hover:bg-green-600 transition-all"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
