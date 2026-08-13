import { Mail } from "lucide-react";

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

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-850 bg-white dark:bg-[#030712] py-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Logo & Tagline */}
          <div className="text-center md:text-left">
            <span className="text-lg font-bold bg-gradient-to-r from-teal-500 to-purple-500 bg-clip-text text-transparent">
              Akib Dabgar
            </span>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Turning ideas into reality through code and creativity
            </p>
          </div>

          {/* Nav links */}
          <div className="flex space-x-6 text-sm text-slate-500 dark:text-slate-400">
            <a href="#about" className="hover:text-teal-500 transition-colors">About</a>
            <a href="#services" className="hover:text-teal-500 transition-colors">Services</a>
            <a href="#portfolio" className="hover:text-teal-500 transition-colors">Portfolio</a>
            <a href="#contact" className="hover:text-teal-500 transition-colors">Contact</a>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <a
              href="https://github.com/akib-dabgar"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-650 dark:text-slate-400 hover:bg-teal-500 dark:hover:bg-teal-500 hover:text-white dark:hover:text-white transition-all duration-200 cursor-pointer"
              aria-label="GitHub Profile"
            >
              <GithubIcon />
            </a>
            <a
              href="https://linkedin.com/in/akib-dabgar"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-650 dark:text-slate-400 hover:bg-teal-500 dark:hover:bg-teal-500 hover:text-white dark:hover:text-white transition-all duration-200 cursor-pointer"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon />
            </a>
            <a
              href="mailto:dabgarakib@gmail.com"
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-650 dark:text-slate-400 hover:bg-teal-500 dark:hover:bg-teal-500 hover:text-white dark:hover:text-white transition-all duration-200 cursor-pointer"
              aria-label="Send Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Bottom credits */}
        <div className="text-center text-xs text-slate-455 dark:text-slate-500 mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/40">
          &copy; {new Date().getFullYear()} Akib Dabgar. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
