import { Server, Cpu, Database, Smartphone, ShieldCheck, TrendingUp } from "lucide-react";

const SERVICES = [
  {
    title: "Enterprise Backend Architectures",
    description: "Designing and engineering robust microservices architectures and RESTful APIs using NestJS and Node.js. Optimized for modularity, clean code principles, and standard developer scaling patterns.",
    icon: Server,
    color: "text-teal-500 bg-teal-500/10",
  },
  {
    title: "Event-Driven Messaging & Queues",
    description: "Building decoupling asynchronous processing structures with RabbitMQ messaging channels. Experienced in setting up dead-letter exchanges (DLX) for webhook audits and heavy file generation flows.",
    icon: Cpu,
    color: "text-purple-500 bg-purple-500/10",
  },
  {
    title: "Database Optimization & Indexing",
    description: "Tuning query performance across MySQL, PostgreSQL, and MongoDB. Restructuring indexes, optimizing slow queries, and utilizing Redis caching to reduce latency by up to 40%.",
    icon: Database,
    color: "text-blue-500 bg-blue-500/10",
  },
  {
    title: "Real-Time Systems & PWAs",
    description: "Developing responsive Progressive Web Apps with real-time bi-directional messaging using SignalR or Socket.io. Ensuring high client responsiveness and smooth state transitions.",
    icon: Smartphone,
    color: "text-emerald-500 bg-emerald-500/10",
  },
  {
    title: "Fintech & Ledger Integrations",
    description: "Designing transaction schema structures with PostgreSQL ensuring ledger precision and ACID-compliance. Integrated with standard payment processors like QorPay, MassPay, and ACH transfers.",
    icon: ShieldCheck,
    color: "text-indigo-500 bg-indigo-500/10",
  },
  {
    title: "Performance Tuning & Virtualization",
    description: "Optimizing frontend dashboards to render massive datasets smoothly. Implementing virtualization solutions for report lists, improving rendering, memory usage, and loading times.",
    icon: TrendingUp,
    color: "text-pink-500 bg-pink-500/10",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white dark:bg-[#030712] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            My{" "}
            <span className="bg-gradient-to-r from-teal-500 to-purple-500 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <div className="h-1 w-12 bg-teal-500 mx-auto mt-2 rounded-full" />
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <div
                key={idx}
                className="glass p-6 sm:p-8 rounded-2xl hover:border-teal-500/30 dark:hover:border-teal-500/30 transition-all duration-350 hover:-translate-y-1.5 shadow-xs border border-slate-200/50 dark:border-slate-850 flex flex-col items-start text-left"
              >
                {/* Icon wrapper */}
                <div className={`p-3.5 rounded-xl ${srv.color} mb-5 shrink-0`}>
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="text-lg font-bold text-slate-850 dark:text-slate-100 mb-3">
                  {srv.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed text-justify">
                  {srv.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
