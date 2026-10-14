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
- `assets/logo/` - empty. Ours to design.
- `assets/hero/` - Jesse's AI-generated truck image goes here (attached to his 2026-10-14 email, not yet saved)
- `assets/fleet/` - for REAL fleet photos. None yet; ask after the mockup
- `assets/services/` - service stills

---

## Deployment
- **Git remote:** not created. Will be `suterasites/JBParttime` via `scripts/deploy-mockup.py` (pass `--repo-name` if the trading name changes)
- **Cloudflare Pages project:** not created. **The project name is permanent** - confirm the trading name before creating it
- Link clean URLs from the start (`/about`, not `/about.html`)

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
