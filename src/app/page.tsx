import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/zhifrantino";
import ProjectCard from "@/components/projectcard";
import Footer from "@/components/footer";
import { PROJECTS } from "@/constants";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black font-sans text-black dark:text-white selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black overflow-x-hidden">
      {/* navbar */}
      <Navbar />
      
      {/* primary content */}
      <main className="w-full px-[5vw]">
        
        {/* Hero section */}
        <Hero />

        {/* project section */}
        <section id="projects" className="py-32 border-t border-zinc-200 dark:border-zinc-800">
          <div className="flex items-center gap-10 mb-20">
            <h2 className="text-5xl font-black tracking-tighter uppercase leading-none">Recent Projects</h2>
            <div className="h-[2px] w-full bg-zinc-900 dark:bg-zinc-100"></div>
          </div>
          <div className="grid grid-cols-1 gap-16">
            {PROJECTS.map((project, index) => (
              <ProjectCard 
                key={index}
                title={project.title}
                description={project.description}
                tech={project.tech}
                link={project.link}
              />
            ))}
          </div>
        </section>

      {/* Section About */}
        <About /> 
      </main>

      {/* footer */}
      <Footer />
    </div>
  );
}