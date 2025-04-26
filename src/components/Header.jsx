import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = ({ menuOpen, setMenuOpen }) => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="fixed w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800"
    >
      {/* Added max-width container to match other components */}
      <div className="w-full max-w-[100vw] mx-auto px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between py-3">
            {/* Logo with animation - unchanged */}
            <Link to="/" className="flex items-center">
              <motion.span 
                whileHover={{ scale: 1.05 }}
                className="text-2xl font-bold text-black dark:text-white"
              >
                TRIKOR
              </motion.span>
              <motion.span 
                whileHover={{ scale: 1.05 }}
                className="hidden sm:block text-2xl font-light text-gray-600 dark:text-gray-300 ml-2"
              >
                TECHNOLOGIA
              </motion.span>
            </Link>

            {/* Desktop Navigation - unchanged */}
            <nav className="hidden md:flex space-x-6 lg:space-x-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    to={item.path}
                    className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition font-medium text-sm lg:text-base"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Mobile menu button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="md:hidden p-2 rounded-md focus:outline-none text-gray-700 dark:text-gray-300"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <FiX className="w-6 h-6" />
              ) : (
                <FiMenu className="w-6 h-6" />
              )}
            </motion.button>
          </div>

          {/* Mobile Menu - enhanced animations */}
          {menuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <nav className="flex flex-col space-y-2 py-3">
                {navItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.2 }}
                  >
                    <Link 
                      to={item.path}
                      className="block py-3 px-4 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition"
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </motion.div>
          )}
        </div>
      </div>
    </motion.header>
  );
};

export default Header;