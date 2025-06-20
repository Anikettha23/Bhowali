"use client";
import React from "react";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedin, FaPinterest, FaQuora, FaYoutube } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { SlSocialTwitter } from "react-icons/sl";

const Footer = () => {
  const socialLinks = [
    { href: "https://www.facebook.com/people/Estate-Avenues/61563536782403/", icon: FaFacebookF },
    { href: "https://www.instagram.com/estateavenues/", icon: FaInstagram },
    { href: "https://x.com/estate_avenues", icon: SlSocialTwitter },
    { href: "https://www.linkedin.com/company/estate-avenues", icon: FaLinkedin },
    { href: "https://in.pinterest.com/promotionestateavenues/", icon: FaPinterest },
    { href: "https://www.youtube.com/@estateavenues", icon: FaYoutube },
    { href: "https://www.quora.com/profile/Estate-Avenues-1", icon: FaQuora },
  ];

  const services = [
    { href: "/blogs", label: "Blogs" },
    { href: "/press-coverage", label: "Press Coverage" },
    { href: "/realtors", label: "Become A Realtor" },
    { href: "/lead-generation", label: "Lead Generation" },
    { href: "/crm", label: "CRM Software" },
    { href: "/banking-assistance", label: "Banking Assistance" },
    { href: "/post-sales-services", label: "Post Sales Services" },
    { href: "/post-property", label: "Post Property" },
  ];

  return (
    <footer className="bg-[#3480C3] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-8 lg:py-12 sm:px-6 lg:px-8 flex flex-col lg:flex-row lg:justify-between gap-8">
        {/* About Us Section */}
        <div className="lg:max-w-[25%]">
          <Link href="/about-us" target="_blank">
            <h3 className="text-xl font-bold mb-4 uppercase">About Us</h3>
          </Link>
          <div className="w-24 h-[1px] bg-white mb-6"></div>
          <p className="text-base leading-relaxed">
            Estate Avenues is a comprehensive platform designed to support real estate professionals and businesses.
            Established with an aim to redefine the real estate landscape by providing a variety of services that enhance the real estate experience for stakeholders.
          </p>
        </div>

        {/* Business Solutions Section */}
        <div className="text-center lg:text-left">
          <Link href="/business-solutions" target="_blank">
            <h3 className="text-xl font-bold mb-4 uppercase">Business Solutions</h3>
          </Link>
          <div className="w-24 lg:w-56 h-[1px] bg-white mb-6 mx-auto lg:mx-0"></div>
          <ul className="space-y-2">
            {services.map((service) => (
              <li key={service.href}>
                <Link href={service.href} target="_blank" className="hover:underline text-base">
                  {service.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <Link href="/contact-us" target="_blank">
            <h3 className="text-xl font-bold mb-4 uppercase">Contact Us</h3>
          </Link>
          <div className="w-[110px] h-[1px] bg-white mb-6"></div>
          <address className="not-italic space-y-4">
            <p>
              Ninex City Mart, Office No. 4 & 5,<br />
              Sector 49, Gurgaon, Haryana,<br />
              122018
            </p>
            <div className="flex items-center space-x-2">
              <MdEmail className="text-lg" />
              <span>info@estateavenues.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <IoIosCall className="text-lg" />
              <span>+91 98188 37873</span>
            </div>
            <div className="flex gap-4 mt-4">
              {socialLinks.map((social, index) => (
                <Link key={index} href={social.href} target="_blank" className="hover:text-gray-200">
                  <social.icon size={20} />
                </Link>
              ))}
            </div>
          </address>
        </div>

        {/* Location Section */}
        <div>
          <h3 className="text-xl font-bold mb-4 uppercase">Location</h3>
          <div className="w-24 h-[1px] bg-white mb-6"></div>
          <div className="bg-white rounded-md shadow-md p-1">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.089306435169!2d77.0386686398465!3d28.416561993956343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d233cdeec2d81%3A0xaf6144fd2d8f2f4f!2sIREED%20Academy%20-%20Real%20Estate%20%26%20Digital%20Marketing%20Institute!5e0!3m2!1sen!2sin!4v1722594563276!5m2!1sen!2sin"
              width="100%"
              height="240"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Estate Avenues Location"
            />
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="bg-white rounded-t-2xl text-center py-4 text-[#3480C3] text-sm">
        <p>
          All rights reserved for <strong>Estate Avenues</strong>, powered by{" "}
          <Link href="https://www.ireedindia.com" target="_blank" className="hover:underline font-bold">
            IREED Media
          </Link>
        </p>
        <p className="mt-1">
          GST Number: <strong>06AAHCI5289H1Z8</strong>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
