"use client";

import * as React from "react";
import { Code2, Server, Cloud, Brain, CheckCircle2, Play, Pause } from "lucide-react";

// Definitions of skills grouped by categories
const SKILLS_DATA = [
  {
    id: "frontend",
    title: "Frontend & UI",
    icon: Code2,
    color: "from-teal-500 to-emerald-400",
    shadow: "shadow-teal-500/10",
    skills: [
      { name: "HTML5", level: "Advanced" },
      { name: "CSS3", level: "Advanced" },
      { name: "JavaScript (ES6+)", level: "Expert" },
      { name: "TypeScript", level: "Advanced" },
      { name: "React.js", level: "Expert" },
      { name: "Next.js", level: "Advanced" },
      { name: "Redux & Redux-Saga", level: "Advanced" },
      { name: "Tailwind CSS", level: "Expert" },
      { name: "Bootstrap", level: "Expert" },
      { name: "Material UI (MUI)", level: "Advanced" },
    ],
  },
  {
    id: "backend",
    title: "Backend & Database",
    icon: Server,
    color: "from-purple-500 to-indigo-500",
    shadow: "shadow-purple-500/10",
    skills: [
      { name: "Node.js", level: "Expert" },
      { name: "Express.js", level: "Expert" },
      { name: "NestJS", level: "Advanced" },
      { name: "MongoDB", level: "Advanced" },
      { name: "PostgreSQL", level: "Advanced" },
      { name: "MySQL", level: "Advanced" },
      { name: "Firebase", level: "Advanced" },
      { name: "Redis", level: "Intermediate" },
      { name: "TypeORM", level: "Advanced" },
      { name: "Sequelize", level: "Advanced" },
    ],
  },
  {
    id: "integration",
    title: "Integration & Cloud",
    icon: Cloud,
    color: "from-blue-500 to-cyan-400",
    shadow: "shadow-blue-500/10",
    skills: [
      { name: "REST APIs", level: "Expert" },
      { name: "Axios", level: "Expert" },
      { name: "API Integration", level: "Expert" },
      { name: "Third-Party APIs", level: "Expert" },
      { name: "Socket.IO & SignalR", level: "Advanced" },
      { name: "RabbitMQ", level: "Intermediate" },
      { name: "AWS (EC2, S3, IAM)", level: "Exploring" },
      { name: "Docker", level: "Intermediate" },
      { name: "Vercel & Render", level: "Advanced" },
      { name: "CI/CD & GitHub Actions", level: "Advanced" },
    ],
  },
  {
    id: "tools",
    title: "AI & Professional",
    icon: Brain,
    color: "from-pink-500 to-rose-400",
    shadow: "shadow-pink-500/10",
    skills: [
      { name: "Git & GitHub", level: "Expert" },
      { name: "VS Code", level: "Expert" },
      { name: "Postman & Swagger", level: "Expert" },
      { name: "Claude & Cursor", level: "Expert" },
      { name: "GitHub Copilot", level: "Expert" },
      { name: "Problem Solving", level: "Expert" },
      { name: "Leadership", level: "Advanced" },
      { name: "Team Collaboration", level: "Expert" },
      { name: "Analytical Thinking", level: "Expert" },
      { name: "Adaptability", level: "Expert" },
    ],
  },
];

const AUTO_PLAY_INTERVAL = 6000; // 6 seconds per category

export default function Skills() {
  const [activeTab, setActiveTab] = React.useState(0);
  const [isPlaying, setIsPlaying] = React.useState(true);
  const [progress, setProgress] = React.useState(0);
  const timerRef = React.useRef<NodeJS.Timeout | null>(null);
  const progressIntervalRef = React.useRef<NodeJS.Timeout | null>(null);

  // Touch Swipe State
  const [touchStart, setTouchStart] = React.useState<number | null>(null);
  const [touchEnd, setTouchEnd] = React.useState<number | null>(null);

  // Minimum swipe distance in pixels
  const minSwipeDistance = 50;

  // Handle Swipe Gesture
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      // Next tab
      handleNextTab();
    } else if (isRightSwipe) {
      // Previous tab
      handlePrevTab();
    }
  };

  const handleNextTab = () => {
    setActiveTab((prev) => (prev + 1) % SKILLS_DATA.length);
    setProgress(0);
  };

  const handlePrevTab = () => {
    setActiveTab((prev) => (prev - 1 + SKILLS_DATA.length) % SKILLS_DATA.length);
    setProgress(0);
  };

  // Reset progress and set interval when playing/active tab changes
  React.useEffect(() => {
    if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);

    if (isPlaying) {
      const step = 100; // Update progress every 100ms
      const increment = (step / AUTO_PLAY_INTERVAL) * 100;

      progressIntervalRef.current = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            handleNextTab();
            return 0;
          }
          return prev + increment;
        });
      }, step);
    }

    return () => {
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    };
  }, [isPlaying, activeTab]);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
    setProgress(0);
  };

  return (
    <section id="skills" className="py-20 bg-slate-50/50 dark:bg-slate-950/20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-teal-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p className="text-sm sm:text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            A combination of frontend, backend, database, cloud, API integration, development tools, and problem-solving expertise used to build scalable modern web applications.
          </p>
        </div>

        {/* Interactive Showcase Container */}
        <div
          className="relative glass rounded-3xl p-6 sm:p-10 border border-slate-200/60 dark:border-slate-800/80 shadow-xl overflow-hidden"
          onMouseEnter={() => setIsPlaying(false)}
          onMouseLeave={() => setIsPlaying(true)}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* Subtle glowing blob background decoration */}
          <div className={`absolute -right-16 -top-16 w-48 h-48 rounded-full bg-gradient-to-br ${SKILLS_DATA[activeTab].color} opacity-10 blur-3xl pointer-events-none transition-all duration-700`} />
          <div className={`absolute -left-16 -bottom-16 w-48 h-48 rounded-full bg-gradient-to-br ${SKILLS_DATA[activeTab].color} opacity-10 blur-3xl pointer-events-none transition-all duration-700`} />

          {/* Controller Header: Tabs & Timer Controls */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 pb-6 border-b border-slate-200/50 dark:border-slate-800/50">
            {/* Tabs */}
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {SKILLS_DATA.map((category, index) => {
                const IconComponent = category.icon;
                const isActive = activeTab === index;
                return (
                  <button
                    key={category.id}
                    onClick={() => handleTabClick(index)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${isActive
                      ? `bg-gradient-to-r ${category.color} text-white shadow-md ${category.shadow}`
                      : "bg-slate-100 hover:bg-slate-200 dark:bg-slate-900/50 dark:hover:bg-slate-900 text-slate-650 dark:text-slate-350"
                      }`}
                  >
                    <IconComponent className="h-4 w-4" />
                    {category.title}
                  </button>
                );
              })}
            </div>

            {/* Timer State & Slideshow Controls */}
            <div className="flex items-center gap-4 text-xs sm:text-sm text-slate-500 dark:text-slate-400 self-end md:self-auto">
              <span className="hidden sm:inline font-mono">
                {activeTab + 1} / {SKILLS_DATA.length}
              </span>
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-900/50 dark:hover:bg-slate-900 transition-colors cursor-pointer"
                title={isPlaying ? "Pause Autoplay" : "Resume Autoplay"}
              >
                {isPlaying ? <Pause className="h-4 w-4 text-slate-600 dark:text-slate-300" /> : <Play className="h-4 w-4 text-slate-600 dark:text-slate-300" />}
              </button>
            </div>
          </div>

          {/* Autoplay Progress Bar */}
          <div className="w-full h-1 bg-slate-100 dark:bg-slate-900 rounded-full mb-8 overflow-hidden">
            <div
              className={`h-full bg-gradient-to-r ${SKILLS_DATA[activeTab].color} transition-all duration-100 ease-linear`}
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Skills Grid Section */}
          <div className="transition-all duration-500 transform opacity-100 translate-y-0">
            <h3 className={`text-xl font-bold bg-gradient-to-r ${SKILLS_DATA[activeTab].color} bg-clip-text text-transparent mb-6 flex items-center gap-2`}>
              {React.createElement(SKILLS_DATA[activeTab].icon, { className: "h-5 w-5 text-teal-500 dark:text-teal-400" })}
              {SKILLS_DATA[activeTab].title}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {SKILLS_DATA[activeTab].skills.map((skill, index) => (
                <div
                  key={`${skill.name}-${index}`}
                  className="group relative bg-white dark:bg-[#0b0f19] p-4 rounded-2xl border border-slate-200/50 dark:border-slate-800/80 shadow-sm flex items-center justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700"
                >
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className={`h-4.5 w-4.5 text-emerald-500/80 group-hover:scale-110 transition-transform`} />
                    <span className="text-sm font-semibold text-slate-800 dark:text-slate-100 group-hover:text-slate-950 dark:group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                  </div>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium transition-colors ${skill.level === "Expert"
                    ? "bg-teal-500/10 text-teal-600 dark:text-teal-400"
                    : skill.level === "Advanced"
                      ? "bg-purple-500/10 text-purple-600 dark:text-purple-400"
                      : skill.level === "Intermediate"
                        ? "bg-blue-500/10 text-blue-600 dark:text-blue-400"
                        : "bg-slate-500/10 text-slate-650 dark:text-slate-350"
                    }`}>
                    {skill.level}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Swipe indicator helper for mobile devices */}
          <div className="mt-8 text-center md:hidden">
            <span className="text-[10px] text-slate-450 dark:text-slate-500 italic">
              Swipe left or right to change categories
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
