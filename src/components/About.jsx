import { motion } from 'framer-motion';
import abhinav from "../assets/AbhinavMishra.png"
import raja from "../assets/Rajaabrar.jpg"
import devagya from "../assets/Devagyarattan.jpg"

const About = ({ menuOpen }) => {
  const stats = [
    { value: "50+", label: "Projects Completed" },
    { value: "100%", label: "Client Satisfaction" },
    { value: "24/7", label: "Support" },
  ];

  const values = [
    {
      title: "Innovation",
      description: "We push boundaries to deliver cutting-edge solutions.",
      icon: "💡",
    },
    {
      title: "Excellence",
      description: "Quality is at the core of everything we build.",
      icon: "🏆",
    },
    {
      title: "Collaboration",
      description: "We work closely with clients to achieve shared success.",
      icon: "🤝",
    },
  ];

  const teamMembers = [
    {
      name: "Abhinav Mishra",
      role: "Co-Founder & CEO",
      education: "B.Tech in Electronic and communictaion, SMVDU Katra",
      image: abhinav,
      expertise: ["Cloud Architecture", "Full Stack Development", "DevOps"]
    },
    {
      name: "Devagya Rattan",
      role: "Co-Founder & CTO",
      education: "B.Tech in Electronic and communictaion, SMVDU Katra",
      image:  devagya,
      expertise: ["Machine Learning", "Full Stack Development", "DevOps"]
    },
    {
      name: "Raja Abrar Khan",
      role: "Co-Founder & COO",
      education: "B.Tech in Computer Science, GCET Jammu",
      image: raja,
      expertise: ["Full Stack Development", "Andriod", "Data Analyst"]
    }
  ];

  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: menuOpen ? 0.5 : 1 }}
      className={`py-20 px-6 ${menuOpen ? 'blur-sm' : ''}`}
    >
      {/* Hero Section */}
      <section className="container mx-auto mb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-black dark:text-white mb-6">
            About <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Trikor Technologia</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We're a passionate team of developers, designers, and innovators building the future of technology.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative h-96 w-full rounded-2xl overflow-hidden mb-16"
        >
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-purple-600/80 dark:from-blue-800/80 dark:to-purple-800/80"></div>
          <div className="relative z-10 h-full flex items-center justify-center">
            <motion.div 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring" }}
              className="text-center p-8"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">"BELIEVE, THEN ACHIEVE"</h2>
              <p className="text-xl text-gray-200 max-w-2xl mx-auto">
                Our motto drives everything we do - from small apps to enterprise solutions.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800 rounded-2xl mb-20">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-600"
              >
                <p className="text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">{stat.value}</p>
                <p className="text-gray-600 dark:text-gray-300 text-xl">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="container mx-auto mb-20">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <h2 className="text-3xl font-bold text-black dark:text-white mb-6">Our Story</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-lg">
              Founded in 2023, Trikor Technologia began as a small team of passionate developers with a vision to create meaningful digital experiences.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-lg">
              Today, we've grown into a full-service software development agency serving clients worldwide, but we've never lost our startup spirit and commitment to excellence.
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Every project we undertake is driven by our core belief: with the right mindset and technology, any vision can become reality.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 p-8 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="aspect-w-16 aspect-h-9 bg-gray-300 dark:bg-gray-600 rounded-lg overflow-hidden flex items-center justify-center pb-2">
                <span className="text-6xl">📈</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Meet <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Our Team</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              The brilliant minds behind Trikor's success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700"
              >
                <div className="h-64 relative">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{member.name}</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{member.education}</p>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm text-gray-800 dark:text-gray-200">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-800 dark:to-purple-800 text-white rounded-2xl">
        <div className="container mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-16"
          >
            Our Core Values
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-md p-8 rounded-xl text-center border border-white/20"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-200">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.main>
  );
};

export default About;