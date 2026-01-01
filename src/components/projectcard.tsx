import React from 'react'

interface ProjectProps {
  title: string;
  description: string;
  tech: string[];
  link: string;
}

export default function ProjectCard({ title, description, tech, link }: ProjectProps) {
  return (
    <div className="group p-6 bg-white border border-slate-200 rounded-2xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
        {title}
      </h3>
      <p className="text-slate-600 mb-6 line-clamp-2">
        {description}
      </p>
      <div className="flex flex-wrap gap-2 mb-6">
        {tech.map((item) => (
          <span key={item} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full">
            {item}
          </span>
        ))}
      </div>
      <a 
        href={link} 
        className="text-sm font-semibold text-blue-600 hover:underline"
      >
        Try it →
      </a>
    </div>
  )
}