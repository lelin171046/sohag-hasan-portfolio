import { Facebook, Instagram, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Footer() {
 

  return (
    <footer className="px-4 divide-y bg-gradient-to-b from-slate-800 via-slate-900 to-slate-900
     text-white dark:text-gray-200 transition-all duration-500">
      
      {/* Footer Main */}
      <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
        
        {/* Logo Section */}
        <div className="lg:w-1/3 flex flex-col items-center lg:items-start">
          <a href="#" className="flex items-center space-x-3">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-blue-500 shadow-xl shadow-blue-500/40 animate-pulse">
              <span className="text-white font-bold text-xl">SH</span>
            </div>
            <span className="text-blue-500 dark:text-blue-400 text-2xl font-semibold">
              STUDIO
            </span>
          </a>

          
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 text-sm gap-x-4 gap-y-8 lg:w-2/3 sm:grid-cols-4">

          <div className="space-y-3">
            <h3 className="uppercase font-semibold text-gray-900 dark:text-gray-100">
              Product
            </h3>
            <ul className="space-y-1">
              <li><a href="#">Features</a></li>
              <li><a href="#">Integrations</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="uppercase font-semibold">Company</h3>
            <ul className="space-y-1">
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="uppercase font-semibold">Developers</h3>
            <ul className="space-y-1">
              <li><a href="#">Public API</a></li>
              <li><a href="#">Documentation</a></li>
              <li><a href="#">Guides</a></li>
            </ul>
          </div>

          {/* Social Icons */}
          <div className="space-y-3">
            <h3 className="uppercase font-semibold">Social Media</h3>

            <div className="flex space-x-5">

              {/* Facebook */}
              <a
                href="https://www.facebook.com/loudsohag"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Facebook></Facebook>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/motionhasan/"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Instagram></Instagram>
              </a>

              {/* X */}
              <a
                href="https://x.com/VisualsBRO"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
               <X></X>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/8801775587380"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <svg
                  className="w-7 h-7 transition-all duration-300 group-hover:scale-125 group-hover:drop-shadow-[0_0_10px_#25D366] fill-current text-green-500 dark:text-green-400"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48..."></path>
                </svg>
              </a>

            </div>
          </div>

        </div>
      </div>

      <div className="py-6 text-sm text-center text-gray-600 dark:text-gray-400">
        © 2025 Sohag Hasan. All Rights Reserved.
      </div>
    </footer>
  );
}
