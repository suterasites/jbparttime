# CLAUDE.md - JB Parttime

## Business Context

**Business Name:** JB Parttime (legal entity JB PARTTIME PTY LTD, ABN 81 132 004 981). **Trading name NOT yet confirmed** - use "JB Parttime" in the mockup and keep the name out of anything hard to change (logo lockups aside) until Jesse signs it off.
**Owner:** Jesse Borg (also owns Colac Dairies, `../Colac Dairies/`)
**Phone:** 0468 772 402
**Email (quote form destination):** jesseborg@jbparttime.com
**Bases:** 26 Boronia Drive, Hillside VIC 3037 and 5 Dennis Street, Colac VIC 3250
**Domain:** jbparttime.com - registered, runs Google Workspace mail, no website yet. **Never touch the MX records** when DNS is pointed at Pages.
**Hours:** Mon-Sat 9am-5pm (label as office hours - the deliveries themselves run overnight)
**Facebook:** page exists (Melbourne mail and delivery company); link it unless Jesse objects
**Positioning:** Victoria-wide food and freight carrier since 2008, refrigerated fleet, overnight bakery runs.

### About
- Operating since 2008
- 25 vehicles, 12 refrigerated
- Insurance: goods in transit, marine cargo, WorkCover
- "Food safe accredited" per Jesse - **do not publish as a named certification** until he confirms the actual scheme (HACCP, Freshcare, FoodSafe...)

### Services (Jesse's own wording, 2026-10-14)
- **Bakery overnight delivery** - the money service. Bread delivery contracts run ~$1m/yr; the site exists to rank for **"bread delivery carriers"**
- **Cold transport** - refrigerated / cold chain
- **Freight delivery**
- **General courier services**

Auspost mail contracts were mentioned on the discovery call but Jesse left them off his list. Leave them off unless he adds them back.

### Service Area
All of Victoria from the two bases. Named towns: Mornington, Shepparton, Geelong, Colac, Warrnambool, Casterton "and all areas in-between". This is the client the **service x suburb coverage program** applies to (Colac Dairies is local-only). Albury is in NSW - confirm before building any NSW page.

---

## Always Do First
- **Invoke the `frontend-design` skill** before writing any frontend code, every session.
- Read `../../../CRM/operations/sops/website-design-system.md` before building any page. House style, tokens, homepage skeleton and the paid-for mistakes list all live there.
- Read `../../../CRM/clients/JB Parttime/website/client-answers.md` for Jesse's verbatim answers.

## Project Stack
- Plain HTML/CSS/JS, multi-page, no framework. Precompiled CSS, self-hosted woff2, **no Tailwind CDN**
- Hosted on Cloudflare Pages (not Shopify - this is lead-gen, no products)
- Quote form via Formspree straight to jesseborg@jbparttime.com
- Brand: **none exists.** We are designing the logo. Derive `ink/ground/accent` tokens from the logo once it is drawn, per the design system. Do not reuse the Colac Dairies palette.

## Planned Pages
- `index.html` - Home
- `services/bakery-overnight-delivery.html`, `services/cold-transport.html`, `services/freight-delivery.html`, `services/courier.html`
- Areas covered (hub) + service x town pages once the core site is signed off
- `about.html`
- `quote.html` - request a quote (pickup/drop-off, frequency, volume, refrigerated yes/no, start date)
- `contact.html`
- `404.html`, `robots.txt`, `sitemap.xml`

## Assets
- `assets/logo/jb-mark.svg` - our JB monogram (amber tile, three road dashes). Also copied to `/favicon.svg`
- `assets/hero/hero-night-*` - **the homepage hero**, James's painted night scene (truck on a country highway under a crescent moon). `hero-night-source.jpeg` is the original; 1400/2400 webp+jpg are what the page loads
- `assets/hero/hero-road-source.jpeg` - the daytime version of the same painting, not used (kept in case a light page wants it)
- `assets/hero/ai-fleet-collage-source.png` - Jesse's AI truck collage from 2026-10-14. Not used on the page
- `assets/fleet/` - for REAL fleet photos. None yet; ask after the mockup
- `assets/services/` - service stills

