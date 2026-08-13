import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";

const EXPERIENCES = [
  {
    role: "Full-Stack Developer",
    company: "eSparkBiz Technologies Pvt. Ltd.",
    location: "Ahmedabad, India",
    period: "Jan 2023 – Present",
    bullets: [
      "Architected and maintained scalable RESTful APIs and full-stack applications using React.js, Node.js, and NestJS for multiple enterprise clients.",
      "Engineered JWT authentication and role-based access control (RBAC) systems with AES encryption across frontend and backend layers.",
      "Optimized MySQL and PostgreSQL queries through strategic indexing and query restructuring, achieving a 40% reduction in database response times.",
      "Designed event-driven microservices architecture leveraging RabbitMQ for decoupled, fault-tolerant message processing and improved system resilience.",
      "Implemented virtualization in frontend report modules to efficiently handle thousands of reports, improving scrolling performance and user experience.",
      "Implemented Redis-based caching strategies to reduce API response times and improve application scalability.",
      "Collaborated within Agile teams using Git, GitLab, and Bitbucket following industry best practices and deployment standards.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-slate-100/50 dark:bg-slate-900/30 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            Professional{" "}
            <span className="bg-gradient-to-r from-teal-500 to-purple-500 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <div className="h-1 w-12 bg-teal-500 mx-auto mt-2 rounded-full" />
        </div>

        {/* Experience List */}
        <div className="relative border-l border-slate-200 dark:border-slate-800 ml-4 md:ml-6 pl-6 sm:pl-8 space-y-12">
          {EXPERIENCES.map((exp, idx) => (
            <div key={idx} className="relative group">
              {/* Icon marker */}
              <div className="absolute -left-[39px] md:-left-[47px] top-1.5 p-2 rounded-full bg-slate-50 dark:bg-slate-900 border-2 border-teal-500 text-teal-500 group-hover:bg-teal-500 group-hover:text-white transition-all duration-300 shadow-md">
                <Briefcase className="h-4 w-4" />
              </div>

              {/* Card Container */}
              <div className="glass p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-md hover:border-teal-500/20 transition-all duration-300 border border-slate-200/50 dark:border-slate-850">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">
                      {exp.role}
                    </h3>
                    <h4 className="text-sm font-semibold text-teal-600 dark:text-teal-400 mt-0.5">
                      {exp.company}
                    </h4>
                  </div>
                  <div className="flex flex-col sm:items-end gap-1.5 shrink-0">
                    <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 max-w-fit">
                      <Calendar className="h-3.5 w-3.5" />
                      {exp.period}
                    </span>
                    <span className="text-xxs text-slate-400 dark:text-slate-500 font-medium sm:mr-1">
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Achievements List */}
                <ul className="space-y-3.5 mt-2">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300">
                      <CheckCircle2 className="h-4.5 w-4.5 text-teal-500 shrink-0 mt-0.5" />
                      <span className="leading-relaxed text-justify">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
