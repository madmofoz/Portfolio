import React from 'react';

export default function About() {
  const codeSkills = ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Flask"];
  const engineeringSkills = ["SolidWorks", "Engine Tuning"];
  const otherSkills = ["Photoshop", "Calisthenics", "Branding"];

    return (
    <section id="about" className="py-24 border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          
          {/* Section Header */}
          <div className="md:col-span-1">
            <h2 className="text-3xl font-bold text-black dark:text-white sticky top-24 tracking-tighter">
              ABOUT ME
            </h2>
          </div>

          {/* Main Content */}
          <div className="md:col-span-2 space-y-16">
            
            {/* Short Intro */}
            <div className="space-y-6">
              <p className="text-2xl text-black dark:text-zinc-400 font-medium leading-tight">
                I am <span className="text-black dark:text-white">Muhammad Zhifrantino</span>. I don't believe in comfort. 
              </p>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                My life is a continuous experiment between Digital<span className="text-black dark:text-white"> Logic</span> and Mechanical<span className="text-black dark:text-white"> Precision</span>. 
                Whether it's writing thousands of lines of Flask code or performing an engine swap in the garage, I live to build systems with total control.
              </p>
            </div>

            {/* The Three Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-6 bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-2xl hover:border-zinc-400 transition-colors">
                <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-3">Digital Craft</h4>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  Building <strong>SiliminPro</strong>. Translating complex engine mechanics into functional lines of code.
                </p>
              </div>
              <div className="p-6 bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-2xl hover:border-zinc-400 transition-colors">
                <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-3">Mechanical</h4>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  My mind operates with thermodynamic precision. From CAD to manual fabrication.
                </p>
              </div>
              <div className="p-6 bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-2xl hover:border-zinc-400 transition-colors">
                <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-3">Human Power</h4>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  <strong>Grounding.</strong> 2 AM calisthenics is my method for maintaining mental discipline.
                </p>
              </div>
            </div>

            {/* Skills */}
            <div className="space-y-8">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-zinc-400">
                Technical Stack
              </h3>
              
              <div className="space-y-6">
                {/* Code */}
                <div>
                  <h4 className="text-xs text-zinc-300 mb-3">Code</h4>
                  <div className="flex flex-wrap gap-2">
                    {codeSkills.map(skill => (
                      <span key={skill} className="px-3 py-1 bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-300 rounded-lg text-xs border border-zinc-200 dark:border-zinc-800">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Engineering */}
                <div>
                  <h4 className="text-xs text-zinc-300 mb-3">Mechanical Engineering</h4>
                  <div className="flex flex-wrap gap-2">
                    {engineeringSkills.map(skill => (
                      <span key={skill} className="px-3 py-1 bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-300 rounded-lg text-xs border border-zinc-200 dark:border-zinc-800">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Others */}
                <div>
                  <h4 className="text-xs text-zinc-300 mb-3">Others</h4>
                  <div className="flex flex-wrap gap-2">
                    {otherSkills.map(skill => (
                      <span key={skill} className="px-3 py-1 bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-300 rounded-lg text-xs border border-zinc-200 dark:border-zinc-800">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Closing CTA */}
            <div className="pt-10">
              <p className="text-lg text-zinc-600 dark:text-zinc-400">
                I seek challenges that force my brain to think 10 steps ahead. <br />
                <span className="text-black dark:text-white font-bold italic">Let's build something overkill.</span>
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}