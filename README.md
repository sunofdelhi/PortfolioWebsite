# The Editorial Architect — Portfolio

[![Deploy](https://github.com/sunofdelhi/PortfolioWebsite/actions/workflows/deploy.yml/badge.svg)](https://github.com/sunofdelhi/PortfolioWebsite/actions/workflows/deploy.yml)
[![CI](https://github.com/sunofdelhi/PortfolioWebsite/actions/workflows/ci.yml/badge.svg)](https://github.com/sunofdelhi/PortfolioWebsite/actions/workflows/ci.yml)

Personal portfolio for **Gaurav Srivastava** — Senior Delivery Director with 23+ years in enterprise IT.

🔗 **Live:** [gauravsrivastava.com](https://gauravsrivastava.com)

---

## Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | React 18 + Vite 5 |
| **Styling** | Tailwind CSS 3 |
| **Animations** | Framer Motion |
| **Icons** | Lucide React |
| **Hosting** | GitHub Pages |
| **CI/CD** | GitHub Actions |
| **Security** | CodeQL + Dependabot |

## Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx        # Sticky nav with mobile hamburger
│   │   └── Footer.jsx        # Minimal footer
│   └── sections/
│       ├── Hero.jsx           # Animated stats, CTA
│       ├── Paradox.jsx        # 60/40 split with headshot
│       ├── Timeline.jsx       # Career arc milestones
│       ├── Impact.jsx         # 5 signature achievements
│       ├── Expertise.jsx      # Skill tags + certifications
│       ├── ThoughtLeadership.jsx  # POV statements with tabs
│       └── Contact.jsx        # Availability & links
├── App.jsx
├── main.jsx
└── index.css                  # Tailwind base + custom utilities
```

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Production build
npm run build

# Preview production build locally
npm run preview
```

## CI/CD Pipeline

| Workflow | Trigger | Purpose |
|---|---|---|
| **CI** | Pull requests to `main` | Lint + Build validation |
| **Deploy** | Push to `main` | Auto-deploy to GitHub Pages |
| **CodeQL** | Push, PRs, weekly schedule | Security vulnerability scanning |
| **Dependabot** | Weekly (Monday) | Automated dependency updates |

### How Deployment Works

1. Push code to `main` branch
2. GitHub Actions automatically builds the Vite project
3. The `dist/` folder is deployed to GitHub Pages
4. Custom domain (`gauravsrivastava.com`) is served via CNAME

> No manual `npm run deploy` needed — everything is automated.

## Design System

| Token | Value |
|---|---|
| Background | `#0D1117` |
| Surface | `#1E293B` |
| Cobalt (accent) | `#1B4FD8` |
| Amber (highlight) | `#F59E0B` |
| Headlines | Playfair Display |
| Body | DM Sans |
| Monospace | JetBrains Mono |

## License

Private — All rights reserved.
