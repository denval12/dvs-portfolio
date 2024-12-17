import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="overflow-x-hidden  ">
      <div className=" fixed top-0 -z-10 h-full w-full">
        <div
          style={{
            background: `linear-gradient(100deg, rgba(206, 190, 216, 1),rgba(174, 197, 242, 1))`,
            backdropFilter: "blur(4px)",
          }}
          className="absolute top-0 z-[-2] h-screen w-screen"
        ></div>
      </div>
      <div className=" container mx-auto  px-8">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};
export default App;
