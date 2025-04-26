import { motion } from 'framer-motion';
import { FaCode, FaMobile, FaCloud, FaShieldAlt, FaChartLine, FaRobot } from 'react-icons/fa';
// Add at the top of Services.jsx
import { Link } from 'react-router-dom';

const Services = ({ menuOpen }) => {
  const services = [
    {
      icon: <FaCode className="text-4xl" />,
      title: "Custom Software Development",
      description: "Tailored solutions designed to streamline your business operations with scalable architecture and future-proof technology.",
      highlights: ["Enterprise applications", "Workflow automation", "API integrations"],
      color: "from-blue-500 to-blue-700"
    },
    {
      icon: <FaMobile className="text-4xl" />,
      title: "Mobile App Development",
      description: "Cross-platform mobile experiences with flawless performance on iOS and Android devices.",
      highlights: ["React Native apps", "Offline capabilities", "Biometric auth"],
      color: "from-purple-500 to-purple-700"
    },
    {
      icon: <FaCloud className="text-4xl" />,
      title: "Cloud Solutions",
      description: "Migrate to the cloud with optimized AWS/Azure architectures that scale with your business needs.",
      highlights: ["Serverless setups", "Database migration", "Cost optimization"],
      color: "from-green-500 to-green-700"
    },
    {
      icon: <FaShieldAlt className="text-4xl" />,
      title: "Cybersecurity",
      description: "End-to-end protection for your digital assets with penetration testing and compliance audits.",
      highlights: ["GDPR compliance", "Zero-trust models", "SIEM integration"],
      color: "from-red-500 to-red-700"
    },
    {
      icon: <FaChartLine className="text-4xl" />,
      title: "Data Analytics",
      description: "Transform raw data into actionable insights with real-time dashboards and predictive modeling.",
      highlights: ["Big Data pipelines", "Machine Learning", "Tableau/PowerBI"],
      color: "from-amber-500 to-amber-700"
    },
    {
      icon: <FaRobot className="text-4xl" />,
      title: "AI Integration",
      description: "Implement cutting-edge AI solutions from chatbots to computer vision systems.",
      highlights: ["LLM integration", "Custom NLP models", "Automation workflows"],
      color: "from-indigo-500 to-indigo-700"
    }
  ];

  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: menuOpen ? 0.5 : 1 }}
      className={`py-16 px-4 sm:px-6 ${menuOpen ? 'blur-sm' : ''}`}
    >
      {/* Hero Section */}
      <section className="text-center mb-20 mt-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6"
        >
          Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Services</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
        >
          Comprehensive solutions tailored to drive your digital transformation
        </motion.p>
      </section>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className={`bg-gradient-to-br ${service.color} text-white p-8 rounded-2xl shadow-xl overflow-hidden relative group`}
          >
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="mb-6 opacity-90">{service.description}</p>
              <ul className="space-y-2">
                {service.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mt-20"
      >
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Don't see what you need?
        </h3>
        <Link
          to="/contact"
          className="inline-block bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition shadow-lg"
        >
          Request Custom Solution
        </Link>
      </motion.div>
    </motion.main>
  );
};

export default Services;