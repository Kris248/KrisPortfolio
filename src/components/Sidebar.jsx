import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter, FaInstagram, FaTelegram } from "react-icons/fa6"; // Updated icons
import { SiLeetcode } from "react-icons/si";

const Sidebar = () => {
  return (
    <div className="fixed left-4 bottom-10 flex flex-col space-y-5">
      <a
        href="https://github.com/kris248"
        target="_blank"
        rel="noopener noreferrer"
        className="icon-style"
      >
        <FaGithub size={28} />
      </a>
      <a
        href="https://www.linkedin.com/in/kris-gautam-57b4742b5/"
        target="_blank"
        rel="noopener noreferrer"
        className="icon-style"
      >
        <FaLinkedin size={28} />
      </a>
      <a
        href="https://twitter.com/darkroomtrader"
        target="_blank"
        rel="noopener noreferrer"
        className="icon-style"
      >
        <FaXTwitter size={28} />
      </a>
      <a
        href="https://instagram.com/hey.iamkris"
        target="_blank"
        rel="noopener noreferrer"
        className="icon-style"
      >
        <FaInstagram size={28} />
      </a>
      <a
        href="https://leetcode.com/cravingsoul"
        target="_blank"
        rel="noopener noreferrer"
        className="icon-style"
      >
        <SiLeetcode size={28} />
      </a>
      <a
        href="https://t.me/heydotiamkris"
        target="_blank"
        rel="noopener noreferrer"
        className="icon-style"
      >
        <FaTelegram size={28} />
      </a>

      {/* Tail for aesthetic line */}
      <div className="w-0.5 h-20 bg-teal-400 mx-auto mt-2"></div>
    </div>
  );
};

export default Sidebar;
