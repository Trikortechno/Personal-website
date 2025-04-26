import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { useState } from 'react';

const Contact = ({ menuOpen }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Select a service',
    message: ''
  });
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would normally send the form data to a server
    // For this example, we'll just show the alert
    setShowAlert(true);
    // Reset form
    setFormData({
      name: '',
      email: '',
      service: 'Select a service',
      message: ''
    });
    // Hide alert after 5 seconds
    setTimeout(() => setShowAlert(false), 5000);
  };

  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: menuOpen ? 0.5 : 1 }}
      className={`py-16 px-4 sm:px-6 relative ${menuOpen ? 'blur-sm' : ''}`}
    >
      {/* Success Alert */}
      {showAlert && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-md"
        >
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg className="h-6 w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">Service Unavailable</h3>
                <div className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                  <p>Try to contact us on trikotecho752@gmail.com for any queries</p>
                </div>
                <div className="mt-4">
                  <a
                    href="mailto:trikotecho752@gmail.com"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    <FaEnvelope className="mr-2" />
                    Send Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Hero */}
      <section className="text-center mb-20 mt-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6"
        >
          Get in <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Touch</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
        >
          Let's discuss how we can help you achieve your goals
        </motion.p>
      </section>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send Us a Message</h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="your.email@example.com"
                required
              />
            </div>
            <div>
              <label htmlFor="service" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Service Interest</label>
              <select
                id="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                required
              >
                <option value="Select a service">Select a service</option>
                <option value="Custom Software">Custom Software</option>
                <option value="Mobile App">Mobile App</option>
                <option value="Cloud Solutions">Cloud Solutions</option>
                <option value="AI Integration">AI Integration</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
              <textarea
                id="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="Tell us about your project..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition shadow-md"
            >
              Send Message
            </button>
          </form>
        </motion.div>

       {/* Contact Info */}
       <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="space-y-8"
        >
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 text-blue-200">
                  <FaMapMarkerAlt className="text-xl" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">Our Office</h3>
                  <p className="text-blue-100">F69a, Street no.2, Shakti Nagar, JAMMU (180001)</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 text-blue-200">
                  <FaPhone className="text-xl" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">Phone</h3>
                  <p className="text-blue-100">+91 8716843110</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 text-blue-200">
                  <FaEnvelope className="text-xl" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">Email</h3>
                  <p className="text-blue-100">trikotecho752@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Connect With Us</h2>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/trikortechno/" className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 transition">
                <FaLinkedin className="text-xl" />
              </a>
              <a href="https://github.com/Trikortechno" className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 transition">
                <FaGithub className="text-xl" />
              </a>
              <a href="https://www.instagram.com/trikortechnologia" className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 transition">
                <FaInstagram className="text-xl" />
              </a>
              <a href="https://x.com/trikortechno" className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 transition">
                <FaXTwitter className="text-xl" />
              </a>
              {/* Add more social links */}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Business Hours</h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-300">Monday - Friday</span>
                <span className="font-medium text-gray-900 dark:text-white">9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-300">Saturday</span>
                <span className="font-medium text-gray-900 dark:text-white">10:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-300">Sunday</span>
                <span className="font-medium text-gray-900 dark:text-white">Closed</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.main>
  );
};

export default Contact;