"use client";
// Import necessary modules and components
import { useState } from 'react';
import GithubIcon from "../../public/github-icon.svg";
import LinkedinIcon from "../../public/linkedin-icon.svg";
import LeetcodeIcon from "../../public/leetcode-icon.png";
import GeeksforgeeksIcon from "../../public/geeksforgeeks-icon.svg";
import WhatsAppIcon from "../../public/whatsapp-icon.svg";
import Image from "next/image";
import './EmailSections.css'

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    console.log(data);
    const endpoint = "/api/send";
    console.log(endpoint);

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`Failed to send email: ${response.statusText}`);
      }

      const resData = await response.json();
      console.log(resData);

      if (response.status === 200) {
        console.log("Message sent.");
        setEmailSubmitted(true);
      }
    } catch (error) {
      console.error("Error sending email:", error.message);
      setEmailSubmitted(false);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <a
            href="https://github.com/shaileshsiingh"
            target="_blank"
            rel="noopener noreferrer"
            className="tooltip"
            data-tooltip="GitHub"
          >
            <Image src={GithubIcon} alt="GitHub Icon" />
          </a>
          <a
            href="https://linkedin.com/in/shaileshsiingh"
            target="_blank"
            rel="noopener noreferrer"
            className="tooltip"
            data-tooltip="LinkedIn"
          >
            <Image src={LinkedinIcon} alt="LinkedIn Icon" />
          </a>
          <a
            href="https://leetcode.com/shaileshsiingh"
            target="_blank"
            rel="noopener noreferrer"
            className="tooltip"
            data-tooltip="LeetCode"
          >
            <Image src={LeetcodeIcon} alt="LeetCode Icon" />
          </a>
          <a
            href="https://www.geeksforgeeks.org/user/shaileshsiingh/"
            target="_blank"
            rel="noopener noreferrer"
            className="tooltip"
            data-tooltip="GeeksforGeeks"
          >
            <Image src={GeeksforgeeksIcon} alt="GeeksforGeeks Icon" />
          </a>
          <a
            href="https://wa.me/7987555461"
            target="_blank"
            rel="noopener noreferrer"
            className="tooltip"
            data-tooltip="WhatsApp"
          >
            <Image src={WhatsAppIcon} alt="WhatsApp Icon" />
          </a>
        </div>
      </div>
      <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">
            Email sent successfully!
          </p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="jacob@google.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Just saying hi"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
              />
            </div>
            <button
              type="submit"
              className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
