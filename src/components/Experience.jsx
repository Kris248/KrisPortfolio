import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  HiOutlineAcademicCap,
  HiOutlineDocumentText,
  HiOutlineArrowUpRight,
} from "react-icons/hi2";

const experiences = [
  {
    year: "2024",
    company: "Techplement",
    role: "Backend Engineer Intern",
    duration: "Jan 2024 – Feb 2024",
    points: [
      "Developed a social media dashboard by collaborating with a team, creating backend APIs to fetch platform data, integrating data visualizations, and resolving backend issues to ensure accuracy and performance",
    ],
    links: {
      certificate:
        "https://drive.google.com/file/d/1YdNVTezIrs1gNSp3SuLx7J9nPBHJKQ-p/view?usp=sharing",
      lor: "https://drive.google.com/file/d/1x61YQ4OaeEtuuM6cG85dIkenSXh9QzuQ/view?usp=sharing",
    },
  },
  {
    year: "2023",
    company: "Codefeast",
    role: "Full Stack Developer Intern",
    duration: "Mar 2023 – Sep 2023",
    points: [
      "Integrated APIs for secure and efficient payment processing.",
      "Contributed to an educational platform enabling students to book mentorship sessions and access courses.",
      "Collaborated with designers and team members to create user-friendly interfaces.",
      "Leveraged Node.js, Express.js, and MongoDB for backend development",
    ],
    links: {
      certificate:
        "https://drive.google.com/file/d/1CS6q7hgGrLF6zkSRozYoQgIPmeniw10f/view?usp=sharing",
      lor: "#",
    },
  },
];

const Experience = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-20 px-4 sm:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="relative pl-8 sm:pl-12 md:pl-16">
          {/* Timeline line */}
          <motion.div
            className="absolute left-0 w-1 h-full bg-gradient-to-b from-indigo-500/30 to-blue-400/30 rounded-full"
            style={{ y }}
          />

          <motion.h2
            className="text-5xl font-bold bg-gradient-to-r from-indigo-400 to-blue-300 bg-clip-text text-transparent mb-14"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Professional Journey
          </motion.h2>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative mb-16 last:mb-0 group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-6 -translate-x-[calc(50%+2px)] w-5 h-5 rounded-full bg-indigo-500 border-4 border-gray-900 z-10" />

              <div className="relative bg-gray-800/50 backdrop-blur-lg p-8 rounded-2xl shadow-2xl hover:shadow-indigo-500/10 transition-shadow duration-300">
                <div className="flex flex-col md:flex-row justify-between mb-4">
                  <div className="mb-4 md:mb-0">
                    <h3 className="text-2xl font-semibold text-indigo-400">
                      {exp.role}
                    </h3>
                    <p className="text-lg text-blue-200 font-medium">
                      @ {exp.company}
                    </p>
                  </div>
                  <div className="flex flex-col items-start md:items-end">
                    <span className="text-sm font-medium text-blue-300 bg-blue-900/30 px-3 py-1 rounded-full">
                      {exp.year}
                    </span>
                    <p className="text-gray-400 text-sm mt-2">{exp.duration}</p>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {exp.points.map((point, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start text-gray-300 leading-relaxed"
                      whileHover={{ x: 5 }}
                    >
                      <span className="text-indigo-400 mr-3 mt-1.5">▸</span>
                      {point}
                    </motion.li>
                  ))}
                </ul>

                <div className="flex gap-4">
                  {exp.links.certificate !== "#" && (
                    <a
                      href={exp.links.certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-300 rounded-lg transition-colors duration-200"
                    >
                      <HiOutlineAcademicCap className="flex-shrink-0" />
                      <span>Certificate</span>
                      <HiOutlineArrowUpRight className="text-sm" />
                    </a>
                  )}
                  {exp.links.lor !== "#" && (
                    <a
                      href={exp.links.lor}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 rounded-lg transition-colors duration-200"
                    >
                      <HiOutlineDocumentText className="flex-shrink-0" />
                      <span>Recommendation</span>
                      <HiOutlineArrowUpRight className="text-sm" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Glowing animated floating 3D bubbles */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-0"
        style={{ y }}
      >
        <motion.div
          animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
          className="absolute top-[15%] left-[10%] w-48 h-48 bg-indigo-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 40, 0], x: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
          className="absolute top-[60%] right-[10%] w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, -20, 0], x: [0, 30, 0] }}
          transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
          className="absolute bottom-[10%] left-[40%] w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"
        />
      </motion.div>
    </section>
  );
};

export default Experience;
