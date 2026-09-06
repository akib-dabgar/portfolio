"use client";

import { ArrowRight, Download } from "lucide-react";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" rx="1" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 pb-12 bg-slate-50 dark:bg-[#060814] transition-colors duration-300"
    >
      {/* Background Glow Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 dark:bg-cyan-500/15 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 dark:bg-purple-500/15 rounded-full blur-3xl animate-pulse-slow [animation-delay:1.5s]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-6 sm:space-y-8 flex flex-col items-center">

          {/* Greeting */}
          <div className="font-mono text-xs sm:text-sm text-teal-650 dark:text-cyan-400 tracking-widest uppercase">
            Hello World! I&apos;m
          </div>

          {/* Name & Role */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-slate-900 dark:text-white">
              Akib Dabgar
            </h1>
            <h2 className="text-lg sm:text-2xl md:text-3xl font-medium bg-gradient-to-r from-teal-600 via-blue-600 to-purple-600 dark:from-cyan-400 dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              Full-Stack Software Engineer
            </h2>
          </div>

          <p className="text-base sm:text-lg md:text-xl text-slate-655 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            I build scalable web applications and backend systems using{" "}
            <span className="font-semibold text-teal-650 dark:text-teal-400">React</span>,{" "}
            <span className="font-semibold text-purple-650 dark:text-purple-450">Node.js</span>, and{" "}
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">NestJS</span>.
            My experience includes developing{" "}
            <span className="font-semibold text-slate-800 dark:text-white">microservices</span>,
            integrating{" "}
            <span className="font-semibold text-teal-655 dark:text-teal-400">RabbitMQ</span> for
            asynchronous processing, building secure{" "}
            <span className="font-semibold text-purple-650 dark:text-purple-450">REST APIs</span>,
            and creating{" "}
            <span className="font-semibold text-indigo-650 dark:text-indigo-400">responsive user interfaces</span>.
            I enjoy solving complex technical challenges and delivering reliable, high-quality software solutions.
          </p>

          {/* CTA Buttons & Social Handles */}
          <div className="flex flex-col sm:flex-row gap-4 items-center pt-6">
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/akib-dabgar"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-350 dark:hover:border-slate-700 transition duration-200 cursor-pointer shadow-sm"
                aria-label="GitHub Profile"
              >
                <GithubIcon />
              </a>
              <a
                href="https://linkedin.com/in/akib-dabgar"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-350 dark:hover:border-slate-700 transition duration-200 cursor-pointer shadow-sm"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon />
              </a>
            </div>

            <div className="flex gap-4">
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-gradient-to-r from-teal-500 to-purple-500 hover:from-teal-600 hover:to-purple-600 text-white shadow-md transition-all duration-300 group cursor-pointer"
              >
                View My Work
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/Akib-Dabgar-Resume.pdf"
                download="Akib-Dabgar-Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-white dark:bg-[#0b0f19]/80 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition duration-200 shadow-md cursor-pointer"
              >
                <Download className="h-4 w-4" />
                Download CV
              </a>
            </div>
          </div>

        </div>
      </div>
    </section >
  );
}
