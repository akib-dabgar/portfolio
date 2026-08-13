# Akib Dabgar — Full-Stack Software Engineer Portfolio

Welcome to my professional developer portfolio repository. This application showcases my software engineering experience, core competencies, project history, and architectural expertise in building low-latency, scalable, and responsive web platforms.

🌐 **Live Website:** [https://akib-dabgar.vercel.app](https://akib-dabgar.vercel.app) (Suggested Vercel URL)

---

## 🚀 Key Highlights

*   **Interactive Skills Module**: Built with a custom autoplay rotating slideshow, active progress indicators, pause-on-hover mechanics, and mobile swipe-gesture support.
*   **Production-Grade Project Showcase**: Showcases my engineering work across fintech, real-time SaaS, developer tooling, and automated workflows.
*   **Fully Theme-Responsive**: Smooth light and dark mode toggles with customized CSS variables matching modern design systems.
*   **Clean Architecture**: Fully modular client/server component structure built on top of Next.js 16 and TypeScript.

---

## 🛠️ Technology Stack

| Domain | Technologies |
| :--- | :--- |
| **Frontend & UI** | React.js, Next.js, HTML5, CSS3, JavaScript (ES6+), TypeScript, Tailwind CSS, Material UI (MUI), Bootstrap |
| **Backend & Routing** | Node.js, Express.js, NestJS |
| **Database & ORMs** | MongoDB, PostgreSQL, MySQL, Redis, Firebase, TypeORM, Sequelize |
| **APIs & Integration** | REST APIs, Axios, Third-Party API integrations, Location APIs, Socket.IO, SignalR |
| **DevOps & Cloud** | AWS (EC2, S3, IAM), Docker, Vercel, Render, Git/GitHub, CI/CD (GitHub Actions), RabbitMQ |
| **Testing & Docs** | Postman, Swagger / OpenAPI |

---

## 📁 Repository Structure

```text
├── src/
│   ├── app/
│   │   ├── globals.css      # Core styles, glassmorphism utilities & keyframes
│   │   ├── layout.tsx       # Root layout configuration & providers
│   │   ├── page.tsx         # Main entry page compiling sections
│   │   └── providers.tsx    # Next-Themes provider wrapping the application
│   ├── components/
│   │   ├── Navbar.tsx       # Responsive navbar with logo micro-animations
│   │   ├── Hero.tsx         # Responsive centered hero details
│   │   ├── About.tsx        # Journey timeline and skill categories
│   │   ├── Skills.tsx       # Dynamic skill cards switcher & sliders
│   │   ├── Experience.tsx   # Professional history logs
│   │   ├── Qualification.tsx# Educational achievements
│   │   ├── Services.tsx     # Services offerings listing
│   │   ├── Portfolio.tsx    # Filterable project showcase cards
│   │   ├── Contact.tsx      # FormSubmit-connected contact module
│   │   └── Footer.tsx       # Credits and external social link handlers
```

---

## ⚙️ Getting Started (Local Development)

### Prerequisites

*   Node.js (v18.0.0 or higher)
*   npm (v9.0.0 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/akib-dabgar/akib-dabgar-portfolio.git
   cd akib-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the local development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) (or the port specified in terminal) to view the application.

4. Build production bundle:
   ```bash
   npm run build
   ```

---

## 🔒 Security & Git Best Practices

*   **API Credentials**: All environment configs (e.g., mail tokens, environment selectors) are separated into a local `.env` file.
*   **Security Shield**: The project employs a strict `.gitignore` configuration ensuring dependency folders (`node_modules/`), production builds (`.next/`), and environment variables (`.env*`) are never pushed or exposed publicly.

---

## 🚢 Continuous Integration & Deployment (CI/CD)

This project is configured for **Continuous Deployment** via Vercel:
1. Every commit pushed to the `main` branch on GitHub automatically triggers a Vercel build and release.
2. Vercel runs optimized Next.js compiles and updates the live site instantly without downtime.
