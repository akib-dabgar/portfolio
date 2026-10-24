"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import {
  ArrowLeft,
  Award,
  ExternalLink,
  Download,
  Eye,
  X,
  CheckCircle2,
  ShieldCheck,
  Sun,
  Moon,
  Sparkles,
} from "lucide-react";

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  verifyUrl?: string;
  pdfUrl?: string;
  imageSrc: string;
  description: string;
  skills: string[];
  highlight: string;
}

const CERTIFICATES: Certificate[] = [
  {
    id: "ey-microsoft-ai",
    title: "AI Skills Passport",
    issuer: "EY & Microsoft",
    issueDate: "Verified Credential",
    credentialId: "356249_34_au926",
    pdfUrl: "/certificates/ey-microsoft-ai-skills-passport.pdf",
    imageSrc: "/certificates/ey-microsoft-ai-skills-passport.png",
    description:
      "Official certificate awarded by Ernst & Young (EY) and Microsoft upon successfully completing both foundational employability and core technical modules covering Artificial Intelligence, Business, and Sustainability.",
    skills: ["Artificial Intelligence", "AI Employability", "Microsoft & EY Ecosystem", "Sustainability & Technology"],
    highlight: "Co-issued by Microsoft & EY",
  },
  {
    id: "fcc-javascript-algorithms",
    title: "JavaScript Algorithms & Data Structures",
    issuer: "freeCodeCamp",
    issueDate: "June 2025",
    credentialId: "fcc-e7dbd176-1633-48f2-a35d-5ad0f5823691",
    verifyUrl:
      "https://freecodecamp.org/certification/fcc-e7dbd176-1633-48f2-a35d-5ad0f5823691/javascript-algorithms-and-data-structures",
    imageSrc: "/certificates/freecodecamp-javascript-algorithms-and-data-structures.png",
    description:
      "Comprehensive 300-hour technical developer certification demonstrating mastery of JavaScript fundamentals (ES6+), complex data structures, algorithmic scripting, Object-Oriented Programming, and functional programming.",
    skills: ["JavaScript (ES6+)", "Data Structures", "Algorithms", "OOP", "Functional Programming"],
    highlight: "300 Hours Engineering Work",
  },
];

