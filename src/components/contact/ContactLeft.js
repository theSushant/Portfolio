import React from 'react'
import { FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Sushant Kumar</h3>
        <p className="text-lg font-normal text-gray-400">
          Software Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          I’m always excited to connect! Feel free to reach out with any questions,
          opportunities, collaborations, or just to say hello. Looking forward to hearing from you!
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+91 8757900678</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">kumar01sushant@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <a href="https://www.linkedin.com/in/sushant-mehta01/" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
          </span>

          <span className="bannerIcon">
            <a href="https://github.com/theSushant" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          </span>

          <span className="bannerIcon">
            <a href="https://x.com/Sushant875790" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft