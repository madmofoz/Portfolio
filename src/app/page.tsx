import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/zhifrantino";
import ProjectCard from "@/components/projectcard";
import Footer from "@/components/footer";
import { PROJECTS } from "@/constants";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* navbar */}
      <Navbar />
      
      {/* primary content */}
      <main className="max-w-3xl mx-auto px-6 lg:px-0">
        
        {/* Hero section */}
        <Hero />

        {/* project section */}
        <section id="projects" className="py-20 border-t border-zinc-200 dark:border-zinc-800">
          <h2 className="text-2xl font-bold mb-8 text-black dark:text-white">Recent Projects</h2>
          <div className="grid grid-cols-1 gap-6">
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