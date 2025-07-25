import React from "react";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-scroll";

import AnimatedWrapper from "./ui/AnimatedWrapper";

import { ArrowDown } from "./Icons";
import Avatar from "../assets/Avatars/Avatars/93f50dd8-9dec-4f20-ad88-d40acc26dec5.jpg";
import contactInfo from "../data/contactInfo";

const Home = () => {
  const interest = [
    "DevOps Engineering",
    2000,
    "Cloud Architecture",
    2000,
    "Infrastructure Automation",
    2000,
    "Database Optimization",
    2000,
    "Competitive Programming",
    2000,
  ];

  return (
    <div
      name="Home"
      className="pt-8 h-full min-h-screen w-full flex items-center bg-gradient-elegant-light dark:bg-gradient-elegant-dark"
    >
      <div className="section gap-16 md:gap-8 md:justify-between items-center md:flex-row-reverse">
        <div className="flex flex-col justify-center md:w-2/5 max-w-[320px]">
          <AnimatedWrapper delay={0.8} animateFrom="left">
            <div className="avatar-professional mx-auto">
              <img
                src={Avatar}
                alt="Rupal's Professional Avatar"
                width="320"
                height="320"
                loading="eager"
                title="Rupal Soni - DevOps Engineer"
                className="rounded-full w-full shadow-2xl"
              />
            </div>
          </AnimatedWrapper>
        </div>
        <div className="pl-2 xs:pl-8 flex flex-col gap-4 justify-center text-gray-800 dark:text-gray-200 w-max md:w-3/5">
          <AnimatedWrapper delay={0.2}>
            <div className="space-y-2">
              <p className="text-lg xs:text-xl font-medium text-pink-600 dark:text-pink-400 tracking-wide">
                Hello, I'm
              </p>
              <h1 className="text-5xl xs:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text animatedHeading">
                  Rupal Soni
                </span>
              </h1>
              <div className="h-1 w-24 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></div>
            </div>
          </AnimatedWrapper>
          
          <AnimatedWrapper delay={0.35}>
            <div className="space-y-3">
              <p className="text-xl xs:text-2xl font-semibold text-gray-700 dark:text-gray-300">
                Jr. DevOps Engineer
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-lg xs:text-xl font-medium py-2 min-w-[16rem] xs:min-w-[28rem] max-w-[30rem]">
                <span className="block xs:inline">Passionate about </span>
                <span className="text-transparent bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text font-semibold xs:pl-2">
                  <TypeAnimation
                    sequence={interest}
                    speed={1}
                    wrapper="span"
                    cursor={true}
                    repeat={Infinity}
                  />
                </span>
              </p>
            </div>
          </AnimatedWrapper>
          
          <AnimatedWrapper delay={0.45}>
            <div className="glass-effect rounded-2xl p-4 backdrop-blur-sm">
              <ul className="flex items-center z-40 gap-4 md:gap-6 lg:gap-5 justify-start">
                {contactInfo.map(({ id, link, name, icon, download }) => {
                  return (
                    <li
                      key={id}
                      className="group relative min-w-[48px] min-h-[48px] flex justify-center items-center rounded-full p-3 cursor-pointer duration-300 transition-all hover:scale-110 focus-within:scale-110 active:scale-95"
                    >
                      <a
                        href={link}
                        download={download}
                        target="_blank"
                        rel="noferrer"
                        aria-label={name}
                        className="flex items-center justify-center w-full h-full rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        {icon}
                      </a>
                      <div className="flex scale-0 sm:group-hover:scale-100 group-focus-within:scale-100 transition-all ease-out duration-300 delay-100 origin-center justify-center items-center absolute z-50 -bottom-12 w-auto h-8 py-2 px-4 bg-white dark:bg-gray-800 text-sm text-gray-800 dark:text-gray-300 rounded-lg shadow-lg border border-pink-200 dark:border-purple-600">
                        {name}
                        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white dark:bg-gray-800 border-l border-t border-pink-200 dark:border-purple-600 rotate-45"></div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </AnimatedWrapper>
          
          <AnimatedWrapper delay={0.55}>
            <div className="py-6">
              <Link
                to="About"
                smooth
                duration={500}
                className="btn-primary group flex items-center justify-center gap-3 w-48 relative overflow-hidden"
              >
                <span className="pr-6 sm:pr-0 sm:group-hover:-translate-x-2 sm:transition-transform delay-200 ease-out font-semibold">
                  Discover More
                </span>
                <span className="absolute right-6 sm:scale-0 transition-all group-hover:scale-100 ease-in delay-200 animate-bounce duration-1000">
                  <ArrowDown />
                </span>
              </Link>
            </div>
          </AnimatedWrapper>
        </div>
      </div>
    </div>
  );
};

export default Home;
