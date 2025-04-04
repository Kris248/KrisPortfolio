import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section 
      className="relative h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at bottom, #0a192f 0%, #020617 100%)'
      }}
    >
      {/* Glowing Circles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${120 + i * 100}px`,
              height: `${120 + i * 100}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              background: 'radial-gradient(circle, rgba(20,220,220,0.3) 0%, rgba(0,0,0,0) 70%)',
              boxShadow: `0 0 30px rgba(94,255,255,0.3), 0 0 60px rgba(0,255,255,0.15)`,
              filter: 'blur(3px)',
              border: '1px solid rgba(94,255,255,0.1)',
            }}
            animate={{
              y: [0, -80, 0],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 12 + i * 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <motion.div
        ref={ref}
        className="relative z-10 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.p 
          className="text-teal-400 font-mono mb-4 text-lg md:text-xl"
          variants={itemVariants}
        >
          Hi, my name is
        </motion.p>

        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 bg-gradient-to-r from-teal-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
          variants={itemVariants}
        >
          Krish Gautam
        </motion.h1>

        <motion.h2 
          className="text-3xl md:text-5xl text-gray-400 mb-6"
          variants={itemVariants}
        >
          I <span className="text-teal-400">craft digital</span> experiences
        </motion.h2>

        <motion.p 
          className="text-gray-300 mt-4 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed"
          variants={itemVariants}
        >
          <span className="text-teal-400">
            Full-Stack Developer passionate about crafting seamless, <br />
            scalable, and <span className="text-teal-400">user-driven applications</span>. 
            Expertise in <span className="text-teal-400">front-end precision</span> and <br />
            robust back-end systems, merging modern technologies <br /> 
            with innovative design to deliver end-to-end web solutions.
          </span>
        </motion.p>

        <motion.div 
          className="mt-8"
          variants={itemVariants}
        >
          <motion.a
            href="#projects"
            className="inline-block px-8 py-4 text-lg font-semibold bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-lg shadow-2xl hover:shadow-teal-500/20 relative overflow-hidden group transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Explore My Portfolio</span>
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scrolling indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-teal-400 rounded-full relative">
          <div className="w-1 h-2 bg-teal-400 absolute top-2 left-1/2 -translate-x-1/2 animate-scroll" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
