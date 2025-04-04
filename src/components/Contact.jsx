// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { FaEnvelope, FaHeart } from "react-icons/fa";
// import { GiSparkles } from "react-icons/gi";

// const Contact = () => {
//   const [heartCount, setHeartCount] = useState(0);
//   const [hasGivenHeart, setHasGivenHeart] = useState(false);
//   const [showPopup, setShowPopup] = useState(false);
//   const [floatingHearts, setFloatingHearts] = useState([]);

//   useEffect(() => {
//     const storedCount = localStorage.getItem("heartCount");
//     const givenHeart = localStorage.getItem("heartGiven");
//     if (storedCount) setHeartCount(parseInt(storedCount));
//     if (givenHeart) setHasGivenHeart(true);
//   }, []);

//   const createHearts = () => {
//     const hearts = Array.from({ length: 8 }).map((_, i) => ({
//       id: Date.now() + i,
//       left: Math.random() * 80 + 10,
//       size: Math.random() * 20 + 10,
//       color: `hsl(${Math.random() * 60 + 300}, 70%, 60%)`,
//       duration: Math.random() * 2 + 2,
//       angle: Math.random() * 360
//     }));
//     setFloatingHearts([...floatingHearts, ...hearts]);
//   };

//   const handleHeartClick = () => {
//     if (hasGivenHeart) return;

//     const newCount = heartCount + 1;
//     setHeartCount(newCount);
//     setHasGivenHeart(true);
//     localStorage.setItem("heartCount", newCount.toString());
//     localStorage.setItem("heartGiven", "true");
//     setShowPopup(true);

//     createHearts();
//     setTimeout(() => setShowPopup(false), 5000);
//   };

//   return (
//     <section
//       id="contact"
//       className="relative bg-[#0c0101] text-white overflow-hidden py-24 px-6"
//     >
//       {/* Wave Background */}
//       <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
//         <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="w-full h-24">
//           <path
//             d="M0.00,49.98 C150.00,150.00 350.00,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
//             style={{ stroke: "none", fill: "#0f172a" }}
//           ></path>
//         </svg>
//       </div>

//       {/* Animated Sparkles */}
//       <div className="absolute inset-0 pointer-events-none">
//         {Array.from({ length: 20 }).map((_, i) => (
//           <GiSparkles 
//             key={i}
//             className="absolute text-pink-200/20 animate-float"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               fontSize: `${Math.random() * 15 + 5}px`,
//               animationDelay: `${i * 0.5}s`
//             }}
//           />
//         ))}
//       </div>

//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//         className="relative z-10 max-w-3xl mx-auto text-center"
//       >
//         <h2 className="text-4xl font-bold inline-block bg-gradient-to-r from-teal-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
//           Let’s Connect
//         </h2>

//         <p className="text-gray-400 mt-4 text-lg">
//           Open for collaborations, freelance gigs, or just a tech convo.
//           <br />
//           Drop me a line anytime — I’ll respond faster than your API 😉
//         </p>

//         {/* Email Button */}
//         <motion.a
//           href="mailto:chris.gautam.0024@gmail.com"
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           className="group mt-8 inline-flex items-center gap-3 px-8 py-4 rounded-full text-lg font-semibold bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-xl hover:shadow-pink-500/20 transition-all duration-300"
//         >
//           <FaEnvelope className="text-xl group-hover:animate-bounce" />
//           <span className="relative">
//             Drop Me an Email
//             <span className="absolute -right-4 -top-2 text-xl animate-ping">✨</span>
//           </span>
//         </motion.a>

//         {/* Heart Section */}
//         <div className="mt-12 flex flex-col items-center justify-center space-y-6">
//           {/* Total Hearts Display */}
//           <motion.div 
//             className="flex flex-col items-center gap-2"
//             initial={{ scale: 0 }}
//             animate={{ scale: 1 }}
//             transition={{ delay: 0.3 }}
//           >
//             <div className="relative">
//               <div className="absolute -inset-4 bg-pink-500/20 rounded-full blur-xl" />
//               <div className="text-6xl text-pink-400 animate-heartbeat">
//                 ❤️
//               </div>
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <span className="text-2xl font-bold text-white">
//                   {heartCount}
//                 </span>
//               </div>
//             </div>
//             <p className="text-gray-400 text-lg font-medium">
//               Hearts Received
//             </p>
//           </motion.div>

