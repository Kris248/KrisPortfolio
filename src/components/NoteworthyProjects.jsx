import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "./NoteworthyProjects.css";

const projects = [
  {
    title: "Task Planner",
    tech: ["React.js", "Node.js", "Express", "MongoDb", "JWT Auth"],
    github: "https://github.com/Kris248/Task-Creator-Web-App/tree/main",
    live: "#",
  },
  {
    title: "AI Health Diagnosis Website",
    tech: ["Ai/ML Models", "Jupyter Notebook", "Python", "Flask", "Javascript", "Node.js"],
    github: "https://github.com/Kris248/Disease-Diagnosis-AI-Website",
    live: "#",
  },
  {
    title: "Forex AlgoTrading BOT",
    tech: ["Machine Learning", "Python"],
    github: "https://github.com/Kris248/FX_Killer_AlgoTrading_BOT",
    live: "#",
  },
  {
    title: "Xometry Quotes App",
    tech: ["React", "Firebase OAuth", "HTML", "CSS"],
    github: "https://github.com/Kris248/react-firebase-auth",
    live: "https://xometry-clone.web.app/",
  },
  {
    title: "Tic Tac Toe Game",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Kris248/Tic-Tac-Toe",
    live: "https://play-tictactoe-games.netlify.app/",
  },
  {
    title: "OpenAi ChatGPT Clone",
    tech: ["React", "API", "Node.js", "Express"],
    github: "https://github.com/Kris248/OpenAI_ChatGPT_Clone",
    live: "#",
  },
];

const NoteworthyProjects = () => {
  return (
    <section id="noteworthy-projects" className="py-16 px-6 max-w-5xl mx-auto">
      {/* Section Title */}
      <motion.h2
        className="text-3xl font-bold text-teal-400 text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Noteworthy Projects
      </motion.h2>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-[#112240] p-6 rounded-lg shadow-md hover:shadow-lg transition-all"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {/* Project Header */}
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold text-teal-400">{project.title}</h3>

              {/* GitHub & Live Preview Icons */}
              <div className="flex space-x-3">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub className="text-gray-400 hover:text-white text-xl transition-all" />
                </a>
                <a href={project.live} target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt className="text-gray-400 hover:text-white text-xl transition-all" />
                </a>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tech.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="text-xs px-3 py-1 rounded-full bg-teal-600 text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default NoteworthyProjects;
