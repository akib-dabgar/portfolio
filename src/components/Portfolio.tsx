"use client";

import * as React from "react";
import { FolderGit2, Cpu, Database, Check } from "lucide-react";

const PROJECTS = [
  {
    title: "SocialHub",
    category: "Full-Stack/MERN",
    techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "Socket.io", "Redux", "Tailwind CSS", "MUI", "SendGrid", "Claude API"],
    description: "Developed a MERN social media application featuring real-time chats, automated token rotations, and Claude-powered AI caption generators.",
    bullets: [
      "Constructed profiles, post collections, liking/commenting systems, email-based password resets, and refresh token rotations.",
      "Wired low-latency bi-directional messaging with online presence status indicators via Socket.io channels.",
      "Integrated Claude API (Anthropic) with client fallbacks to support automated caption generation, hashtags, and smart comment suggestions.",
    ],
  },
  {
    title: "PayGrid",
    category: "Fintech/Ledger",
    techStack: ["NestJS", "React.js", "PostgreSQL", "RabbitMQ", "QorPay", "MassPay", "US Bank ACH"],
    description: "Architected a scalable microservices payment platform supporting secure transactions and automated multi-recipient distribution.",
    bullets: [
      "Integrated QorPay, MassPay, and US Bank ACH APIs for real-time fund transfers and automated ledger status tracking.",
      "Engineered ACID-compliant PostgreSQL schema designs safeguarding historical audit trails.",
      "Designed decoupled processing mechanisms via RabbitMQ queue pipelines handling transaction states.",
      "Coded webhooks capturing deposit logs, automated cron aggregations, and configured React administrator panels.",
    ],
  },
  {
    title: "CivicTax",
    category: "Automation/LMS",
    techStack: ["React.js", "Redux-Saga", "Node.js", "Express.js", "MySQL", "Puppeteer", "SendGrid"],
    description: "Developed and maintained a web-based tax sale and foreclosure system used by county officials and investors across multiple states.",
    bullets: [
      "Constructed Sale Calendar, Redemption Calculation, Post-Redemption, and Report Management modules.",
      "Built dynamic, real-time date-based tax computations ensuring precise calculation audits.",
      "Programmed Puppeteer workers yielding high-volume compliance certified PDFs, reducing operations overhead by 80%.",
      "Handled asynchronous processes and complex global states via Redux-Saga architectures.",
    ],
  },
  {
    title: "StayHub",
    category: "Real-Time/SaaS",
    techStack: ["ASP.NET Core", "Web API", "CQRS", "React.js", "Redux", "SignalR", "Progressive Web App (PWA)"],
    description: "Architected a multi-tenant Progressive Web App (PWA) hospitality platform with Admin, Customer, and Guest portal tiers.",
    bullets: [
      "Engineered interactive guest portal builders enabling hotel managers to create branded applications.",
      "Maintained low-latency data syncs across portals by linking SignalR bi-directional transports.",
      "Constructed an omni-channel messaging system combining inbound WhatsApp, Telegram, and Viber webhooks.",
      "Optimized offline access capabilities and offline data storage as an installable PWA.",
    ],
  },
  {
    title: "MCP Server",
    category: "DevTools/AI",
    techStack: ["TypeScript", "Node.js", "ES Modules", "Model Context Protocol", "DCR"],
    description: "Architected a production-ready, TypeScript-based Model Context Protocol (MCP) server that acts as a structured personal knowledge hub for client LLM integrations.",
    bullets: [
      "Engineered Dynamic Context Retrieval (DCR) via token weight-based scoring to serve granular profile segments dynamically, optimizing LLM context usage.",
      "Exposes query_profile tool, knowledge schema resources mapping, and system prompt contexts.",
      "Configured robust path security constraints restricting resource lookups within the root directory to block directory traversal attacks.",
    ],
  },
  {
    title: "LRED",
    category: "Management/HR",
    techStack: ["React.js", "Node.js", "Express.js", "MySQL", "Workforce API"],
    description: "A comprehensive HR and workforce management solution designed to streamline operations across various organizational functions.",
    bullets: [
      "Centralized HR operations and record tracking, optimizing staff management and payroll processing.",
      "Configured robust RESTful interfaces handling leave management routines and audit details.",
      "Designed clean tables and administrative report interfaces with optimized pagination features.",
    ],
  },
  {
    title: "BOU LMS",
    category: "Automation/LMS",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "TCPDF"],
    description: "An innovative, centralized learning management system tailored for course delivery, student assessments, and collaboration.",
    bullets: [
      "Engineered course administration and student dashboard panels using React components.",
      "Integrated automated assessment grading pipelines and PDF generation protocols.",
      "Designed flexible MongoDB collections to handle dynamic course syllabus models.",
    ],
  },
];

const CATEGORIES = ["All", "Fintech/Ledger", "Real-Time/SaaS", "Automation/LMS", "Management/HR", "DevTools/AI", "Full-Stack/MERN"];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredProjects = selectedCategory === "All"
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 bg-slate-100/50 dark:bg-slate-900/30 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            Project   {" "}
            <span className="bg-gradient-to-r from-teal-500 to-purple-500 bg-clip-text text-transparent">
              Showcase
            </span>
          </h2>
          <div className="h-1 w-12 bg-teal-500 mx-auto mt-2 rounded-full" />
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 mt-4 max-w-2xl mx-auto">
            Explore some of the production-grade platforms and architectures I have designed and engineered.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${selectedCategory === cat
                ? "bg-teal-500 text-white shadow-md"
                : "bg-white dark:bg-slate-800 text-slate-650 dark:text-slate-350 hover:bg-slate-50 dark:hover:bg-slate-700/80 border border-slate-200/50 dark:border-slate-800"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((proj, idx) => (
            <div
              key={`${proj.title}-${idx}`}
              className="glass p-6 sm:p-8 rounded-3xl shadow-sm hover:shadow-md hover:border-teal-500/20 transition-all duration-300 border border-slate-200/50 dark:border-slate-850 flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex justify-between items-start gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-teal-500/10 text-teal-500">
                      <FolderGit2 className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-850 dark:text-slate-100">
                      {proj.title}
                    </h3>
                  </div>
                  <span className="text-xxs font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                    {proj.category}
                  </span>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-300 mb-6 text-justify leading-relaxed">
                  {proj.description}
                </p>

                {/* Key Achievements Bullet points */}
                <div className="space-y-2.5 mb-6">
                  {proj.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                      <Check className="h-4 w-4 text-teal-500 shrink-0 mt-0.5" />
                      <span className="text-justify leading-normal">{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Footer */}
              <div className="pt-4 border-t border-slate-200/60 dark:border-slate-800/40">
                <div className="flex flex-wrap gap-1.5">
                  {proj.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xxs font-semibold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-450 border border-slate-200/30 dark:border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
