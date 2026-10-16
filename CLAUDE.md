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
- ~~`quote.html`~~ - not built: `/contact#quote` holds the general quote form, and every service page has its own preselected form. Header Quote pill on form-less pages points at `/contact#quote`
- `contact.html`, `about.html` - built 2026-10-15
- `thank-you.html` (Formspree `_next`, noindex for good), `404.html` (Cloudflare serves it automatically), `robots.txt`, `sitemap.xml` (add every new indexable page)

## Assets
- `assets/logo/jb-mark.svg` - our JB monogram (amber tile, three road dashes). Also copied to `/favicon.svg`
- `assets/hero/hero-{home,bakery,cold,freight,courier,about,contact,areas}-*` - **one painted hero per page** (James, Gemini, 2026-10-16), all edits of the same night painting so the style matches. `-source.jpeg` is the original; 1400/2400 webp+jpg are what pages load (interior ones are 2400x1340, home 2400x1792). Mapping: home -> index; bakery/cold/freight/courier -> their service page; about -> about; contact -> contact + thank-you; areas -> areas hub, all 7 town pages and 404. On phones the crop is set per page with `style="--hero-x: NN%"` on `.hero__media` (default 88%) so that page's truck stays in frame - re-check it whenever a hero image changes. Every vehicle is plain white and unbranded: these are illustrations, never JB Parttime's fleet
- `assets/hero/hero-night-*` - the previous homepage hero, no longer referenced (kept as the source of the series)
- `assets/hero/hero-road-source.jpeg` - the daytime version of the same painting, not used (kept in case a light page wants it)
- `assets/hero/ai-fleet-collage-source.png` - Jesse's AI truck collage from 2026-10-14. Not used on the page
- `assets/fleet/` - for REAL fleet photos. None yet; ask after the mockup
- `assets/services/` - service stills

---

## Deployment
- **Git remote:** `https://github.com/suterasites/jbparttime.git` (created by James 2026-10-15), branch `main`
- **Cloudflare Pages project:** live at `https://jbparttime.pages.dev` (created by James 2026-10-15), auto-deploys on push to `main`. Domain jbparttime.com not pointed yet; Formspree `_next` already uses the domain, so test submissions only land on the thank-you page after DNS
- Link clean URLs from the start (`/about`, not `/about.html`)

