import React from 'react'
import { FaTwitter, FaLinkedinIn, FaReact, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiDotnet } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          Find me in
        </h2>
        <div className="flex gap-4">
          {/* <span className="bannerIcon">
              <FaFacebookF />
            </span> */}
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
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          BEST SKILL ON
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaReact />
          </span>
          <span className="bannerIcon">
            <SiNextdotjs />
          </span>
          <span className="bannerIcon">
            <SiTailwindcss />
          </span>
          <span className="bannerIcon">
            <SiDotnet />
          </span>
        </div>
      </div>
    </div>
  )
}

export default Media