export default function CertificationsPage() {
  const [mounted, setMounted] = React.useState(false);
  const { theme, setTheme } = useTheme();
  const [selectedCert, setSelectedCert] = React.useState<Certificate | null>(null);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedCert(null);
    };
    if (selectedCert) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedCert]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#030712] text-slate-800 dark:text-slate-100 transition-colors duration-300">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-40 glass border-b border-slate-200/60 dark:border-slate-800 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors group"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Portfolio</span>
          </Link>

          <div className="flex items-center gap-4">
            <span className="hidden sm:inline-block text-xs font-semibold px-3 py-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/20">
              Akib Dabgar Credentials
            </span>

            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 text-xs font-semibold uppercase tracking-wider mb-4 border border-teal-500/20">
            <ShieldCheck className="h-4 w-4" />
            Verified Technical Credentials
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Licenses &{" "}
            <span className="bg-gradient-to-r from-teal-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              Certifications
            </span>
          </h1>
          <div className="h-1.5 w-16 bg-gradient-to-r from-teal-500 to-purple-500 mx-auto mt-4 rounded-full" />

          <p className="mt-5 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            A dedicated showcase of professional licenses, industry accreditations, and specialized software engineering certifications earned by Akib Dabgar.
          </p>
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {CERTIFICATES.map((cert) => (
            <div
              key={cert.id}
              className="glass rounded-3xl overflow-hidden border border-slate-200/70 dark:border-slate-800 shadow-sm hover:shadow-2xl hover:border-teal-500/30 transition-all duration-300 flex flex-col group bg-white/70 dark:bg-slate-900/60"
            >
              {/* Image Preview Banner */}
              <div
                onClick={() => setSelectedCert(cert)}
                className="relative h-60 sm:h-64 bg-slate-100 dark:bg-slate-950/70 overflow-hidden cursor-pointer border-b border-slate-200/60 dark:border-slate-800 group/img"
              >
                <Image
                  src={cert.imageSrc}
                  alt={cert.title}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover/img:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-85 group-hover/img:opacity-95 transition-opacity" />

                {/* Top Floating Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/95 dark:bg-slate-900/95 text-slate-900 dark:text-white shadow-md backdrop-blur-md border border-white/20">
                    <Award className="h-3.5 w-3.5 text-teal-500" />
                    {cert.issuer}
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/95 text-white shadow-md backdrop-blur-md">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    Verified
                  </span>
                </div>

                {/* Bottom Overlay on Image */}
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <span className="text-xs font-medium text-white/95 drop-shadow-sm px-3 py-1 rounded-xl bg-black/60 backdrop-blur-md">
                    {cert.highlight}
                  </span>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedCert(cert);
                    }}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-white text-xs font-medium shadow-md transition-all duration-200 cursor-pointer"
                  >
                    <Eye className="h-3.5 w-3.5" />
                    Preview
                  </button>
                </div>
              </div>

              {/* Card Details */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors mb-2">
                    {cert.title}
                  </h2>

                  <p className="text-xs sm:text-sm font-semibold text-teal-600 dark:text-teal-400 mb-4 flex items-center gap-1.5">
                    <Sparkles className="h-3.5 w-3.5" />
                    Issued by {cert.issuer} {cert.issueDate ? `• ${cert.issueDate}` : ""}
                  </p>

                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    {cert.description}
                  </p>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {cert.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="text-xs px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/60 font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-5 border-t border-slate-200/70 dark:border-slate-800 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedCert(cert)}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 transition-colors cursor-pointer"
                  >
                    <Eye className="h-4 w-4 text-teal-500" />
                    View Certificate
                  </button>

                  {cert.verifyUrl && (
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white shadow-md hover:shadow-lg transition-all cursor-pointer"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Verify Online
                    </a>
                  )}

                  {cert.pdfUrl && (
                    <a
                      href={cert.pdfUrl}
                      download="Akib_Dabgar_EY_Microsoft_Certificate.pdf"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white shadow-md hover:shadow-lg transition-all cursor-pointer"
                    >
                      <Download className="h-4 w-4" />
                      Download PDF
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Back Link bottom */}
        <div className="mt-16 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-teal-600 dark:text-teal-400 hover:underline"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Return to Main Portfolio</span>
          </Link>
        </div>
      </main>

      {/* Lightbox / Modal */}
      {selectedCert && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedCert(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl max-h-[92vh] glass rounded-2xl overflow-hidden shadow-2xl border border-slate-700 flex flex-col bg-slate-900"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-slate-800 bg-slate-900/90">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-teal-500/10 text-teal-400">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    {selectedCert.title}
                  </h3>
                  <p className="text-xs text-slate-400">
                    Issued by {selectedCert.issuer} {selectedCert.credentialId ? `• ID: ${selectedCert.credentialId}` : ""}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setSelectedCert(null)}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Image View */}
            <div className="relative flex-1 overflow-auto p-4 sm:p-6 flex items-center justify-center bg-slate-950/90 max-h-[70vh]">
              <Image
                src={selectedCert.imageSrc}
                alt={selectedCert.title}
                width={1200}
                height={800}
                className="max-h-[66vh] w-auto object-contain rounded-xl shadow-lg border border-slate-800"
                priority
              />
            </div>

            {/* Modal Footer */}
            <div className="px-5 py-3.5 border-t border-slate-800 bg-slate-900/90 flex flex-wrap items-center justify-between gap-3">
              <div className="inline-flex items-center gap-2 text-xs text-emerald-400 font-medium">
                <CheckCircle2 className="h-4 w-4" />
                Officially Verified Credential
              </div>

              <div className="flex items-center gap-2.5">
                {selectedCert.verifyUrl && (
                  <a
                    href={selectedCert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-teal-500 hover:bg-teal-400 text-white transition-colors"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    Verify on Official Site
                  </a>
                )}
                {selectedCert.pdfUrl && (
                  <a
                    href={selectedCert.pdfUrl}
                    download="Akib_Dabgar_EY_Microsoft_Certificate.pdf"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-teal-500 hover:bg-teal-400 text-white transition-colors"
                  >
                    <Download className="h-3.5 w-3.5" />
                    Download Original PDF
                  </a>
                )}
                <button
                  type="button"
                  onClick={() => setSelectedCert(null)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