## Design system (set 2026-10-14, follows the hero)
The hero is modelled on the Primal Pastures hero at James's request (minus the announcement bar, removed 2026-10-14), and **the whole site now follows it**. Build every new page in this vocabulary:
- **Type: NO SERIF FONTS** (James, 2026-10-14). Schibsted Grotesk (`--font-display`, 600) for all headings, each `h2` with ONE italic phrase in `<em>` (Schibsted has a true italic, weight 500). Instrument Sans for body. System monospace (`--font-mono`) for eyebrows, labels, form labels, stat labels, footer heads and the departure board. Headings run tight: about -0.035em on `h2`, -0.04em on the hero `h1`.
- **Palette:** `--night` indigo (from the painting's sky), `--khaki` (footer, why band), `--cream`, `--sage`, `--butter` (CTAs, tags, live states). Amber `--accent` is the headlight colour: tiny accents only (eyebrow bullets, focus rings).
- **Bands:** every section after the hero is `.band .band--{night|cream|khaki|sage|butter}`. Bands slide up `--lap` (2.25rem) over the previous one with rounded top corners and a paper-grain overlay. Night bands also get `.stars`. `.section__inner` already pads the bottom by `--lap` so the next band can overlap. **Never give a band a z-index** - DOM order does the stacking, and a z-index hides the next band's rounded corners.
- **Shapes:** pills (999px) for every button, chip, tag, status tile and radio; `--r-card` 1.5rem for cards/board/form; `--r-field` for inputs. This replaces the house `--radius` rule for this client.
- **Buttons:** `.btn--butter` (primary, ink border, turns amber on hover), `.btn--ink`, `.btn--outline-ink`, and `.pill-link` for in-card links. Uppercase, tracked.
- **Stickers:** inline SVG stamps (roundels with `textPath`, label boxes) using the `.b-*` classes, slightly rotated and drop-shadowed. Static: no hover wiggle. One or two per section at most. Each `<path id>` must be unique on the page (`bp1`...`bp7` used on the homepage).
- **Motion: minimal (James, 2026-10-15).** No entrance animations, no scroll reveals, no count-ups, no hover lifts/tilts/scales, no pulsing or blinking. Hover is a colour change only. The only motion left is functional: the mega panel fade (.15s), the header hiding on scroll, the chevron/hamburger/FAQ-plus state changes. Do not add `.reveal` or animation back on new pages.
- **Navigation (mega menu, 2026-10-15):** Services and Areas open full-width panels (`.mega`) hung off `.header__inner` (items stay static), with a 16px bridge so the pointer never crosses dead ground. JS owns the open state (`.is-open`, `aria-expanded`): hover with a 140ms close delay on hover devices, click/tap toggles, Esc returns focus to the trigger, outside click and tab-out close. CSS hover/focus-within opening only applies under `.no-js`. The page dimmer is `body.mega-open::after`, not a header pseudo-element, because the header's `backdrop-filter` makes it the containing block for fixed children. Mobile uses `<details>` groups in the overlay. **Panel links point at homepage anchors until each service page exists** - all four service pages now exist (`/services/bakery-overnight-delivery`, `/services/cold-transport`, `/services/freight-delivery`, `/services/courier`) and every service link points at them. Areas: hub at `/areas` (`areas.html`, anchors `#hillside` / `#colac`) and one page per named town at `/areas/<town>` (melbourne, mornington, geelong, shepparton, colac, warrnambool, casterton), each covering all four services with bread delivery leading. Deliberately one page per TOWN, not service x town: 28 templated pages with no local substance would read as doorway pages. Only add service x town pages where a town shows real search demand, and give each genuinely local copy. Town pills in every areas section link to the town pages. NSW (Albury) still excluded. **Main nav (2026-10-15):** Services (mega) · Areas (mega) · About · Contact. Footer has five columns: Services, Company, Contact, Bases, Areas served. **Services hub (2026-10-16):** `/services` (`services.html` at the root, beside the `services/` folder) lists all four services, a generic "How it works" board, the shared standards, areas, 4 FAQs and a general quote form (hidden `page` = Services); hero reuses `hero-home`. It targets broad "transport services Victoria" searches so the bakery page keeps "bread delivery carriers". Every service page breadcrumb (and its BreadcrumbList) points at `/services`, and every page links to it from the Services mega footer ("All services"), the mobile Services group and the footer Services column.
- **Why section visual:** a consignment docket (`.docket`), NOT a map - James rejected the route map on 2026-10-15. Every docket line must be a confirmed fact; the stamp says "Delivered" and must never carry a timing claim like "on time".
- **Service pages (pattern set by `services/bakery-overnight-delivery.html`, 2026-10-15):** root-absolute paths (`/styles.css`, `/assets/...`) because the page sits one folder down. Section order: `.hero--page` (same night painting, shorter, breadcrumb, h1 with one `<em>`) -> stats strip -> intro split with a `.docket--run` run sheet -> needs panel (`.needs`, numbered rows with a fact chip) -> who it suits (`.fit` cards + `.load` pills) -> areas -> service-specific FAQ mirrored into FAQPage -> "Also on the trucks" cards -> butter CTA -> quote form with the service preselected and a hidden `page` field -> footer. JSON-LD: `Service` + `BreadcrumbList` + `FAQPage`. On phones the breadcrumb hides and `.hero__lede-more` drops the lede's second sentence so the copy clears the truck. Freight and courier were generated from the cold page's header/footer by a one-off script, so hand-edit them like the others from here and keep every claim to Jesse's confirmed facts. Cold transport says "refrigerated/chilled" only: **frozen is unconfirmed**, ask Jesse before adding it. Freight/courier make no same-day, truck-size, pallet-limit or interstate claims - none are confirmed.
- **Hero specifics:** night painting with a soft dark wash behind the copy; badge column only >=1180px; on mobile the CTA is pushed below the truck (`.hero .hero__ctas { margin-top: auto }`).

## Hard Rules - Client-Specific
- **Never present the AI truck image as Jesse's fleet.** No "our fleet" caption, no fleet gallery built from it. Background/texture only. Buyers of a $1m contract judge whether the trucks are real.
- **No unconfirmed claims:** no named food-safety certification, no named clients, no staff numbers, no response-time promises until Jesse supplies them.
- No NSW town pages without confirmation.
- **Never name Jesse anywhere on the site** (James, 2026-10-15): no "run by", no owner bio, not even the first name in contact lines. Write "call us on 0468 772 402", "we&rsquo;ll come back to you with a price". Only the email address (jesseborg@jbparttime.com) carries his name, because it is the real inbox. HTML comments say "the client".
- **No street addresses anywhere on the site** (James, 2026-10-15): bases are "Hillside VIC 3037" and "Colac VIC 3250" only, in copy, footer and JSON-LD (`addressLocality` + `postalCode`, no `streetAddress`). The street addresses above are for our records only.

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
