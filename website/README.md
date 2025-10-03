# PatGPT - AI-Powered Portfolio Website

A modern, feature-rich portfolio website with an integrated AI chat assistant.

## Features

- 🎨 **Beautiful UI**: Built with DaisyUI and Tailwind CSS
- ✨ **Smooth Animations**: Powered by Motion/React
- 🤖 **AI Chat Assistant**: Integrated Google AI for interactive conversations
- 📝 **Blog System**: MDX-powered blog with syntax highlighting
- 💼 **Experience Showcase**: Dynamic experience and project pages
- 📬 **Contact Form**: Email integration with Resend
- 🎯 **Fully Responsive**: Works perfectly on all devices
- ♿ **Accessible**: Built with accessibility in mind
- 🧩 **Atomic Design**: Organized component structure (atoms, molecules, organisms)

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + DaisyUI
- **Animations**: Motion/React
- **Content**: Velite (MDX processing)
- **UI Components**: Ark UI
- **AI**: Vercel AI SDK + Google AI
- **Forms**: React Hook Form + Zod
- **Email**: Resend
- **Package Manager**: Bun

## Getting Started

### Installation

1. Install dependencies:

```bash
bun install
```

2. Copy `.env.example` to `.env.local` and fill in your API keys:

```bash
cp .env.example .env.local
```

3. Run the development server:

```bash
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Environment Variables

- `GOOGLE_GENERATIVE_AI_API_KEY` - Google AI API key for chat
- `RESEND_API_KEY` - Resend API key for emails
- `CONTACT_EMAIL` - Your email to receive contact form submissions
