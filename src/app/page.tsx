import Header from '@/components/layout/header';
import Hero from '@/components/section/hero';
import About from '@/components/section/about';
import Skills from '@/components/section/skills';
import Projects from '@/components/section/projects';
import Contact from '@/components/section/contact';
import ThemeToggle from '@/components/button/theme-toggle';
import ScrollToTop from '@/components/button/scroll-to-top';

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />

      <div className="fixed right-6 bottom-6 z-10 flex flex-col gap-2.5 sm:flex-row">
        <ThemeToggle />
        <ScrollToTop />
      </div>
    </div>
  );
};

export default Home;
