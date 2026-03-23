# NWI Fun Ball

A production-ready single-page website for NWI Fun Ball, a sportainment event at Oil City Stadium in Whiting, Indiana.

## Tech Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (subtle animations)
- **Vercel-ready** deployment

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout, metadata, fonts
│   ├── page.tsx        # Homepage (mockup preview + live sections)
│   └── globals.css     # Tailwind + custom CSS variables
├── components/
│   ├── Header.tsx      # Sticky nav with logo, links, CTA
│   ├── Hero.tsx        # Stadium hero with title, mascot placeholder
│   ├── IntroSection.tsx # Two-column: copy + Buy Tickets CTA
│   ├── TicketGrid.tsx  # Three ticket cards (General, VIP, Press)
│   ├── Footer.tsx      # Tagline
│   └── ui/
│       ├── button.tsx  # Accessible button component
│       └── card.tsx    # Card component
├── lib/
│   └── utils.ts        # cn() for class merging
└── public/
    └── mockups/        # Client reference mockup
```

## Client Edits

- **Mockup preview**: Remove the `<aside>` block in `app/page.tsx` before production deploy.
- **Mascot**: Add `/public/mascot.png` and update `Hero.tsx` to use it instead of the emoji placeholder.
- **Stadium image**: The hero uses an Unsplash placeholder. Replace with your Oil City Stadium photo via `public/hero-stadium.jpg` and update the Hero `Image` src.
- **Contact info**: Update phone number and email in `TicketGrid.tsx` and `app/page.tsx` with real contact details.

## Deployment

This app is **Next.js with API routes, a database, Stripe, and email** — it needs a host that runs Node.js serverless functions, not plain static file hosting.

| Service | Role |
|--------|------|
| **[GitHub](https://github.com)** | Free private/public **code repository** — push your project here. |
| **[Vercel](https://vercel.com)** (recommended) | **Free Hobby tier** — builds from GitHub and hosts the live site. Same team as Next.js. |
| **GitHub Pages** | **Not suitable** for this project — it only serves static files and cannot run `/api` routes or your backend. |

**Quick path to go live**

1. Sign up for **GitHub** and create a new repository (no template).
2. Push this project: `git remote add origin …` then `git push -u origin main` (or `master`).
3. Sign up for **Vercel** → **Add New Project** → **Import** your GitHub repo → leave defaults (Framework: Next.js).
4. In Vercel → **Settings → Environment Variables**, add every variable from `.env.example` (use production keys when you go live). Set `NEXT_PUBLIC_SITE_URL` to your Vercel URL first (e.g. `https://your-project.vercel.app`), then add your **custom domain** later if needed.
5. In **Stripe Dashboard** → **Developers → Webhooks**, add endpoint: `https://<your-site>/api/webhooks/stripe` and paste the signing secret into `STRIPE_WEBHOOK_SECRET` in Vercel.

Local production check (optional):

```bash
npm run build
npm start
```

## Accessibility

- Semantic HTML (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)
- ARIA labels on interactive elements
- Focus visible states on buttons and links
- Sufficient color contrast (white on orange, navy on pink)
