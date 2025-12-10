import Navbar from "@/sections/navbar";
import Home from "@/sections/home";
import Projects from "@/sections/projects";
import Contact from "@/sections/contact";
import Footer from "@/sections/footer";
import Experience from "@/sections/experience";
import { useEffect, useState } from "react";
import { SelectedPage } from "@/reusables/types";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-gray-20">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage} />
      {/* <AboutMe setSelectedPage={setSelectedPage} /> */}
      <Projects setSelectedPage={setSelectedPage} />
      {/* <Skills setSelectedPage={setSelectedPage} /> */}
      <Experience setSelectedPage={setSelectedPage} />
      {/* <Education setSelectedPage={setSelectedPage} /> */}
      <Contact setSelectedPage={setSelectedPage} />
      <Footer />
    </div>
  );
}

export default App;
