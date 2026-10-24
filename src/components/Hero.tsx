"use client";

import * as React from "react";
import Image from "next/image";
import { ArrowRight, Download, Maximize2, Sparkles, Code2, X, Cpu } from "lucide-react";

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
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  // Keyboard escape for modal
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsModalOpen(false);
    };
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-28 pb-16 bg-slate-50 dark:bg-[#060814] transition-colors duration-300"
    >
      {/* Dynamic Background Glow Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 dark:bg-cyan-500/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow [animation-delay:1.5s]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* LEFT COLUMN: Introduction & Actionable Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start">
            {/* Greeting Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 text-teal-600 dark:text-cyan-400 border border-teal-500/20 font-mono text-xs sm:text-sm tracking-wider uppercase font-semibold">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Hello World! I&apos;m</span>
            </div>

            {/* Name & Role */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                Akib Dabgar
              </h1>
              <h2 className="text-xl sm:text-3xl font-semibold bg-gradient-to-r from-teal-600 via-blue-600 to-purple-600 dark:from-cyan-400 dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                Full-Stack Software Engineer
              </h2>
            </div>

            {/* Bio Paragraph */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
              I build scalable web applications and distributed systems using{" "}
              <span className="font-semibold text-teal-600 dark:text-teal-400">React</span>,{" "}
              <span className="font-semibold text-purple-600 dark:text-purple-400">Node.js</span>, and{" "}
              <span className="font-semibold text-indigo-600 dark:text-indigo-400">NestJS</span>.
              Specialized in designing{" "}
              <span className="font-semibold text-slate-900 dark:text-white">microservices</span>,
              integrating{" "}
              <span className="font-semibold text-teal-600 dark:text-teal-400">RabbitMQ</span> for asynchronous messaging,
              engineering secure{" "}
              <span className="font-semibold text-purple-600 dark:text-purple-400">REST APIs</span>, and crafting intuitive user interfaces.
            </p>

            {/* Quick Experience & Technology Badges */}
            <div className="flex flex-wrap gap-2 pt-1 justify-center lg:justify-start">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-200/70 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-300/50 dark:border-slate-700">
                <Cpu className="h-3.5 w-3.5 text-teal-500" />
                3+ Years Industry Exp.
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-200/70 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-300/50 dark:border-slate-700">
                <Code2 className="h-3.5 w-3.5 text-purple-500" />
                Microservices & Event-Driven
              </span>
            </div>

            {/* CTA Buttons & Social Handles */}
            <div className="flex flex-wrap gap-4 items-center pt-4 justify-center lg:justify-start">
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold bg-gradient-to-r from-teal-500 to-purple-500 hover:from-teal-600 hover:to-purple-600 text-white shadow-lg hover:shadow-teal-500/25 transition-all duration-300 group cursor-pointer"
              >
                View My Work
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="/Akib-Dabgar-Resume.pdf"
                download="Akib-Dabgar-Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold bg-white dark:bg-[#0b0f19] text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition duration-200 shadow-md cursor-pointer"
              >
                <Download className="h-4 w-4" />
                Download CV
              </a>

              {/* Social Icons */}
              <div className="flex items-center gap-2 pl-2">
                <a
                  href="https://github.com/akib-dabgar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-teal-500/50 transition duration-200 shadow-sm"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon />
                </a>
                <a
                  href="https://linkedin.com/in/akib-dabgar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-purple-500/50 transition duration-200 shadow-sm"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: CIRCULAR AVATAR SPOTLIGHT */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative group">
              {/* Dual-color glowing aura matching the split artwork */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-teal-500/35 via-indigo-500/25 to-purple-500/40 rounded-full blur-2xl group-hover:blur-3xl opacity-80 group-hover:opacity-100 transition duration-500 pointer-events-none" />

              {/* Outer Gradient Ring Wrapper */}
              <div
                onClick={() => setIsModalOpen(true)}
                className="relative p-1.5 sm:p-2 rounded-full bg-gradient-to-tr from-teal-500 via-indigo-500 to-purple-500 shadow-2xl cursor-pointer group/circle transition-transform duration-500 hover:scale-[1.03]"
              >
                {/* Circular Mask Container */}
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden bg-slate-900 border-4 border-slate-900/90 shadow-inner">
                  <Image
                    src="/images/akib-developer-art.jpg"
                    alt="Akib Dabgar - Full-Stack Engineer & Developer"
                    fill
                    priority
                    sizes="(max-width: 640px) 256px, (max-width: 768px) 320px, 384px"
                    className="object-cover object-[50%_35%] group-hover/circle:scale-108 transition-transform duration-700 ease-out"
                  />

                  {/* Subtle inner dark gradient edge for depth */}
                  <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/20 pointer-events-none" />

                  {/* Hover Zoom Overlay */}
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover/circle:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                    <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-slate-900/90 text-white text-xs font-semibold shadow-xl border border-white/20">
                      <Maximize2 className="h-3.5 w-3.5 text-teal-400" />
                      Expand Artwork
                    </span>
                  </div>
                </div>

                {/* Floating Pill Badges around the Circle */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap z-20">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-900/95 text-white text-xs font-semibold shadow-xl border border-teal-500/40 backdrop-blur-md">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    Engineer &bull; Developer
                  </span>
                </div>
              </div>

              {/* Sub-caption */}
              <div className="mt-6 text-center">
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  <span className="font-semibold text-slate-700 dark:text-slate-300">Akib Dabgar</span> • Full-Stack Systems &amp; Modern UI
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* High-Resolution Fullscreen Lightbox Modal */}
      {isModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setIsModalOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl max-h-[92vh] glass rounded-3xl overflow-hidden shadow-2xl border border-slate-700 bg-slate-900 flex flex-col"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/90">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-teal-500/10 text-teal-400">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    Akib Dabgar • The Engineer &amp; Developer
                  </h3>
                  <p className="text-xs text-slate-400">
                    Split Visual Identity • Architectural Vision &amp; Technical Execution
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Image View */}
            <div className="relative flex-1 overflow-auto p-4 sm:p-6 flex items-center justify-center bg-slate-950/95 max-h-[75vh]">
              <Image
                src="/images/akib-developer-art.jpg"
                alt="Akib Dabgar - Full Resolution Persona"
                width={1400}
                height={940}
                className="max-h-[70vh] w-auto object-contain rounded-2xl shadow-2xl border border-slate-800"
                priority
              />
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-3.5 border-t border-slate-800 bg-slate-900/90 flex items-center justify-between">
              <span className="text-xs text-slate-400 font-medium">
                React • Node.js • NestJS • TypeScript • PostgreSQL • Microservices • AI/ML
              </span>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