//           {/* Heart Giving Button */}
//           <div className="flex flex-col items-center gap-4">
//             <motion.button
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//               onClick={handleHeartClick}
//               disabled={hasGivenHeart}
//               className="relative w-16 h-16 flex items-center justify-center text-4xl bg-pink-500 hover:bg-pink-600 text-white rounded-full shadow-2xl transition-all duration-300 disabled:opacity-50"
//             >
//               ❤️
//               <div className="absolute inset-0 rounded-full border-4 border-pink-300/30 animate-pulse" />
//             </motion.button>

//             <motion.p 
//               className="text-pink-300 text-sm flex items-center gap-2"
//               animate={{ opacity: [0.8, 1, 0.8] }}
//               transition={{ duration: 1.5, repeat: Infinity }}
//             >
//               {hasGivenHeart ? (
//                 <>
//                   <FaHeart className="text-red-400" />
//                   Made by Krish Gautam
//                 </>
//               ) : (
//                 "Click the heart to show some love!"
//               )}
//             </motion.p>
//           </div>
//         </div>

//         {/* Floating Hearts */}
//         {floatingHearts.map((heart) => (
//           <motion.div
//             key={heart.id}
//             initial={{ 
//               opacity: 1,
//               y: 0,
//               x: 0,
//               scale: 1,
//               rotate: heart.angle
//             }}
//             animate={{ 
//               opacity: 0,
//               y: -window.innerHeight,
//               x: Math.random() * 100 - 50,
//               scale: 0.5,
//               rotate: heart.angle + 360
//             }}
//             transition={{ 
//               duration: heart.duration,
//               ease: "linear"
//             }}
//             className="fixed text-xl pointer-events-none"
//             style={{
//               left: `${heart.left}%`,
//               color: heart.color,
//               fontSize: `${heart.size}px`,
//               top: "90%",
//               zIndex: 50,
//             }}
//           >
//             {['💖', '💕', '🧡', '💓', '💝'][Math.floor(Math.random() * 5)]}
//           </motion.div>
//         ))}

//         {/* Popup Message */}
//         <AnimatePresence>
//           {showPopup && (
//             <motion.div
//               initial={{ opacity: 0, y: 20, scale: 0.5 }}
//               animate={{ opacity: 1, y: 0, scale: 1 }}
//               exit={{ opacity: 0, y: -20, scale: 0.5 }}
//               className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-gray-800 p-4 rounded-2xl shadow-xl border border-pink-500/30 flex items-center gap-3"
//             >
//               <div className="text-pink-400 font-semibold">
//                 You're amazing! Thanks for the love! 💖
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </motion.div>
//     </section>
//   );
// };

// export default Contact;


import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaEnvelope, FaHeart } from "react-icons/fa";
import { GiSparkles } from "react-icons/gi";

