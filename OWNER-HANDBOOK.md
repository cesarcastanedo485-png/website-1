# NWI Fun Ball — Website Owner Handbook

**Handbook version 1.0 — March 2026**

This guide is for the person who **owns and operates** the NWI Fun Ball website. You do not need to be a programmer for every task below, but **you are responsible for your own accounts and hosting setup**—GitHub, Vercel, your domain, and your ticketing vendor. This document walks you through those steps. For day-to-day copy or image tweaks, you can edit the files listed here (or hire help if you prefer).

**Reading this in a browser:** When the site is running locally or on Vercel, open the same handbook at **`/handbook`** (for example `https://yoursite.vercel.app/handbook`). In GitHub or Cursor, open the file **`OWNER-HANDBOOK.md`** from the project file list—not every app can open `.md` links from previews.

---

## 1. What you have

- A **single-page marketing website** for NWI Fun Ball (sportainment at Oil City Stadium, Whiting, Indiana).
- The **source code** lives in **GitHub** (a cloud backup of the project that tracks changes).
- The **live website** is built and hosted on **Vercel**. When the code on GitHub updates, Vercel can automatically build a new version of the site.

**Typical workflow:** Someone edits the text or images in the project, saves those changes to GitHub, and Vercel deploys the updated site—often in about one to two minutes.

---

## 2. Typical market cost (reference only)

People often ask what a **custom website like this** would cost if they hired someone else—when referring a colleague, writing a grant, or planning a future phase. This section is **general industry context** in **US dollars**. It is **not** a bill, a quote, or a statement of what you paid for this project. Actual prices vary by city, timeline, and vendor.

**What a comparable project usually includes:**

- A **custom** marketing site built with **Next.js** (multiple sections, branded hero, schedule/calendar, contact and ticket areas—not an off-the-shelf template only).
- **Hosting workflow** tied to **GitHub** and **Vercel** (automatic deploys from your repo).
- **Social / search preview** setup (titles, descriptions, share images).
- **Written documentation** for the owner (this handbook and related notes).
- **Optional:** In-site **payments** (e.g. Stripe), **database**, and **email** integrations—the codebase may support these even if you only use external ticketing links.

**Rough market ranges (fixed project, not hourly):**

| Type of vendor / scope | Typical ballpark (USD) |
|------------------------|-------------------------|
| **Simpler site** (heavy use of a template, few custom sections, little or no payment code) | About **$1,500–$4,000** |
| **Custom marketing site + integrations** (similar depth to this stack: custom UI, deploy pipeline, metadata, optional Stripe/DB/email) | Often about **$4,000–$12,000+** from many US **freelancers** or **small studios** |
| **Agency or ongoing product work** (project management, design systems, heavy QA, many rounds or long retainers) | Often **$10,000–$35,000+** |

**How that maps to time (education only):** Many US independent developers bill roughly **$60–$125 per hour** for this kind of work. A build with the scope above commonly represents **dozens of hours** of design, development, testing, and deployment—not counting future updates you request.

**Please remember:** Another developer’s quote tomorrow may be higher or lower. **This handbook does not disclose your agreement or invoice.** Ranges drift over time; use this as a **conversation reference**, not a guarantee.

---

## 3. Tech stack (what the site is built with)

These are the main technologies. You do not need to master them; this list helps when you read docs or talk to support.

| Piece | What it is |
|--------|------------|
| **Next.js 15** | A modern web framework that powers the pages and server features. |
| **React 19** | The library used for building the user interface (buttons, sections, layout). |
| **TypeScript** | A stricter form of JavaScript used for fewer mistakes in the codebase. |
| **Tailwind CSS** | A system for styling (colors, spacing, fonts) used across the site. |
| **Vercel** | Hosting: runs the Next.js app, including small “API” programs in the cloud. |
| **GitHub** | Where the code is stored and versioned. |

**Other libraries in the project (supporting roles):**

- **Framer Motion** — animation helpers where used.
- **class-variance-authority**, **clsx**, **tailwind-merge** — keep button/card styles consistent.

---

## 4. Ticketing (HomeTown) vs optional in-site payments (Stripe, etc.)

