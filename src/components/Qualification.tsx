import { GraduationCap, Calendar, BookOpen } from "lucide-react";

const EDUCATION_ITEMS = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Saurashtra University",
    period: "2021 – 2023",
    description: "Advanced study of computer applications, database management systems, data structures, and software engineering methodologies.",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Shree G.K. & C.K. Bosamia College",
    period: "2018 – 2021",
    description: "Foundational training in programming languages, web development, algorithms, and system designs.",
  },
];

export default function Qualification() {
  return (
    <section id="qualification" className="py-20 bg-white dark:bg-[#030712] transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            Academic{" "}
            <span className="bg-gradient-to-r from-teal-500 to-purple-500 bg-clip-text text-transparent">
              Foundations
            </span>
          </h2>
          <div className="h-1 w-12 bg-teal-500 mx-auto mt-2 rounded-full" />
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l border-slate-200 dark:border-slate-800 ml-4 md:ml-6 pl-6 sm:pl-8 space-y-12">
          {EDUCATION_ITEMS.map((item, idx) => (
            <div key={idx} className="relative group">
              {/* Icon marker */}
              <div className="absolute -left-[39px] md:-left-[47px] top-1.5 p-2 rounded-full bg-slate-50 dark:bg-slate-900 border-2 border-teal-500 text-teal-500 group-hover:bg-teal-500 group-hover:text-white transition-all duration-300 shadow-md">
                <GraduationCap className="h-4 w-4" />
              </div>

              {/* Box Content */}
              <div className="glass p-6 rounded-2xl shadow-sm hover:shadow-md hover:border-teal-500/20 transition-all duration-300 border border-slate-200/50 dark:border-slate-850">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-purple-500 shrink-0" />
                    {item.degree}
                  </h3>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 shrink-0 max-w-fit">
                    <Calendar className="h-3.5 w-3.5" />
                    {item.period}
                  </span>
                </div>
                <h4 className="text-sm font-semibold text-teal-600 dark:text-teal-400 mb-2">
                  {item.institution}
                </h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed text-justify">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
