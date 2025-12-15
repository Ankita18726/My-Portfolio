// src/App.jsx
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
import Skills from "./components/sections/Skills";
import Education from "./components/sections/Education";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import CertificationsAchievements from "./components/sections/CertificationsAchievements";
function App() {
  return (
    <>
      <Navbar />
      <main className="pt-20 space-y-10">
        <Hero />
        {/* <About /> */}
        <Projects />
        <Experience />
        <Skills />
        <Education />
        <CertificationsAchievements />
        
        <Contact />
        
      </main>
      <Footer />
    </>
  );
}

export default App;
