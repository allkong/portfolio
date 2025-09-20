import Header from "@/components/header";
import Hero from "@/components/hero";
import About from "@/components/section/about";
import Skills from "@/components/section/skills";
import Projects from "@/components/section/projects";
import Contact from "@/components/section/contact";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
