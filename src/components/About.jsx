import { motion } from "framer-motion";
import { HiOutlineDocumentDownload } from "react-icons/hi";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="about"
      className="py-20 px-6 lg:px-8 bg-gray-900 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-indigo-500/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-teal-500/30 rounded-full blur-3xl" />
      </div>

      <motion.div
        className="max-w-5xl mx-auto relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold inline-block relative pb-2 mb-8"
          variants={itemVariants}
        >
          <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
            About Me
          </span>
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full"></span>
        </motion.h2>

        <div className="mt-6 flex flex-col-reverse lg:flex-row items-center gap-10">
          {/* LEFT: Text + Resume */}
          <div className="flex-1">
            <motion.p
              className="text-gray-300 text-lg md:text-xl leading-relaxed backdrop-blur-sm bg-gray-800/50 p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
              variants={itemVariants}
            >
              Hi! I'm Krish Gautam, a Software Developer with over 1 year
              experience in full-stack development, specializing in creating
              scalable and efficient solutions using React.js, Node.js, Spring
              Boot, Java, and modern backend technologies. Committed to
              delivering impactful software aligned with industry standards.
            </motion.p>

            <motion.a
              href="/docs/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gray-800 hover:bg-teal-500 text-white hover:text-white font-medium transition-all duration-300 shadow-md hover:shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <HiOutlineDocumentDownload className="text-xl" />
              View Resume
            </motion.a>
          </div>

          {/* RIGHT: Image */}
          <motion.div
            className="relative group"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="relative overflow-hidden rounded-2xl border-4 border-teal-400/20 group-hover:border-teal-400/40 transition-all duration-300 shadow-2xl group-hover:shadow-3xl">
              <img
                src="/images/prrrofile.jpeg"
                alt="Profile"
                className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-teal-400/10 to-blue-500/10 mix-blend-overlay" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent" />
            </div>
            <div className="absolute -inset-4 rounded-2xl bg-teal-500/10 blur-xl group-hover:blur-2xl transition-all duration-300 -z-10" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