---

## Deployment
- **Git remote:** not created. Will be `suterasites/JBParttime` via `scripts/deploy-mockup.py` (pass `--repo-name` if the trading name changes)
- **Cloudflare Pages project:** not created. **The project name is permanent** - confirm the trading name before creating it
- Link clean URLs from the start (`/about`, not `/about.html`)

## Design system (set 2026-10-14, follows the hero)
The hero is modelled on the Primal Pastures hero at James's request (minus the announcement bar, removed 2026-10-14), and **the whole site now follows it**. Build every new page in this vocabulary:
- **Type: NO SERIF FONTS** (James, 2026-10-14). Schibsted Grotesk (`--font-display`, 600) for all headings, each `h2` with ONE italic phrase in `<em>` (Schibsted has a true italic, weight 500). Instrument Sans for body. System monospace (`--font-mono`) for eyebrows, labels, form labels, stat labels, footer heads and the departure board. Headings run tight: about -0.035em on `h2`, -0.04em on the hero `h1`.
- **Palette:** `--night` indigo (from the painting's sky), `--khaki` (footer, why band), `--cream`, `--sage`, `--butter` (CTAs, tags, live states). Amber `--accent` is the headlight colour: tiny accents only (eyebrow bullets, focus rings).
- **Bands:** every section after the hero is `.band .band--{night|cream|khaki|sage|butter}`. Bands slide up `--lap` (2.25rem) over the previous one with rounded top corners and a paper-grain overlay. Night bands also get `.stars`. `.section__inner` already pads the bottom by `--lap` so the next band can overlap. **Never give a band a z-index** - DOM order does the stacking, and a z-index hides the next band's rounded corners.
- **Shapes:** pills (999px) for every button, chip, tag, status tile and radio; `--r-card` 1.5rem for cards/board/form; `--r-field` for inputs. This replaces the house `--radius` rule for this client.
- **Buttons:** `.btn--butter` (primary, ink border, hard drop shadow on hover), `.btn--ink`, `.btn--outline-ink`, and `.pill-link` for in-card links. Uppercase, tracked.
- **Stickers:** inline SVG stamps (roundels with `textPath`, label boxes) using the `.b-*` classes, slightly rotated, drop-shadowed, wiggle on hover. One or two per section at most. Each `<path id>` must be unique on the page (`bp1`...`bp7` used on the homepage).
- **Hero specifics:** night painting with a soft dark wash behind the copy; badge column only >=1180px; on mobile the CTA is pushed below the truck (`.hero .hero__ctas { margin-top: auto }`).

## Hard Rules - Client-Specific
- **Never present the AI truck image as Jesse's fleet.** No "our fleet" caption, no fleet gallery built from it. Background/texture only. Buyers of a $1m contract judge whether the trucks are real.
- **No unconfirmed claims:** no named food-safety certification, no named clients, no staff numbers, no response-time promises until Jesse supplies them.
- No NSW town pages without confirmation.

## Hard Rules - Inherited
- Do not use em dashes or en dashes anywhere in content, code, or comments
- Do not use `transition-all`
- Mobile-first responsive on every change
- Every interactive element needs hover, focus-visible, and active states
- Icons hand-inlined SVG; no emoji, no icon fonts, no CDNs

---

## Cross-References
- **CRM profile:** `../../../CRM/clients/JB Parttime/profile.md`
- **CRM status:** `../../../CRM/clients/JB Parttime/status.md`
- **Jesse's answers:** `../../../CRM/clients/JB Parttime/website/client-answers.md`
- **Billing (shared with Colac Dairies):** `../../../CRM/clients/Colac Dairies/financials.md`
- **Website service summary:** `../../../CRM/clients/JB Parttime/services/website.md`
