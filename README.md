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

```bash
npm run build
npm start
```

Or connect to [Vercel](https://vercel.com) for automatic deploys.

## Accessibility

- Semantic HTML (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)
- ARIA labels on interactive elements
- Focus visible states on buttons and links
- Sufficient color contrast (white on orange, navy on pink)
