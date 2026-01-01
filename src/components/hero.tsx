export default function Hero() {
  return (
    <section className="pt-40 pb-20 flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
      <h1 className="max-w-2xl text-5xl font-bold leading-tight tracking-tight text-black dark:text-zinc-50">
        Hello everyone, <br />
        welcome to my <span className="text-gray-400">portfolio.</span>
      </h1>
      
      <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
        First of all, my name is <span className="font-bold text-zinc-900 dark:text-white">Muhammad Zhifrantino</span>. 
        I build digital experiences at{" "}
        <a
          href="https://siliminpro.fly.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-blue-600 underline decoration-blue-200 underline-offset-4 hover:decoration-blue-600 transition-all"
        >
          SiliminPro
        </a>.
      </p>

      <div className="flex gap-4 mt-4">
        <a
          href="#projects"
          className="px-6 py-2.5 bg-black dark:bg-white dark:text-black text-white rounded-full text-sm font-medium hover:opacity-80 transition"
        >
          View My Projects
        </a>
      </div>
    </section>
  );
}