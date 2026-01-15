import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Blog from "../components/Blog";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <main className="relative pb-16">
      <Navbar />
      <section id="home" className="pt-24">
        <Hero />
      </section>
      <section id="about" className="pt-24">
        <About />
      </section>
      <section id="blog" className="pt-24">
        <Blog />
      </section>
      <section id="projects" className="pt-24">
        <Projects />
      </section>
      <section id="skills" className="pt-24">
        <Skills />
      </section>
      <section id="experience" className="pt-24">
        <Experience />
      </section>
      <Footer />
    </main>
  );
}


