import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function AboutPage() {
  const skills = [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Flask",
    "Photoshop",
  ];

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black font-sans">
      <Navbar />

      <main className="max-w-3xl mx-auto px-6 pt-32 pb-20">
        <h1 className="text-4xl font-bold text-black dark:text-white mb-8">
          About Me
        </h1>

        <div className="prose prose-zinc dark:prose-invert max-w-none">
          <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
            I'm{" "}
            <span className="text-black dark:text-white font-semibold">
              Muhammad Zhifrantino
            </span>
            , a developer focused on building a digital ecosystem through{" "}
            <span className="text-blue-600 font-medium">SiliminPro</span>.
          </p>

          <div className="prose prose-zinc dark:prose-invert max-w-none">
            <p className="text-xl text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4">
              I believe that code is not just a series of instructions for computers,
              but a tool to solve real problems and provide value to users.
            </p>
            <p className="text-xl text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4">
              Currently, I'm delving into modern web architecture and how to optimize application performance to keep it lightweight yet powerful.
            </p>
          </div>
        </div>

        {/* Section Skills Terpisah */}
        <div className="mt-16">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500 mb-8">
            Technical Stack
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {skills.map((skill) => (
              <div
                key={skill}
                className="p-4 bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-2xl text-center text-zinc-800 dark:text-zinc-300 font-medium hover:border-blue-500/50 transition-colors"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
