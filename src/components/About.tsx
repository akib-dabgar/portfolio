import * as React from "react";
import { Globe, Terminal, Database, Layers } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-100/30 dark:bg-slate-900/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Title Block */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-teal-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-sm sm:text-lg text-slate-500 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Hi! I'm Akib Dabgar, a passionate Full-Stack Developer with 3+ years of experience creating robust, scalable web applications. I love turning complex problems into simple, beautiful, and intuitive solutions.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: My Journey */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-850 dark:text-slate-100">
              My Journey
            </h3>
            <div className="space-y-4 text-slate-650 dark:text-slate-350 leading-relaxed text-justify text-sm sm:text-base">
              <p>
                My software development journey started with a curiosity about how web applications work behind the scenes. During my academic years, I began learning JavaScript and web development, which sparked my interest in building real-world applications.
              </p>
              <p>
                Over the past 3+ years, I have grown into a Full Stack Developer, working with React.js, Node.js, NestJS, TypeScript, PostgreSQL, and MongoDB. I have contributed to enterprise web applications, fintech payment systems, and SaaS platforms, gaining hands-on experience across the complete software development lifecycle.
              </p>
              <p>
                Throughout my career, I have focused on building scalable applications, developing secure APIs, optimizing performance, and solving real business problems. Working on production systems has taught me the importance of clean code, collaboration, continuous learning, and delivering reliable solutions.
              </p>
              <p>
                Today, I continue to expand my skills, explore modern technologies, and take on new challenges that help me grow both technically and professionally.
              </p>
            </div>
          </div>

          {/* Right Column: Skill Cards Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {/* Frontend Card */}
            <div className="bg-white dark:bg-[#0b0f19] p-6 rounded-2xl border border-slate-200/50 dark:border-slate-800 shadow-sm flex flex-col space-y-4 transition-all duration-300 hover:border-teal-500/20 dark:hover:border-teal-500/10">
              <div className="w-fit p-2.5 rounded-xl bg-teal-500/10 text-teal-400">
                <Globe className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-bold text-slate-800 dark:text-white text-base">
                  Frontend
                </h4>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {["HTML", "CSS", "JavaScript", "React.js", "Next.js", "TypeScript", "Tailwind CSS", "Bootstrap",].map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-slate-100 dark:bg-[#1a233d] text-slate-600 dark:text-slate-300 rounded-md font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Backend Card */}
            <div className="bg-white dark:bg-[#0b0f19] p-6 rounded-2xl border border-slate-200/50 dark:border-slate-800 shadow-sm flex flex-col space-y-4 transition-all duration-300 hover:border-purple-500/20 dark:hover:border-purple-500/10">
              <div className="w-fit p-2.5 rounded-xl bg-purple-500/10 text-purple-400">
                <Terminal className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-bold text-slate-800 dark:text-white text-base">
                  Backend
                </h4>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {["Node.js", "Express.js", "NestJS", "ASP.NET"].map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-slate-100 dark:bg-[#1a233d] text-slate-600 dark:text-slate-300 rounded-md font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Database Card */}
            <div className="bg-white dark:bg-[#0b0f19] p-6 rounded-2xl border border-slate-200/50 dark:border-slate-800 shadow-sm flex flex-col space-y-4 transition-all duration-300 hover:border-blue-500/20 dark:hover:border-blue-500/10">
              <div className="w-fit p-2.5 rounded-xl bg-blue-500/10 text-blue-400">
                <Database className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-bold text-slate-800 dark:text-white text-base">
                  Database
                </h4>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {["MongoDB", "MySQL", "PostgreSQL", "Redis"].map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-slate-100 dark:bg-[#1a233d] text-slate-600 dark:text-slate-300 rounded-md font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Integration & ORM Card */}
            <div className="bg-white dark:bg-[#0b0f19] p-6 rounded-2xl border border-slate-200/50 dark:border-slate-800 shadow-sm flex flex-col space-y-4 transition-all duration-300 hover:border-indigo-500/20 dark:hover:border-indigo-500/10">
              <div className="w-fit p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400">
                <Layers className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-bold text-slate-800 dark:text-white text-base">
                  Integration & ORM
                </h4>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {["API Integration", "REST APIs", "TypeORM", "Prisma", "Sequelize", "Socket.io", "RabbitMQ"].map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-slate-100 dark:bg-[#1a233d] text-slate-600 dark:text-slate-300 rounded-md font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}



