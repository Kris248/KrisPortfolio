import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import NoteworthyProjects from "./components/NoteworthyProjects";
import Contact from "./components/Contact";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <Router>
      <div className="bg-[#0a192f] text-white min-h-screen w-full overflow-x-hidden">   
        <Header />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <NoteworthyProjects />
        <Contact />
        <Sidebar/>
      </div>
    </Router>
  );
}

export default App;
