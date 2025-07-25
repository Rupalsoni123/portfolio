import React from "react";
import { GMail, Map, CopyRight, ArrowRightLong } from "./Icons";
import { Link } from "react-scroll";
import navLinks from "../data/navlinks";
import contactInfo from "../data/contactInfo";
import AnimatedWrapper from "./ui/AnimatedWrapper";

const Footer = () => {
  const year = new Date().getFullYear().toString();
  return (
    <div className="bg-gradient-to-t from-blue-200 via-blue-100 to-gray-100 dark:from-black dark:via-black dark:to-gray-700 w-full text-gray-700 dark:text-gray-300 footer-divider">
      <div className="max-w-screen-lg px-4 xs:px-8 md:px-12 mx-auto py-12">
        <div className="flex flex-wrap justify-between">
          <div className="w-full sm:w-3/5 lg:w-2/5 pr-2 mb-4 lg:mb-0">
            <AnimatedWrapper>
              <div className="p-2">
                <h3 className="text-gray-800 dark:text-white text-xl font-bold pb-2 flex items-center">
                  <span className="w-1.5 h-6 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mr-3"></span>
                  Rupal Soni
                </h3>
                <p className="text-base text-transparent bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text pb-3 font-semibold">DevOps Engineer</p>
                <div className="space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                  <p>Thank you for visiting my portfolio.</p>
                  <p>Connect with me over socials.</p>
                  <p>Have suggestions? Feel free to reach out.</p>
                </div>
              </div>
            </AnimatedWrapper>
          </div>
          
          <div className="w-full xs:w-2/5 sm:w-2/5 lg:w-[30%] sm:pl-16 lg:pl-8 justify-start mb-4 lg:mb-0">
            <AnimatedWrapper>
              <div className="p-2">
                <h3 className="text-gray-800 dark:text-white text-lg font-bold pb-3 flex items-center">
                  <span className="w-1.5 h-5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mr-3"></span>
                  Quick Links
                </h3>
                <nav aria-label="Quick navigation links">
                  {navLinks.map(({ link, id }) => {
                    return (
                      <div key={id} className="group w-fit px-2 mb-1">
                        <Link to={link} smooth duration={500} className="focus:outline-none focus:ring-2 focus:ring-pink-500 rounded">
                          <div className="flex items-center justify-between w-fit gap-2 font-medium text-gray-800 dark:text-white cursor-pointer text-sm">
                            <ArrowRightLong />
                            <span className="bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 group-hover:text-transparent duration-500 group-hover:animate-pulse link-hover">
                              {link}
                            </span>
                          </div>
                        </Link>
                      </div>
                    );
                  })}
                </nav>
              </div>
            </AnimatedWrapper>
          </div>
          
          <div className="w-full xs:w-3/5 sm:w-full lg:w-[30%] lg:pl-0">
            <AnimatedWrapper>
              <div className="p-2">
                <h3 className="text-gray-800 dark:text-white text-lg font-bold pb-3 flex items-center">
                  <span className="w-1.5 h-5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mr-3"></span>
                  Contact Info
                </h3>
                <div className="flex flex-col sm:flex-row lg:flex-col gap-3 xs:gap-6 sm:gap-3 md:gap-6 justify-between">
                  <div className="text-sm font-medium">
                    <p className="flex items-center gap-3 mb-2 text-gray-700 dark:text-gray-300">
                      <GMail />
                      <a href="mailto:rupalsoni518@gmail.com" className="hover:text-pink-600 dark:hover:text-pink-400 transition-colors">
                        rupalsoni518@gmail.com
                      </a>
                    </p>
                    <p className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                      <Map />
                      <span className="pt-1">Udaipur, Rajasthan, India</span>
                    </p>
                  </div>
                  <ul className="flex items-center gap-3 md:gap-4 lg:gap-3 justify-start" aria-label="Social media links">
                    {contactInfo.map(({ id, link, name, icon, download }) => {
                      return (
                        <li
                          key={id}
                          className="group relative w-8 h-8 flex justify-center items-center rounded-full p-1 cursor-pointer duration-[450ms] transition ease-in hover:scale-110 focus:scale-110 active:scale-110 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white"
                        >
                          <a
                            href={link}
                            download={download}
                            target="_blank"
                            rel="noferrer"
                            aria-label={name}
                            className="flex items-center justify-center w-full h-full text-xs"
                          >
                            {icon}
                          </a>
                          <span className="absolute -bottom-8 scale-0 group-hover:scale-100 transition-all duration-200 bg-gray-800 text-white text-xs py-1 px-2 rounded">
                            {name}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </AnimatedWrapper>
          </div>
        </div>
      </div>
      <div className="max-w-screen-lg px-4 xs:px-8 md:px-12 mx-auto py-3 font-medium border-t border-gray-300 dark:border-gray-600">
        <div className="">
          <AnimatedWrapper animateFrom="bottom">
            <p className="text-xs text-gray-700 dark:text-gray-300 flex justify-center items-center">
              <span className="px-1 pb-[0.2rem]">
                <CopyRight />
              </span>
              {`2025- ${year}`} | All Rights Reserved
            </p>
          </AnimatedWrapper>
        </div>
      </div>
    </div>
  );
};

export default Footer;
