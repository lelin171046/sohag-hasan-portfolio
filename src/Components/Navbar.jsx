import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "motion/react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [contactformOpen, setContactformOpen] = useState(false);

  const openContactForm = () => setContactformOpen(true);
  const closeContactForm = () => setContactformOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#AboutSection" },
    { name: "Projects", href: "#projects" },
    { name: "Thumbnails", href: "#thumbnails" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-900/95 backdrop-blur-md border-b border-slate-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">SH</span>
            </div>
            <span className="hidden sm:inline text-white font-semibold text-lg">
              Portfolio
            </span>
          </div>

          {/* Desktop Nav */}
          <motion.nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <motion.button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="px-4 py-2 text-slate-300 hover:text-cyan-400 transition-colors font-medium"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  delay: 0.7 + index * 0.2,
                }}
              >
                {link.name}
              </motion.button>
            ))}
          </motion.nav>

          {/* Contact Button */}
          <a href="https://forms.visme.co/formsPlayer/nmnx49d7-untitled-project">
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ rotateX: 20, rotateY: 10, y: -5 }}
              transition={{ type: "spring", stiffness: 120, damping: 20, delay: 1.5 }}
              className="hidden md:inline-block ml-4 px-4 py-2 bg-gradient-to-r from-cyan-400 to-blue-600 text-white rounded-lg hover:from-cyan-500 hover:to-blue-700 transition-colors font-medium"
            >
              Contact Me
            </motion.button>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-white transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="md:hidden border-t border-slate-800 bg-slate-900/50 backdrop-blur-md"
            >
              <nav className="flex flex-col py-4">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => handleNavClick(link.href)}
                    className="px-4 py-3 text-slate-300 hover:text-cyan-400 transition-colors font-medium text-left"
                  >
                    {link.name}
                  </button>
                ))}
              </nav>

              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 120, damping: 20, delay: 0.3 }}
                className="w-full mb-4 px-4 py-2 bg-gradient-to-r from-cyan-400 to-blue-600 text-white rounded-lg hover:from-cyan-500 hover:to-blue-700 transition-colors font-medium"
                onClick={() => setContactformOpen(true)}
              >
                Contact Me
              </motion.button>
            </motion.div>

            {/* Contact Form Modal */}
            {contactformOpen && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-gray-800 rounded-lg p-6 w-full max-w-md mx-4">
                  <h2 className="text-white text-lg font-semibold mb-4">
                    Get in Touch
                  </h2>

                  {/* 🔥 REPLACED FORM BELOW */}
                  <form>
                    <div className="mb-4">
                      <label
                        className="block text-sm text-gray-300 mb-1"
                        htmlFor="name"
                      >
                        Name
                      </label>
                      <input
                        className="w-full p-2 bg-gray-100 border border-gray-600 text-black rounded-lg"
                        type="text"
                        id="name"
                      />
                    </div>

                    <div className="mb-4">
                      <label
                        className="block text-sm text-gray-300 mb-1"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        className="w-full p-2 bg-gray-100 border border-gray-600 text-black rounded-lg"
                        type="email"
                        id="email"
                      />
                    </div>

                    <div className="mb-4">
                      <label
                        className="block text-sm text-gray-300 mb-1"
                        htmlFor="message"
                      >
                        Message
                      </label>
                      <textarea
                        className="w-full p-2 bg-gray-100 border border-gray-600 text-black rounded-lg"
                        id="message"
                        rows="4"
                      ></textarea>
                    </div>

                    <div className="flex justify-end">
                      <button
                        type="button"
                        onClick={closeContactForm}
                        className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-500 transition-colors"
                      >
                        Close
                      </button>

                      <button
                        type="submit"
                        className="ml-2 px-4 py-2 bg-gradient-to-r from-cyan-400 to-blue-600 text-white rounded-lg hover:from-cyan-500 hover:to-blue-700 transition-colors"
                      >
                        Send
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </header>
  );
}

export default Navbar;
