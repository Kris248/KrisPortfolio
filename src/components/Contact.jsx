import { motion } from "framer-motion";
import { FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative bg-[#0c0101] text-white overflow-hidden py-24 px-6"
    >
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="w-full h-24">
          <path
            d="M0.00,49.98 C150.00,150.00 350.00,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
            style={{ stroke: "none", fill: "#0f172a" }}
          ></path>
        </svg>
      </div>

      {/* 💬 Contact content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-3xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold inline-block bg-gradient-to-r from-teal-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
          Let’s Connect
        </h2>

        <p className="text-gray-400 mt-4 text-lg">
          Open for collaborations, freelance gigs, or just a tech convo.
          <br />
          Drop me a line anytime — I’ll respond faster than your API 😉
        </p>

        <a
          href="mailto:chris.gautam.0024@gmail.com"
          className="group mt-8 inline-flex items-center gap-3 px-8 py-4 rounded-full text-lg font-semibold bg-gradient-to-r from-teal-500 to-blue-500 text-white shadow-xl hover:shadow-teal-500/30 transition-all duration-300"
        >
          <FaEnvelope className="text-xl group-hover:animate-pulse" />
          Drop Me an Email
        </a>
      </motion.div>

    </section>
  );
};

export default Contact;
