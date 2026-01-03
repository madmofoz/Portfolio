import React from 'react';

export default function About() {
  const codeSkills = ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Flask"];
  const engineeringSkills = ["SolidWorks", "Engine Tuning"];
  const otherSkills = ["Photoshop", "Calisthenics", "Branding"];

    return (
    <section id="about" className="py-32 border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-360 mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Section Header */}
          <div className="lg:col-span-3">
            <h2 className="text-4xl font-black text-black dark:text-white sticky top-32 tracking-tighter leading-none uppercase">
              ABOUT <br /> ME
            </h2>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-9 space-y-20">
            
            {/* Short Intro */}
            <div className="space-y-8">
              <p className="text-3xl md:text-4xl text-black dark:text-zinc-100 font-medium leading-[1.1] tracking-tight">
                I am <span className="text-black dark:text-white">Muhammad Zhifrantino</span>. I don't believe in comfort. 
              </p>
              <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-4xl tracking-tight">
                My life is a continuous experiment between Digital<span className="text-black dark:text-white font-semibold"> Logic</span> and Mechanical<span className="text-black dark:text-white font-semibold"> Precision</span>. 
                Whether it's writing thousands of lines of Flask code or performing an engine swap in the garage, I live to build systems with total control.
              </p>
            </div>

            {/* The Three Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="group p-8 bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 rounded-3xl hover:border-zinc-400 dark:hover:border-zinc-500 transition-all duration-300">
                <div className="h-2 w-12 bg-zinc-800 dark:bg-zinc-200 mb-6 group-hover:w-full transition-all duration-500"></div>
                <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-500 mb-4 font-mono">01 / Digital Craft</h4>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Building <strong>SiliminPro</strong>. Translating complex engine mechanics into functional lines of code.
                </p>
              </div>
              
              <div className="group p-8 bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 rounded-3xl hover:border-zinc-400 dark:hover:border-zinc-500 transition-all duration-300">
                <div className="h-2 w-12 bg-zinc-800 dark:bg-zinc-200 mb-6 group-hover:w-full transition-all duration-500"></div>
                <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-500 mb-4 font-mono">02 / Mechanical</h4>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  My mind operates with thermodynamic precision. From CAD to manual fabrication.
                </p>
              </div>

              <div className="group p-8 bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 rounded-3xl hover:border-zinc-400 dark:hover:border-zinc-500 transition-all duration-300">
                <div className="h-2 w-12 bg-zinc-800 dark:bg-zinc-200 mb-6 group-hover:w-full transition-all duration-500"></div>
                <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-500 mb-4 font-mono">03 / Human Power</h4>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  <strong>Grounding.</strong> 4 AM calisthenics is my method for maintaining mental discipline.
                </p>
              </div>
            </div>

            {/* Categorized Skills Section */}
            <div className="space-y-12">
              <div className="flex items-center gap-4">
                <h3 className="text-md font-semibold uppercase tracking-widest text-zinc-400 whitespace-nowrap">
                  Technical Stack
                </h3>
                <div className="h-px w-full bg-zinc-200 dark:border-zinc-800"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {/* Code */}
                <div className="space-y-4">
                  <h4 className="text-sm text-zinc-500 font-semibold uppercase tracking-widest">Code</h4>
                  <div className="flex flex-wrap gap-2">
                    {codeSkills.map(skill => (
                      <span key={skill} className="px-4 py-1.5 bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-300 rounded-full text-sm font-medium border border-zinc-200 dark:border-zinc-800">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Engineering */}
                <div className="space-y-4">
                  <h4 className="text-sm text-zinc-500 font-semibold uppercase tracking-widest">Mechanical Engineering</h4>
                  <div className="flex flex-wrap gap-2">
                    {engineeringSkills.map(skill => (
                      <span key={skill} className="px-4 py-1.5 bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-300 rounded-full text-sm font-medium border border-zinc-200 dark:border-zinc-800">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Others */}
                <div className="space-y-4">
                  <h4 className="text-sm text-zinc-500 font-semibold uppercase tracking-widest">Others</h4>
                  <div className="flex flex-wrap gap-2">
                    {otherSkills.map(skill => (
                      <span key={skill} className="px-4 py-1.5 bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-300 rounded-full text-sm font-medium border border-zinc-200 dark:border-zinc-800">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Closing CTA */}
            <div className="pt-16 border-t border-zinc-100 dark:border-zinc-900">
              <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-snug">
                I seek challenges that force my brain to think 10 steps ahead. <br />
                <span className="text-black dark:text-white font-black italic text-xl mt-4 block tracking-tighter uppercase">
                  Let's build something overkill.
                </span>
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}