import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import './Projects.css';

const projects = [
  {
    title: "FilterPixel Online Image Editor",
    description: "This project allows you to adjust the contrast, brightness, saturation, rotation, and format of your images in real-time.",
    tech: ["Multer", "Sharp", "Express", "React", "TypeScript"],
    github: "https://github.com/Kris248/FilterPixel-Image-Processing-Website",
    live: "https://filterpixel-online-image-editor.netlify.app/",
    image: "/images/image-optimizer.jpeg", // replace with your image
  },
  {
    title: "Personal Portfolio",
    description: "A modern, responsive portfolio website showcasing my projects, skills, and a fun heart counter feature built with React and Framer Motion.",
    tech: ["Three.js", "React.js", "Tailwind CSS", "Framer Motion",],
    github: "https://github.com/Kris248/KrisPortfolio/tree/main",
    live: "https://codedbykris-portfolio.netlify.app/",
    image: "/images/portfolio.jpeg", // replace with your image
  },
  {
    title: "VMeet Video Conferencing App",
    description: "A fully functional video conferencing app with features like mute/unmute, invite by link/code, real-time chat etc.",
    tech: ["Express", "WebRTC", "Socket.io", "Peer", "Google OAuth", "EJS"],
    github: "https://github.com/Kris248/VMeet-Video-Conferencing/tree/main",
    live: "https://vmeet-video-conferencing.onrender.com/",
    image: "/images/vmeet.jpeg", // replace with your image
  },
    {
    title: "Lumio AI Email Sender",
    description: "Send AI genereated (editable) Emails using prompt to multiple recipients at once.",
    tech: ["Express", "Nodemailer", "Groq SDK", "React", "Git", "Ethereal", "Nodejs"],
    github: "https://github.com/Kris248/Lumio-AI-Email-Sender",
    live: "https://lumio-ai-email-sender.netlify.app/",
    image: "/images/lumio.png", // replace with your image
  },
];

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      <motion.h2 
        className="text-4xl font-bold inline-block mb-12 gradient-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        My Development Portfolio
      </motion.h2>

      <motion.div
        ref={ref}
        className="projects-grid"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex flex-col h-full">
              
              {project.image && (
                <img
                  src={project.image}
                  alt={`${project.title} thumbnail`}
                  className="project-thumbnail mb-4 rounded-lg object-cover w-full h-48"
                />
              )}

              <div className="flex items-center justify-between mb-4">
                <h3 className="project-title text-2xl font-semibold text-teal-400">
                  {project.title}
                </h3>
                <div className="flex gap-3 text-xl text-teal-400">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <FaGithub className="hover:text-teal-300 transition" />
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <FaExternalLinkAlt className="hover:text-teal-300 transition" />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-gray-300 flex-grow">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="text-xs px-3 py-1 rounded-full bg-teal-400/10 text-teal-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