**What the public site is set up for today:** Visitors buy tickets through **HomeTown Ticketing** (or whichever URL is in your “Get Tickets” / ticket buttons). That means **you** create and manage your **HomeTown Ticketing** (or other vendor) account, set your events and pricing there, and keep the **link on the website** pointed at your real store. No Stripe account is required for that path.

**Optional code in this repository:** The project may still contain **Stripe** checkout, **webhooks**, **email (Resend)**, and a **Postgres database (Neon)** for selling tickets *inside* this website. That path is **optional**. If you choose to use it **after** the site is handed off, **you** (not the original site builder) are responsible for creating those vendor accounts, adding **environment variables** in Vercel (see `.env.example`), and keeping keys secure. If you stay on HomeTown Ticketing only, you can ignore Stripe, Resend, and Neon unless you turn the in-site checkout on later.

| Service | Purpose | Config (see `.env.example`) |
|--------|---------|-------------------------------|
| **Stripe** | Card payments / checkout sessions on this site (optional) | `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET` |
| **Resend** | Transactional email (optional) | `RESEND_API_KEY`, `RESEND_FROM_EMAIL` |
| **Neon** | Postgres database (optional) | `DATABASE_URL` |

**Webhook URL for Stripe** (only if you enable in-site Stripe checkout):  
`https://YOUR-DOMAIN.com/api/webhooks/stripe`  
Add this in the [Stripe Dashboard → Developers → Webhooks](https://docs.stripe.com/webhooks) and put the signing secret in Vercel as `STRIPE_WEBHOOK_SECRET`.

**Site URL variables** (important for links and social preview):

- `SITE_URL` — full production URL with `https://`, used on the server.
- `NEXT_PUBLIC_SITE_URL` — same idea; must include `https://` (required for correct Open Graph / share previews in `app/layout.tsx`).

Set both in Vercel → **Settings → Environment Variables** for **Production**, then **redeploy**.

---

## 5. Where to change content (file map)

All paths are from the **root folder** of the project (the same folder as `package.json`).

| What to change | File(s) |
|----------------|---------|
| Game schedule dates and calendar | `lib/schedule.ts` — edit `GAME_DATES` (and `SEASON_YEAR` if needed). The press card and schedule section pull from this. |
| Press info, contact box, ticket links | `components/TicketGrid.tsx` |
| Hero (title, stadium image, mascot, logos) | `components/Hero.tsx` |
| Intro text, video embed, “Get Tickets” button | `components/IntroSection.tsx` |
| Navigation links | `components/Header.tsx` |
| Footer | `components/Footer.tsx` |
| Gallery / contact sections on the home page | `app/page.tsx` |
| Page title, description, social preview image URLs | `app/layout.tsx` |
| Schedule section layout (calendars) | `components/ScheduleCalendar.tsx` |
| Global colors / ticker animation | `app/globals.css` |
| Images, logos, OG images | `public/` (e.g. `mascot.png`, `og-social-1200x630.jpg`) |

**Environment variable names** (never commit real secrets to GitHub): see `.env.example`.

---

## 6. Run the site on your computer (optional)

Use this to preview changes on your machine before you push to GitHub.

1. Install **Node.js** (LTS) from [https://nodejs.org](https://nodejs.org).
2. Open a terminal in the project folder.
3. Run:

   ```bash
   npm install
   npm run dev
   ```

4. Open [http://localhost:3001](http://localhost:3001) in your browser.  
   (This project is configured to use port **3001**, not 3000.)

---

## 7. Create a GitHub account

1. Go to [https://github.com/signup](https://github.com/signup).
2. Enter your email, create a password, and choose a username.
3. Complete email verification when GitHub sends a message.
4. **Recommended:** Turn on **two-factor authentication (2FA)** under **Settings → Password and authentication** for better security.
5. **If you receive the project from someone else:** They may **transfer** the repository to your account or **invite you** as a collaborator. See GitHub’s guide: [Transferring a repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/transferring-a-repository).

**Optional tools:**

- [GitHub Desktop](https://desktop.github.com/) — visual app to sync files with GitHub without typing commands.

---

## 8. Create a Vercel account and connect the site

1. Go to [https://vercel.com/signup](https://vercel.com/signup).
2. Choose **Continue with GitHub** and authorize Vercel when asked.
3. In Vercel, click **Add New… → Project**.
4. **Import** your GitHub repository (the NWI Fun Ball / website project).
5. Leave **Framework Preset** as **Next.js** and **Root Directory** as `.` (the project root).
6. Add **Environment Variables** if your app uses Stripe, Resend, Neon, or custom URLs — copy the **names** from `.env.example` and paste production values (never commit secrets to Git).
7. Click **Deploy**. When it finishes, use **Visit** to open the live site.
8. Future pushes to your **production branch** (usually `main`) trigger new deployments automatically.

**Where to check builds:** Project → **Deployments**. Open the latest deployment → **Build Logs** if something fails.

---

## 9. Domains: free site address vs buying your own

### Free address (no domain purchase)

Vercel gives you a URL like `https://your-project-name.vercel.app`. That is **free** and includes HTTPS. You can use it indefinitely for testing or as your public URL.

### Buying a custom domain (e.g. `nwifunball.com`)

A **`.com`** or similar name usually costs about **$10–15 per year** (prices vary). There is no reliable long-term “forever free” `.com` from major registrars; budget a small yearly fee.

**Registrars people often use** (compare prices yourself):

- [Cloudflare Registrar](https://www.cloudflare.com/products/registrar/) — at-cost pricing, DNS tools included.
- [Namecheap](https://www.namecheap.com/)
- [Porkbun](https://porkbun.com/)

### Connect your domain to Vercel (step by step)

1. Buy the domain at a registrar (or use one you already own).
2. In Vercel: open your project → **Settings → Domains**.
3. Add **your root domain** (e.g. `example.com`) and optionally **`www.example.com`**.
4. Vercel will show **DNS records** to add (often **A** and **CNAME**). Log in to your domain registrar’s DNS panel and enter **exactly** what Vercel displays.
5. Wait for DNS to propagate (can be a few minutes to 48 hours; often under an hour).
6. In Vercel, confirm the domain shows as **Valid** and **HTTPS** is active.
7. In **Settings → Environment Variables**, set `SITE_URL` and `NEXT_PUBLIC_SITE_URL` to `https://your-domain.com` (with `https://`), then go to **Deployments → … → Redeploy** the latest production deployment so previews and Stripe redirects use the new URL.

### Changing to a different domain later

1. Add the new domain in Vercel and complete DNS as above.
2. Update `SITE_URL` and `NEXT_PUBLIC_SITE_URL` to the new URL; redeploy.
3. Update **Stripe webhook** URL if you use Stripe, to the new domain.
4. Remove the old domain from Vercel when you no longer need it.

Official reference: [Vercel Domains documentation](https://vercel.com/docs/concepts/projects/domains).

---

## 10. Handoff checklist (once the site is yours)

Use this when you fully own hosting and the repo.

- [ ] **GitHub:** Repository is under your account (transfer complete) or you have **Admin** access.
- [ ] **Vercel:** Project is under **your** Vercel account/team, or you have imported the same repo and shut down any duplicate project so only yours deploys.
- [ ] **Environment variables** in Vercel match what you actually use (see `.env.example`; skip Stripe/Resend/Neon if you only use HomeTown links).
- [ ] **Custom domain** (if any) shows **Valid** in Vercel; `SITE_URL` / `NEXT_PUBLIC_SITE_URL` use `https://`.
- [ ] **HomeTown Ticketing (or your vendor):** Your live ticket URL is what the site buttons point to; your vendor login is **yours**.
- [ ] **If you use Stripe / Resend / Neon:** You created the accounts, added **your** API keys in Vercel, and removed any keys that belonged to someone else.

---

## 11. When something breaks

1. Open **Vercel → Deployments**. Is the latest production deploy **Ready** or **Error**? Open **Build Logs** and read the red error text (or share it with whoever helps you technically).
2. If the **domain** shows **Invalid**, fix DNS at your registrar to match Vercel exactly.
3. If **Facebook or other previews look wrong**, check `NEXT_PUBLIC_SITE_URL` includes **`https://`** and redeploy after changing it.
4. General Next.js documentation: [https://nextjs.org/docs](https://nextjs.org/docs).

---

## 12. Glossary

- **Deploy** — Publish a new version of the site from the latest code.
- **Repository (repo)** — The project folder stored on GitHub.
- **DNS** — The internet’s phone book that points your domain name to Vercel’s servers.
- **HTTPS** — Encrypted `https://` connection; Vercel provides certificates once the domain is valid.
- **Environment variable** — A secret or setting stored in Vercel (not in public code), like API keys or your site URL.

---

## 13. Included support period (first 30 days)

The **original developer** for this project includes a **complimentary correction period** for **30 calendar days** beginning **Friday, March 20, 2026** and ending **end of day Saturday, April 18, 2026** (day 1 = March 20; day 30 = April 18).

**During that window, included work typically covers:**

- **Reasonable corrections** and **small fixes** tied to the **delivered site** as handed off (e.g. obvious bugs in the original implementation, broken internal links you did not change, minor copy adjustments that fit the original scope).
- Issues addressed **by mutual agreement** so the work stays fair and bounded.

**Not included** (even during the window): new features, redesigns, new pages, third-party service outages, problems caused by **your** edits to code or settings, DNS or domain misconfiguration, or issues with **Vercel, GitHub, Stripe, registrars, HomeTown Ticketing**, or other vendors outside the developer’s control.

**How to request help:** Contact the developer using the **same email thread or address** you used for this NWI Fun Ball project. Describe the issue and, if possible, include a link or screenshot.

**After April 18, 2026:** The developer is **not** responsible for ongoing **maintenance**, **updates**, **security patches**, or **break/fix** work unless you **hire them under a separate agreement** with its own scope, timeline, and fee (or you hire another provider).

If you have a **signed Statement of Work, contract, or invoice** with different dates or terms, **those documents control** over this handbook if they conflict.

---

## 14. Legal notices and limitations (summary)

This section is a **plain-English summary** for clarity. **It is not legal advice.** For binding terms, insurance, or compliance questions, consult a **licensed attorney** in your jurisdiction.

1. **Not legal advice** — This handbook is **operational guidance** only. It does not replace professional legal counsel.

2. **Third-party services** — The site relies on services such as **Vercel**, **GitHub**, **Stripe**, domain **registrars**, **HomeTown Ticketing**, **Resend**, **Neon**, and others. Those companies set their own terms, pricing, uptime, and policies. The developer does **not** control them and is **not** responsible for their failures or changes.

3. **No ongoing warranty** — After the **included support period** in §13 (unless a **separate written agreement** says otherwise), the **code and site are provided as-is** for your continued use. Software and the web ecosystem change; there is **no guarantee** the site will stay error-free, compatible, or ranked in search without future work.

4. **Copyright and ownership** — **Intellectual property and ownership** of the **delivered work** follow whatever you **agreed in writing** with the developer (contract, Statement of Work, invoice terms, or similar). This handbook does **not** create or change those rights. If nothing was signed, clarify ownership in writing with the developer so both sides have a record.

5. **Trademarks** — Names and logos such as **NWI Fun Ball**, **Region Razzles**, **Oil City Stadium**, **HomeTown Ticketing**, **Facebook**, and others are **trademarks or brands of their respective owners**. Use on this site is **informational / nominative** where applicable and does not imply endorsement unless you have permission.

6. **Privacy and data** — If the site collects **personal information** (for example through checkout, forms, or analytics), **you** may have obligations under privacy laws (notice, consent, vendor agreements). Use your vendors’ dashboards and docs; consider a **privacy policy** suited to your practices. This handbook does not draft that policy for you.

**Avoid reading this as a promise** of specific business results (revenue, attendance, SEO position, or uninterrupted uptime).

---

*This handbook matches the project layout at the time it was written (version 1.0 — March 2026). If you reorganize the project or terms change, update this file so it stays accurate. Detailed legal terms, if any, may also appear in a separate agreement you signed with the developer.*