const Contact = () => {
  const [heartCount, setHeartCount] = useState(0);
  const [hasGivenHeart, setHasGivenHeart] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [floatingHearts, setFloatingHearts] = useState([]);

  // Load initial count from localStorage
  useEffect(() => {
    const storedCount = parseInt(localStorage.getItem("heartCount")) || 0;
    const givenHeart = localStorage.getItem("heartGiven") === "true";
    setHeartCount(storedCount);
    setHasGivenHeart(givenHeart);
  }, []);

  const createHearts = () => {
    const hearts = Array.from({ length: 8 }).map((_, i) => ({
      id: Date.now() + i,
      left: Math.random() * 80 + 10,
      size: Math.random() * 20 + 10,
      color: `hsl(${Math.random() * 60 + 300}, 70%, 60%)`,
      duration: Math.random() * 2 + 2,
      angle: Math.random() * 360
    }));
    setFloatingHearts([...floatingHearts, ...hearts]);
  };

  const handleHeartClick = () => {
    if (hasGivenHeart) return;

    const newCount = heartCount + 1;
    setHeartCount(newCount);
    setHasGivenHeart(true);
    
    // Update both localStorage and state
    localStorage.setItem("heartCount", newCount.toString());
    localStorage.setItem("heartGiven", "true");
    
    setShowPopup(true);
    createHearts();
    setTimeout(() => setShowPopup(false), 5000);
  };

  // Reset hearts for testing
  const handleReset = () => {
    localStorage.removeItem("heartGiven");
    localStorage.removeItem("heartCount");
    setHeartCount(0);
    setHasGivenHeart(false);
  };

  return (
    <section
      id="contact"
      className="relative bg-[#0c0101] text-white overflow-hidden py-24 px-6"
    >
      {/* Wave Background */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="w-full h-24">
          <path
            d="M0.00,49.98 C150.00,150.00 350.00,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
            style={{ stroke: "none", fill: "#0f172a" }}
          ></path>
        </svg>
      </div>

      {/* Animated Sparkles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <GiSparkles 
            key={i}
            className="absolute text-pink-200/20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 15 + 5}px`,
              animationDelay: `${i * 0.5}s`
            }}
          />
        ))}
      </div>

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

        {/* Email Button */}
        <motion.a
          href="mailto:chris.gautam.0024@gmail.com"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group mt-8 inline-flex items-center gap-3 px-8 py-4 rounded-full text-lg font-semibold bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-xl hover:shadow-pink-500/20 transition-all duration-300"
        >
          <FaEnvelope className="text-xl group-hover:animate-bounce" />
          <span className="relative">
            Drop Me an Email
            <span className="absolute -right-4 -top-2 text-xl animate-ping">✨</span>
          </span>
        </motion.a>

        {/* Heart Section */}
        <div className="mt-12 flex flex-col items-center justify-center space-y-6">
          {/* Total Hearts Display */}
          <motion.div 
            className="flex flex-col items-center gap-2"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-pink-500/20 rounded-full blur-xl" />
              <div className="text-6xl text-pink-400 animate-heartbeat">
                ❤️
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">
                  {heartCount}
                </span>
              </div>
            </div>
            <p className="text-gray-400 text-lg font-medium">
              Hearts Received
            </p>
          </motion.div>

          {/* Heart Giving Button */}
          <div className="flex flex-col items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleHeartClick}
              disabled={hasGivenHeart}
              className="relative w-16 h-16 flex items-center justify-center text-4xl bg-pink-500 hover:bg-pink-600 text-white rounded-full shadow-2xl transition-all duration-300 disabled:opacity-50"
            >
              ❤️
              <div className="absolute inset-0 rounded-full border-4 border-pink-300/30 animate-pulse" />
            </motion.button>

            <motion.p 
              className="text-pink-300 text-sm flex items-center gap-2"
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              {hasGivenHeart ? (
                <>
                  <FaHeart className="text-red-400" />
                  Thank you for your love! 💞
                </>
              ) : (
                "Click the heart to show some love!"
              )}
            </motion.p>
          </div>
        </div>

        {/* Floating Hearts */}
        {floatingHearts.map((heart) => (
          <motion.div
            key={heart.id}
            initial={{ 
              opacity: 1,
              y: 0,
              x: 0,
              scale: 1,
              rotate: heart.angle
            }}
            animate={{ 
              opacity: 0,
              y: -window.innerHeight,
              x: Math.random() * 100 - 50,
              scale: 0.5,
              rotate: heart.angle + 360
            }}
            transition={{ 
              duration: heart.duration,
              ease: "linear"
            }}
            className="fixed text-xl pointer-events-none"
            style={{
              left: `${heart.left}%`,
              color: heart.color,
              fontSize: `${heart.size}px`,
              top: "90%",
              zIndex: 50,
            }}
          >
            {['💖', '💕', '🧡', '💓', '💝'][Math.floor(Math.random() * 5)]}
          </motion.div>
        ))}

        {/* Popup Message */}
        <AnimatePresence>
          {showPopup && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.5 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.5 }}
              className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-gray-800 p-4 rounded-2xl shadow-xl border border-pink-500/30 flex items-center gap-3"
            >
              <div className="text-pink-400 font-semibold">
                You're amazing! Thanks for the love! 💖
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Reset Button */}
        <motion.button
          onClick={handleReset}
          whileHover={{ scale: 1.05 }}
          className="mt-6 px-4 py-2 text-sm bg-gray-800 hover:bg-gray-700 text-pink-400 border border-pink-500/30 rounded-full shadow-md flex items-center gap-2 mx-auto"
        >
          🔄 Reset Hearts (Testing Only)
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Contact;