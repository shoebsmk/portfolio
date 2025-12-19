# Shoeb Khan - Portfolio Website

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16.0.1-black?style=for-the-badge&logo=next.js" alt="Next.js 16.0.1">
  <img src="https://img.shields.io/badge/React-19.2.0-blue?style=for-the-badge&logo=react" alt="React 19.2.0">
  <img src="https://img.shields.io/badge/Tailwind_CSS-4.x-38B2AC?style=for-the-badge&logo=tailwind-css" alt="Tailwind CSS 4">
</p>

<p align="center">
  <strong>Personal portfolio website showcasing my work, skills, and experience</strong>
</p>

---

## Overview

A modern, responsive portfolio website built with **Next.js 16**, **React 19**, and **Tailwind CSS 4**. Features a clean design, smooth animations, and seamless integration with dev.to for blog posts.

---

## Features

- ✅ **Modern Tech Stack**: Next.js 16, React 19, Tailwind CSS 4
- ✅ **Fully Responsive**: Optimized for all devices
- ✅ **SEO Optimized**: Enhanced metadata, Open Graph, structured data
- ✅ **Accessible**: ARIA labels, keyboard navigation, screen reader support
- ✅ **Performance Optimized**: Image optimization, lazy loading, code splitting
- ✅ **Contact Form**: Email integration with Gmail
- ✅ **Blog Integration**: Automatically fetches posts from dev.to
- ✅ **Dark Theme**: Beautiful gradient design with Lottie animations

---

## Sections

- 🦸 **Hero** - Introduction and professional summary
- 👤 **About** - Personal information and bio
- 💼 **Experience** - Work history and accomplishments
- 🛠️ **Skills** - Technical skills with animated display
- 🚀 **Projects** - Portfolio projects with descriptions
- 🎓 **Education** - Academic background
- 📝 **Blog** - Latest articles from dev.to
- 📧 **Contact** - Contact form with email integration

---

## Tech Stack

| Technology       | Version | Purpose                                   |
| ---------------- | ------- | ----------------------------------------- |
| **Next.js**      | 16.0.1  | React framework with App Router           |
| **React**        | 19.2.0  | UI component library                      |
| **Tailwind CSS** | 4.x     | Utility-first CSS framework               |
| **SASS**         | Latest  | CSS preprocessor                          |
| **Lottie**       | Latest  | Lightweight animations                    |
| **Nodemailer**   | Latest  | Email sending functionality               |

---

## Installation

### Prerequisites

- **Node.js** v18.17.0+ ([Download](https://nodejs.org/en/download/))
- **npm** or **pnpm**

### Setup

```bash
# Clone the repository
git clone https://github.com/shoebsmk/portfolio.git
cd portfolio

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your values

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Environment Variables

Create a `.env.local` file with:

```env
# Application URL
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Gmail Configuration (for contact form)
EMAIL_ADDRESS=your-email@gmail.com
GMAIL_PASSKEY=your-gmail-app-password

# Google Tag Manager (optional)
NEXT_PUBLIC_GTM=
```

---

## Customization

All portfolio content is managed through data files in `utils/data/`:

- `personal-data.js` - Personal information and social links
- `experience.js` - Work experience
- `projects-data.js` - Portfolio projects
- `skills.js` - Technical skills
- `educations.js` - Education background
- `contactsData.js` - Contact form configuration

---

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Sign up at [Vercel](https://vercel.com/)
3. Import your GitHub repository
4. Add environment variables in Settings
5. Deploy

Vercel provides:
- Free SSL
- Automatic deployments
- Global CDN
- Custom domain support

### Deploy to Netlify

1. Sign up at [Netlify](https://www.netlify.com/)
2. Import your GitHub repository
3. Build command: `npm run build`
4. Publish directory: `.next`
5. Add environment variables

---

## Contact

- **Email:** shoebwm@gmail.com
- **GitHub:** [@shoebsmk](https://github.com/shoebsmk)
- **LinkedIn:** [Shoeb Khan](https://www.linkedin.com/in/shoebsmk/)
- **Portfolio:** [View Live](https://your-domain.com)

---

## License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ by Shoeb Khan**
