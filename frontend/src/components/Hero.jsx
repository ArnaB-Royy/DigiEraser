import React from "react";
import { NavLink } from "react-router-dom";
import imgFile from "../assets/images.jpg"; // Image for download

export default function Hero() {
  return (
    <section
      className="min-h-screen flex flex-col justify-between px-6 text-center"
      style={{
        background: `linear-gradient(
          to bottom,
          #000000 0%,
          #1F1F1F 10%,
          #F5F5F5 50%,
          #1F1F1F 90%,
          #000000 100%
        )`,
      }}
    >
      {/* Main Hero Content */}
      <div className="flex flex-col items-center justify-center flex-1">
        <div className="max-w-3xl w-full mx-auto">
          <h1
            className="text-5xl md:text-6xl font-bold mb-6 flex flex-wrap justify-center items-center gap-1"
            style={{ textShadow: "0 4px 8px rgba(0,0,0,0.5)" }}
          >
            <span className="text-[#FF6F00]">Wiप</span>
            <span
              className="text-[#FFFFFF]"
              style={{ textShadow: "0 0 6px rgba(0,0,0,0.6)" }}
            >
              e
            </span>
            <span className="text-[#2E7D32]">Out</span>
          </h1>

          <p
            className="text-xl md:text-2xl mb-8 text-[#F5F5F5]"
            style={{ textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}
          >
            Secure, verifiable data wiping for trustworthy IT asset recycling. Fully free of charge — no payment required. Download the bootable ISO and erase your devices safely with a tamper-proof certificate.
          </p>

          {/* Download Buttons */}
          <div className="flex flex-col md:flex-row gap-6 justify-center mb-8">
            {[
              {
                href: imgFile,
                label: "Download for Windows",
                bg: "#FF6F00",
                desc: "Compatible with Windows 10/11. ISO file for creating a bootable USB.",
              },
              {
                href: imgFile,
                label: "Download for Linux",
                bg: "#2E7D32",
                desc: "Compatible with major Linux distros. ISO file for creating a bootable USB.",
              },
            ].map((btn) => (
              <div key={btn.label} className="flex flex-col items-center">
                <a
                  href={btn.href}
                  download="images.jpg"
                  className="text-white font-semibold px-6 py-3 rounded-md shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
                  style={{
                    backgroundColor: btn.bg,
                    boxShadow: `0 4px 12px ${btn.bg}88`,
                  }}
                >
                  {btn.label}
                </a>
                <p
                  className="text-sm mt-2 max-w-xs"
                  style={{
                    color: "#FFFFFF",
                    textShadow: `
                      0 1px 2px rgba(0,0,0,0.7),
                      0 2px 4px rgba(0,0,0,0.5),
                      0 3px 6px rgba(0,0,0,0.3)
                    `,
                  }}
                >
                  {btn.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full px-6 py-6 flex flex-col md:flex-row justify-between items-center text-white">
        {/* Left – Copyright */}
        <div className="text-sm flex flex-wrap justify-center md:justify-start gap-1 max-w-3xl w-full mx-auto">
          <span className="text-[#FF6F00]">Wiप</span>
          <span className="text-white">e</span>
          <span className="text-[#2E7D32]">Out</span>.
          <span className="text-gray-400 ml-1">All rights reserved.</span>
        </div>

        {/* Center – Footer Links in single pill */}
        <div className="my-2 md:my-0 max-w-3xl w-full mx-auto flex justify-center">
          <div className="bg-white/20 px-6 py-2 rounded-full shadow inline-block">
            {["privacy", "terms", "help"].map((link) => (
              <NavLink
                key={link}
                to={`/${link}`}
                className={({ isActive }) =>
                  `mx-2 px-2 font-semibold transition-colors duration-300 ${
                    isActive
                      ? "text-[#FF6F00] underline underline-offset-4"
                      : "text-[#2E7D32] hover:text-[#FF6F00]"
                  }`
                }
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </NavLink>
            ))}
          </div>
        </div>

        {/* Right – Made by */}
        <div className="text-sm flex flex-wrap justify-center md:justify-end gap-1 max-w-3xl w-full mx-auto">
          <span className="text-gray-400">Made by</span>
          <span className="text-white font-semibold">Architekton</span>
        </div>
      </footer>
    </section>
  );
}
