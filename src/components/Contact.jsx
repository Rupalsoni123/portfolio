import React, { useState } from "react";
import SectionHeading from "./SectionHeading";
import { Person, GMail, Chat, Submit } from "./Icons";
import { validateForm } from "../utils/formValidation";
import AnimatedWrapper from "./ui/AnimatedWrapper";

const Contact = () => {
  const initialFormData = { name: "", email: "", message: "" };
  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

  const initialErrData = { nameError: "", emailError: "", messageError: "" };
  const [errData, setErrData] = useState(initialErrData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear specific error when user starts typing
    if (errData[`${name}Error`]) {
      setErrData({ ...errData, [`${name}Error`]: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const isValid = validateForm(formData, setErrData);
    if (!isValid) {
      setIsSubmitting(false);
      return;
    }

    try {
      const form = new FormData();
      form.append("name", formData.name.trim());
      form.append("email", formData.email.trim());
      form.append("message", formData.message.trim());

      const response = await fetch(import.meta.env.VITE_GETFORM_URL, {
        method: "POST",
        body: form,
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData(initialFormData);
        setErrData(initialErrData);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      name="Contact"
      className="pt-10 h-full min-h-screen w-full flex items-center bg-gradient-elegant-light dark:bg-gradient-elegant-dark"
      aria-labelledby="contact-heading"
    >
      <div className="section">
        <AnimatedWrapper>
          <div className="text-center mb-16 section-divider">
            <SectionHeading
              heading="Let's Connect"
              secondHeading="I'd love to hear from you. Send me a message and I'll respond as soon as possible."
            />
          </div>
        </AnimatedWrapper>
        
        {submitStatus === 'success' && (
          <AnimatedWrapper>
            <div className="mb-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-700 text-green-800 dark:text-green-300 rounded-2xl shadow-lg" role="alert">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Message Sent Successfully!</h4>
                  <p className="text-sm opacity-90">Thank you for reaching out. I'll get back to you within 24 hours.</p>
                </div>
              </div>
            </div>
          </AnimatedWrapper>
        )}
        
        {submitStatus === 'error' && (
          <AnimatedWrapper>
            <div className="mb-8 p-6 bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 border border-red-200 dark:border-red-700 text-red-800 dark:text-red-300 rounded-2xl shadow-lg" role="alert">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Oops! Something went wrong</h4>
                  <p className="text-sm opacity-90">Please try again or contact me directly at rupalsoni518@gmail.com</p>
                </div>
              </div>
            </div>
          </AnimatedWrapper>
        )}
        
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Contact Information */}
          <AnimatedWrapper animateFrom="left">
            <div className="content-card h-full flex flex-col">
              <h3 className="text-2xl font-bold text-transparent bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text mb-6">
                Get In Touch
              </h3>
              <div className="flex-1 flex flex-col">
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-8">
                  I'm always excited to discuss new opportunities, collaborate on interesting projects, or simply connect with fellow tech enthusiasts. Whether you have a question about DevOps, want to discuss a potential collaboration, or just want to say hello, I'd love to hear from you!
                </p>
                
                <div className="space-y-6 flex-1 flex flex-col justify-end">
                  <div className="flex items-center gap-4 p-4 bg-pink-50 dark:bg-gray-700 rounded-xl">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                      <GMail className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-white">Email</h4>
                      <a href="mailto:rupalsoni518@gmail.com" className="text-pink-600 dark:text-pink-400 hover:underline">
                        rupalsoni518@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-purple-50 dark:bg-gray-700 rounded-xl">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-white">LinkedIn</h4>
                      <a href="https://linkedin.com/in/rupal-soni-ba2754228" target="_blank" rel="noopener noreferrer" className="text-purple-600 dark:text-purple-400 hover:underline">
                        Connect with me
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-indigo-50 dark:bg-gray-700 rounded-xl">
                    <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-white">GitHub</h4>
                      <a href="https://github.com/rupalsoni123" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 hover:underline">
                        View my projects
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedWrapper>

          {/* Contact Form */}
          <AnimatedWrapper animateFrom="right">
            <div className="content-card h-full flex flex-col">
              <h3 className="text-2xl font-bold text-transparent bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text mb-6">
                Send Message
              </h3>
              
              <form
                onSubmit={handleSubmit}
                className="flex-1 flex flex-col"
                aria-label="Contact form"
                noValidate
              >
                <div className="flex-1 space-y-6">
                  <AnimatedWrapper delay={0.1}>
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Your Name *
                      </label>
                      <div className="relative">
                        <input
                          id="name"
                          type="text"
                          name="name"
                          placeholder="Enter your full name"
                          className={`form-input pl-12 ${
                            errData.nameError !== "" ? "border-red-400 focus:border-red-400" : "border-pink-200 dark:border-purple-600 focus:border-pink-400 dark:focus:border-purple-400"
                          }`}
                          value={formData.name}
                          onChange={handleChange}
                          aria-required="true"
                          aria-invalid={errData.nameError !== ""}
                          aria-describedby={errData.nameError ? "name-error" : undefined}
                          disabled={isSubmitting}
                        />
                        <FormIcon name="person" />
                      </div>
                      <ErrorBox message={errData.nameError} id="name-error" />
                    </div>
                  </AnimatedWrapper>
                  
                  <AnimatedWrapper delay={0.2}>
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Email Address *
                      </label>
                      <div className="relative">
                        <input
                          id="email"
                          type="email"
                          name="email"
                          placeholder="Enter your email address"
                          className={`form-input pl-12 ${
                            errData.emailError !== "" ? "border-red-400 focus:border-red-400" : "border-pink-200 dark:border-purple-600 focus:border-pink-400 dark:focus:border-purple-400"
                          }`}
                          value={formData.email}
                          onChange={handleChange}
                          aria-required="true"
                          aria-invalid={errData.emailError !== ""}
                          aria-describedby={errData.emailError ? "email-error" : undefined}
                          disabled={isSubmitting}
                        />
                        <FormIcon name="gmail" />
                      </div>
                      <ErrorBox message={errData.emailError} id="email-error" />
                    </div>
                  </AnimatedWrapper>

                  <AnimatedWrapper delay={0.3}>
                    <div className="space-y-2 flex-1 flex flex-col">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Your Message *
                      </label>
                      <div className="relative flex-1 flex flex-col">
                        <textarea
                          id="message"
                          name="message"
                          placeholder="Tell me about your project, question, or just say hello..."
                          className={`form-input pl-12 resize-none flex-1 min-h-[140px] ${
                            errData.messageError !== "" ? "border-red-400 focus:border-red-400" : "border-pink-200 dark:border-purple-600 focus:border-pink-400 dark:focus:border-purple-400"
                          }`}
                          value={formData.message}
                          onChange={handleChange}
                          aria-required="true"
                          aria-invalid={errData.messageError !== ""}
                          aria-describedby={errData.messageError ? "message-error" : undefined}
                          disabled={isSubmitting}
                        />
                        <FormIcon name="chat" />
                      </div>
                      <ErrorBox message={errData.messageError} id="message-error" />
                    </div>
                  </AnimatedWrapper>
                </div>

                <AnimatedWrapper delay={0.4}>
                  <button 
                    type="submit"
                    className={`btn-primary w-full group mt-6 ${
                      isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                    aria-label="Submit contact form"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-3">
                        <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
                        Sending Message...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-3">
                        Send Message
                        <span className="scale-0 group-hover:scale-100 transition-all duration-300 ease-in-out">
                          <Submit />
                        </span>
                      </span>
                    )}
                  </button>
                </AnimatedWrapper>
              </form>
            </div>
          </AnimatedWrapper>
        </div>
       </div> 
    </section>
  );
};

export default Contact;

const FormIcon = ({ name }) => {
  return (
    <span
      className={`absolute left-4 text-pink-500 dark:text-purple-400 ${
        name === "chat" ? "top-4" : "top-1/2 -translate-y-1/2"
      }`}
      aria-hidden="true"
    >
      {name === "person" && <Person />}
      {name === "gmail" && <GMail />}
      {name === "chat" && <Chat />}
    </span>
  );
};

const ErrorBox = ({ message, id }) => {
  return message ? (
    <div className="text-sm text-red-500 dark:text-red-400 px-1 flex items-center gap-2" role="alert" id={id}>
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      {message}
    </div>
  ) : (
    <div className="text-sm h-5"></div>
  );
};