import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Link as ScrollLink } from "react-scroll"; // 👈 use this instead of react-router Link

const Header = () => {
  const [nav, setNav] = useState(false);

  const navItems = [
    { id: 1, name: "Home", link: "home" },
    { id: 2, name: "About", link: "about" },
    { id: 3, name: "Experience", link: "experience" },
    { id: 4, name: "Projects", link: "projects" },
    { id: 5, name: "Contact", link: "contact" },
  ];

  const menuVariants = {
    open: { opacity: 1, height: "auto", transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
    closed: { opacity: 0, height: 0, transition: { staggerChildren: 0.1, staggerDirection: -1 } }
  };

  const itemVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: -20 }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring" }}
      className="fixed w-full bg-gradient-to-b from-gray-900/95 to-gray-800/80 backdrop-blur-sm shadow-xl z-50"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2">
          <span className="w-3 h-3 bg-teal-400 rounded-full" />
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent cursor-pointer"
          >
            Portfolio
          </ScrollLink>
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <motion.div key={item.id} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <ScrollLink
                to={item.link}
                smooth={true}
                duration={500}
                offset={-70} // adjust if you have a sticky header
                className="relative text-gray-300 hover:text-teal-400 px-2 py-1 transition-colors cursor-pointer"
              >
                <span className="relative z-10">{item.name}</span>
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-400"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </ScrollLink>
            </motion.div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setNav(!nav)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-700/50 transition-colors"
          whileTap={{ scale: 0.9 }}
          aria-label="Menu"
        >
          {nav ? (
            <FaTimes className="text-2xl text-teal-400" />
          ) : (
            <FaBars className="text-2xl text-gray-300" />
          )}
        </motion.button>

        {/* Mobile Nav */}
        <AnimatePresence>
          {nav && (
            <motion.nav
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="absolute top-full left-0 w-full bg-gray-900/95 backdrop-blur-sm md:hidden overflow-hidden"
            >
              <div className="px-4 py-6">
                {navItems.map((item) => (
                  <motion.div
                    key={item.id}
                    variants={itemVariants}
                    className="py-3 border-b border-gray-700 last:border-0"
                  >
                    <ScrollLink
                      to={item.link}
                      smooth={true}
                      duration={500}
                      offset={-70}
                      onClick={() => setNav(false)}
                      className="block text-gray-300 hover:text-teal-400 text-lg px-4 py-2 rounded-lg hover:bg-gray-800/50 transition-colors cursor-pointer"
                    >
                      {item.name}
                    </ScrollLink>
                  </motion.div>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
