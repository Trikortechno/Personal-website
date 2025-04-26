import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black dark:bg-white text-white dark:text-black py-12 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center">
              <span className="text-2xl font-bold">TRIKOR</span>
              <span className="text-2xl font-light text-gray-300 dark:text-gray-700">TECHNOLOGIA</span>
            </div>
            <p className="mt-2 text-gray-300 dark:text-gray-700">"BELIEVE, THEN ACHIEVE"</p>
          </div>
          
          <div className="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0 text-center md:text-left">
            <div>
              <h4 className="font-bold mb-3">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-300 dark:text-gray-700 hover:text-white dark:hover:text-black transition">Home</Link></li>
                <li><Link to="/services" className="text-gray-300 dark:text-gray-700 hover:text-white dark:hover:text-black transition">Services</Link></li>
                <li><Link to="/portfolio" className="text-gray-300 dark:text-gray-700 hover:text-white dark:hover:text-black transition">Work</Link></li>
                <li><Link to="/contact" className="text-gray-300 dark:text-gray-700 hover:text-white dark:hover:text-black transition">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-3">Services</h4>
              <ul className="space-y-2">
                <li><a to="#" className="text-gray-300 dark:text-gray-700 hover:text-white dark:hover:text-black transition">Web Development</a></li>
                <li><a to="#" className="text-gray-300 dark:text-gray-700 hover:text-white dark:hover:text-black transition">Mobile Apps</a></li>
                <li><a to="#" className="text-gray-300 dark:text-gray-700 hover:text-white dark:hover:text-black transition">UI/UX Design</a></li>
                <li><a to="#" className="text-gray-300 dark:text-gray-700 hover:text-white dark:hover:text-black transition">Cloud Solutions</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-3">Contact</h4>
              <ul className="space-y-2">
                <li className="text-gray-300 dark:text-gray-700">F69a, Street no.2</li>
                <li className="text-gray-300 dark:text-gray-700">Shakti Nagar, JAMMU (180001)</li>
                <li className="text-gray-300 dark:text-gray-700">trikotecho752@gmail.com</li>
                <li className="text-gray-300 dark:text-gray-700">+91 8716843110</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 dark:border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 dark:text-gray-700 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Trikor Technologia. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a to="#" className="text-gray-300 dark:text-gray-700 hover:text-white dark:hover:text-black transition">Privacy Policy</a>
            <a to="#" className="text-gray-300 dark:text-gray-700 hover:text-white dark:hover:text-black transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;