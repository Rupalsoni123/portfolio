import React from "react";
import AnimatedWrapper from "./ui/AnimatedWrapper";
import { Download } from "./Icons";
import resume from "../assets/resume.pdf";
import SectionHeading from "./SectionHeading";
import techStack from "../data/techStack";

const About = () => {
  return (
    <div
      name="About"
      className="pt-8 h-full min-h-screen w-full flex items-center bg-gradient-elegant-light dark:bg-gradient-elegant-dark"
    >
      <div className="section justify-between">
        <AnimatedWrapper>
          <div className="text-center mb-16 section-divider">
            <SectionHeading heading="About Me" />
          </div>
        </AnimatedWrapper>
        
        <div className="flex flex-col justify-center w-full px-2 xs:px-4 sm:px-8 md:px-4 lg:px-8 text-gray-800 dark:text-white space-y-8">
          <AnimatedWrapper animateFrom="bottom">
            <div className="content-card floating">
              <div className="flex flex-col lg:flex-row items-start gap-8">
                <div className="flex-1">
                  <h3 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
                    I'm{" "}
                    <span className="text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text animatedHeading">
                      Rupal Soni
                    </span>
                  </h3>
                  <div className="space-y-6 text-gray-700 dark:text-gray-300 font-medium text-justify leading-relaxed">
                    <AnimatedWrapper delay={0.2}>
                      <p className="text-lg">
                        <span className="text-pink-600 dark:text-pink-400 font-semibold">DevOps Engineer</span> based in the beautiful city of Udaipur, Rajasthan, India. Currently contributing to innovative infrastructure solutions at <span className="text-purple-600 dark:text-purple-400 font-semibold">SparkEighteen</span>, where I collaborate with development teams to implement cutting-edge DevSecOps practices and build scalable, secure infrastructure solutions.
                      </p>
                    </AnimatedWrapper>
                    
                    <AnimatedWrapper delay={0.4}>
                      <p className="text-lg">
                        Completed my <span className="text-pink-600 dark:text-pink-400 font-semibold">B.Tech in Computer Science and Engineering</span> in <span className="text-purple-600 dark:text-purple-400 font-semibold">May 2025</span> at Techno India NJR Institute of Technology with a <span className="text-purple-600 dark:text-purple-400 font-semibold">CGPA of 9.40</span>. My academic journey is complemented by hands-on professional experience in cloud computing, infrastructure automation, and database optimization.
                      </p>
                    </AnimatedWrapper>
                    
                    <AnimatedWrapper delay={0.6}>
                      <p className="text-lg">
With <span className="text-pink-600 dark:text-pink-400 font-semibold">2+ years of experience</span> building scalable cloud infrastructure, I specialize in <span className="text-purple-600 dark:text-purple-400 font-semibold">AWS, Kubernetes, Terraform, and GitHub Actions</span>. I design secure CI/CD pipelines, automate infrastructure provisioning with Terraform and Ansible, and implement centralized monitoring with <span className="text-purple-600 dark:text-purple-400 font-semibold">Grafana and Loki</span> — reducing deployment effort by <span className="text-pink-600 dark:text-pink-400 font-semibold">70–80%</span> while strengthening reliability through automated disaster recovery and OIDC-based deployment security.
                      </p>
                    </AnimatedWrapper>
                  </div>
                </div>
                
                <div className="lg:w-80 w-full">
                  <div className="glass-effect rounded-2xl p-6 space-y-4">
                    <h4 className="text-xl font-semibold text-pink-600 dark:text-pink-400 mb-4">Quick Facts</h4>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Location:</span>
                        <span className="font-medium">Udaipur, Rajasthan</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Current Role:</span>
                        <span className="font-medium">DevOps Engineer</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Company:</span>
                        <span className="font-medium">SparkEighteen</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Education:</span>
                        <span className="font-medium">B.Tech CSE</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">CGPA:</span>
                        <span className="font-medium text-purple-600 dark:text-purple-400">9.40</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">CodeChef Rating:</span>
                        <span className="font-medium text-pink-600 dark:text-pink-400">1497</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedWrapper>
          
          <AnimatedWrapper delay={0.8}>
            <div className="content-card">
              <div className="py-4">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                  <div className="flex-shrink-0">
                    <h4 className="text-xl font-bold text-transparent bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text pl-4 border-l-4 border-pink-500">
                      Technologies I Love Working With
                    </h4>
                  </div>
                  <AnimatedWrapper delay={1.0}>
                    <div className="flex-1">
                      <ul className="flex gap-4 flex-wrap justify-start" aria-label="Technologies I work with">
                        {techStack.map(({ id, icon, name }) => {
                          return (
                            <li key={id} className="relative group skill-card">
                              <div className="p-3 bg-gradient-to-br from-pink-50 to-purple-50 dark:from-gray-700 dark:to-gray-800 rounded-xl shadow-md">
                                <span className="block transform transition-transform duration-300 group-hover:scale-110">
                                  {icon}
                                </span>
                              </div>
                              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 scale-0 group-hover:scale-100 transition-all ease-out duration-300 delay-100 z-50">
                                <div className="bg-white dark:bg-gray-800 text-sm text-gray-800 dark:text-gray-300 rounded-lg shadow-lg border border-pink-200 dark:border-purple-600 px-3 py-2 whitespace-nowrap">
                                  {name}
                                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white dark:bg-gray-800 border-l border-t border-pink-200 dark:border-purple-600 rotate-45"></div>
                                </div>
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </AnimatedWrapper>
                </div>
              </div>
            </div>
          </AnimatedWrapper>
          
          <AnimatedWrapper delay={1.2}>
            <div className="text-center py-8">
              <a
                href={resume}
                target="_blank"
                rel="noreferrer"
                download={true}
                className="btn-primary group inline-flex items-center justify-center gap-3 relative"
                aria-label="Download resume"
              >
                <span className="pr-6 sm:pr-0 sm:group-hover:-translate-x-2 sm:transition-transform delay-200 ease-out font-semibold">
                  Download Resume
                </span>
                <span className="absolute right-6 sm:scale-0 transition-all group-hover:scale-100 ease-in delay-200 animate-bounce duration-1000">
                  <Download />
                </span>
              </a>
            </div>
          </AnimatedWrapper>
        </div>
      </div>
    </div>
  );
};

export default About;
