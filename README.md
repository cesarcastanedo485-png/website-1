# NWI Fun Ball

A production-ready single-page website for NWI Fun Ball, a sportainment event at Oil City Stadium in Whiting, Indiana.

**Handing the site to the owner or a non-developer?**

- **In Cursor / VS Code:** Open **`OWNER-HANDBOOK.md`** from the **file explorer** (left sidebar). Clicking the filename in Markdown preview sometimes tries to open a broken “website” link—use the tree view instead.
- **In a browser** (dev or production): open **`/handbook`** — e.g. [http://localhost:3001/handbook](http://localhost:3001/handbook) while `npm run dev` is running, or `https://your-site.vercel.app/handbook` when deployed.

## Tech Stack

- **Next.js 15** (App Router)
- **React 19** / **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animations where used)
- **Vercel-ready** deployment

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3001](http://localhost:3001).

## Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout, metadata, fonts
│   ├── page.tsx         # Homepage sections
│   ├── globals.css      # Tailwind + custom CSS
│   ├── api/             # Server routes (checkout, webhooks)
│   └── ...
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── ScrollingTicker.tsx
│   ├── IntroSection.tsx
│   ├── TicketGrid.tsx   # Press + contact cards
│   ├── ScheduleCalendar.tsx
│   ├── Footer.tsx
│   └── ui/              # button, card, etc.
├── lib/
│   ├── schedule.ts      # Game dates + schedule summary helper
│   ├── tickets.ts       # (used by checkout)
│   ├── db.ts            # Neon
│   └── ...
├── public/              # Images, logos, OG assets
└── .env.example         # Environment variable names
```

## Client / content edits

For step-by-step owner instructions (domains, Vercel, GitHub), use **[OWNER-HANDBOOK.md](./OWNER-HANDBOOK.md)**. Quick pointers:

- **Schedule:** `lib/schedule.ts` (`GAME_DATES`, `SEASON_YEAR`)
- **Tickets & contact:** `components/TicketGrid.tsx`
- **Hero / intro:** `components/Hero.tsx`, `components/IntroSection.tsx`
- **Contact block on page:** `app/page.tsx`
- **Assets:** `public/`

## Deployment

This app is **Next.js with API routes, optional database, Stripe, and email** — it needs a host that runs Node.js serverless functions, not plain static file hosting.

| Service | Role |
|--------|------|
| **[GitHub](https://github.com)** | Free private/public **code repository** — push your project here. |
| **[Vercel](https://vercel.com)** (recommended) | **Free Hobby tier** — builds from GitHub and hosts the live site. Same team as Next.js. |
| **GitHub Pages** | **Not suitable** for this project — it only serves static files and cannot run `/api` routes or your backend. |

**Quick path to go live**

1. Sign up for **GitHub** and create a new repository (no template).
2. Push this project: `git remote add origin …` then `git push -u origin main` (or `master`).
3. Sign up for **Vercel** → **Add New Project** → **Import** your GitHub repo → leave defaults (Framework: Next.js).
4. In Vercel → **Settings → Environment Variables**, add every variable from `.env.example` that you need (use production keys when you go live). Set `NEXT_PUBLIC_SITE_URL` and `SITE_URL` to your Vercel URL first (e.g. `https://your-project.vercel.app`), including **`https://`**, then add your **custom domain** later if needed.
5. If you use Stripe: **Stripe Dashboard** → **Developers → Webhooks** → endpoint `https://<your-site>/api/webhooks/stripe` and paste the signing secret into `STRIPE_WEBHOOK_SECRET` in Vercel.

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
