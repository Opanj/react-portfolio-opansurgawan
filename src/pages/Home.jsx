import { useEffect, useState } from "react";
import About from "../components/portfolio-2/About";
import Experience from "../components/portfolio-2/Experiences";
import Header from "../components/portfolio-2/Header";
import Projects from "../components/portfolio-2/Projects";
import AuthLayout from "../layouts/AuthLayout";
import Footer from "../components/portfolio-2/Footer";

const HomePage = () => {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;

        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          currentSection = section.getAttribute("id");
        }
      });
      // console.log("current Section:", currentSection);
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AuthLayout>
      <div className="lg:flex lg:justify-between lg:gap-4">
        <Header activeLink={activeSection} />
        <div id="content" className="pt-24 lg:w-1/2 lg:py-24">
          <About />
          <Experience />
          <Projects />
          <Footer />
        </div>
      </div>
    </AuthLayout>
  );
};

export default HomePage;
