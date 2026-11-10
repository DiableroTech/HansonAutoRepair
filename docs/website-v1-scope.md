# HAN-1 — Hanson Auto Repair website v1

**Status:** complete
**Repo:** `/Users/liamholloway/Desktop/HansonAutoRepair`
**Stack:** React 19, Vite, TypeScript, React Router 7, Tailwind CSS v4

## Outcome

Replace the Yellow Pages brochure at hansonsauto.com with a short marketing site. The pages use Hanson’s real shop facts. The scroll follows aamcokamloops.ca and cjmauto.ca: phone and identity first, one photo headline, a few proof sections, services as visual blocks, reviews, then booking and a map.

v1 is a front-end site. The appointment form is a working UI with no backend.

## Current state

The scaffold already has:

- `BrowserRouter` and a shared `Layout` (`src/App.tsx`, `src/components/Layout.tsx`)
- Placeholder routes: `/`, `/about`, `/contact`
- `Header` and `Footer` with temporary copy
- Tailwind wired in `src/index.css` and `vite.config.ts`
- No services route, no design tokens, no real sections

Reference screenshots (do not render these in the UI):

- `public/old-website/` — current hansonsauto.com
- `public/good-comparison/` — AAMCO Kamloops and CJM Auto Repair

## Locked decisions

These are the defaults for every phase below. Change them in this file before the affected phase starts.

| Topic | v1 decision |
| --- | --- |
| Routes | `/`, `/about`, `/services`, `/contact` |
| Nav | Home, About, Services, Contact. Phone stays a button, not a nav item. |
| Suppliers | A short name list on `/services`. No Suppliers route and no logo wall. |
| Gallery / FAQ | No routes. Shop photos live inside Home and About. |
| Address line | 2B-962 Laval Crescent, Kamloops, BC V2C 5P5 |
| Phone | 250-374-3240 |
| Email | info@hansonsauto.com |
| Hours | Monday–Friday 8:00 AM–4:30 PM. Saturday and Sunday closed. |
| Palette | White content, navy headlines, blue calls to action, one dark photo band. Not AAMCO red. |
| Reviews | Only the real Pat H. quote. No invented reviews and no carousel until more quotes exist. |
| Form | Fields and validation on the page. Submit shows a success state. No email or API. |
| Motion | CSS only. No animation library. Honor `prefers-reduced-motion`. |
| Photos | Labeled placeholder frames until real files are added under `public/shop/`. |

## Information architecture

```
/                 Long homepage. Every major section lives here.
/about            Shop story, Henry Hanson, how the shop works.
/services         Full service list, propane/CNG, headlight special.
/contact          Hours, address, map, and the appointment form.
```

Every page uses the same top bar, header, and footer.

### Homepage section order

1. Top bar — address and hours.
2. Header — wordmark, nav, phone button.
3. Hero — full-bleed shop or engine photo, one headline, Call and Book.
4. Intro — short promise and a link to About.
5. Service cards — three links: Repair & maintenance, Propane & CNG, Book a visit.
6. Split story — Henry Hanson (or the shopfront) plus the family-shop paragraph.
7. Credentials — dark band, checklist of what the shop actually offers.
8. Testimonial — Pat H., single card.
9. Appointment band — short prompt that links to `/contact`.
10. Footer — phone, address, hours, email, map, nav.

### Inner pages

About, Services, and Contact all start with a photo title band (page name over a darkened photo), then one main content pattern, then a closing call to action into `/contact` or `tel:250-374-3240`. Contact itself ends at the footer.

## Component map

| Component | File | Used on |
| --- | --- | --- |
| `TopBar` | `src/components/TopBar.tsx` | All pages |
| `Header` | `src/components/Header.tsx` | All pages |
| `Footer` | `src/components/Footer.tsx` | All pages |
| `PageHero` | `src/components/PageHero.tsx` | Home hero and inner title bands |
| `ServiceCards` | `src/components/ServiceCards.tsx` | Home |
| `SplitFeature` | `src/components/SplitFeature.tsx` | Home, About, Services |
| `CredentialList` | `src/components/CredentialList.tsx` | Home |
| `Testimonial` | `src/components/Testimonial.tsx` | Home |
| `AppointmentForm` | `src/components/AppointmentForm.tsx` | Contact |
| `ShopMap` | `src/components/ShopMap.tsx` | Footer or Contact |

Shared facts live in one module, `src/content/site.ts`, so the phone, address, hours, services, and testimonial are not copied into each component.

## Content to use

Rewrite for the new layout. Keep the facts.

**Identity.** Hanson’s Auto Repair. Tagline: The Place That Cares. Family-owned shop in Kamloops. Founded September 2001. Owner Henry Hanson. Red Seal technicians, apprentices, and casual help. Domestic and foreign vehicles. The old site also says the owner has more than 40 years of experience.

**Hero draft.** “Auto repair in Kamloops since 2001.” Supporting line: “Family-owned. Red Seal technicians. All makes and models.” Buttons: Call 250-374-3240, and Book a visit.

**Service groups.**

- Repair and maintenance: tune-ups, brakes, computerized engine diagnostics, transmissions, air conditioning, maintenance, clutches, electrical.
- Tires and trailers: seasonal tire changeover, tire balancing and repair, trailer hitch installation, hitch covers, trailer wiring harnesses and insulation.
- Propane and CNG: service, repair, installation, and certification, plus automotive propane conversion. The old promo said to call for pricing.
- Headlight restoration: two restorations include one free alignment on their alignment equipment.

**Testimonial.** Pat H. — prompt, knowledgeable Porsche service, reasonable cost, and the vehicle stayed fixed.

**Trust points for the dark checklist.** Family-owned since 2001. Red Seal certified technicians. Domestic and foreign vehicles. Preventive-maintenance reminders from past dates and mileage. Quality parts from named suppliers.

**Supplier names (text only).** Dayco, FRAM, Raybestos, Pennzoil, Bosch, Monroe, BG, MOOG, Walker, ACDelco, Maxquip, Prins, Superior Propane, National Energy Equipment.

**Payment, if shown.** Visa, Mastercard, Interac. Leave the unreadable fourth mark off until it is confirmed.

## Visual tokens

Set these in `src/index.css` under `@theme` during Phase 1. Components use the token names, not raw hex values.

| Token | Role | Starting value |
| --- | --- | --- |
| `--color-paper` | Page background | `#efeeea` |
| `--color-card` | Cards and header | `#f9f8f5` |
| `--color-ink` | Body text | `#1c2430` |
| `--color-navy` | Headlines on light sections, footer, dark bands | `#256892` |
| `--color-blue` | Top bar, buttons, links, active nav | `#3a94c4` |
| `--color-blue-deep` | Button hover, contact button active | `#2a7aab` |
| `--color-blue-soft` | Light blue panels (About) | `#d4e8f4` |
| `--color-line` | Hairline borders | `#d5dbe3` |
| `--color-mute` | Secondary text | `#5c6775` |

Type stays system sans for v1. Display headings are semibold, tight tracking, sentence case or short title case. Buttons are rectangular, small caps or medium weight, no pill radius.

Dark bands use `--color-navy` with white text. The hero headline sits on a darkened photo, the same way CJM does, with the blue button as the primary action and a ghost button beside it.

## Motion

- Header link and button hover: color change, about 150ms.
- Service cards: slight lift and border change on hover.
- Mobile nav: open and close without a spring library.
- No hero carousel in v1. One still frame.
- No testimonial carousel in v1.
- If a section fades in on scroll, it must appear immediately when `prefers-reduced-motion: reduce` is set.

## Out of scope

- Backend, email delivery, reCAPTCHA, and a live booking calendar
- Financing, coupons, and fleet contracts
- A Suppliers, Gallery, or FAQ page
- Supplier logo files
- Blog, online payments, and a customer portal
- Copying AAMCO’s red brand or CJM’s Interprovincial seal
- Deploy config (Netlify or otherwise) until a later ticket

## Open items

These do not block the phases. The locked defaults above are what gets built.

1. Map pin. The footer says 2B-962 Laval Crescent. The old Google popup said Laval Crescent 962 A. v1 searches the 2B-962 line. Swap the query when the unit is confirmed.
2. Real photos of Henry, the shopfront, the counter, the bay, and the plaza sign. Placeholders ship until files land in `public/shop/`.
3. Where the form should send once v1 is approved.
4. Whether propane conversion stays a featured block or folds into the general list.

---

## Phase 1 — Shell, tokens, and routes

**Goal:** The four routes exist, color tokens exist, and page copy comes from one content module.

**Depends on:** the current Vite scaffold.

**Done when:** `/`, `/about`, `/services`, and `/contact` render inside `Layout`, `npm run build` and `npm run lint` pass, and no component imports files from `public/old-website` or `public/good-comparison`.

### Steps

1. Add the color tokens and base `body` styles to `src/index.css`. Remove the temporary untokenized neutrals from `Layout`, `Header`, and `Footer` as later phases replace those files.
2. Add `src/content/site.ts` with name, tagline, phone, `tel` href, email, address, hours, nav items, service groups, supplier names, and the Pat H. quote.
3. Add the `/services` route and `src/pages/Services.tsx`. Point Home, About, and Contact at the content module so the placeholder pages already show the real shop name.
4. Keep reference screenshots out of the UI. Leave the folders in place for this ticket. Do not import them.
5. Run `npm run lint` and `npm run build`.

## Phase 2 — Shared chrome

**Goal:** Every page shows the same top bar, header, and footer, including on a narrow screen.

**Depends on:** Phase 1.

**Done when:** The phone number in the header and footer calls `250-374-3240`. Nav highlights the current route. Below the header breakpoint the links collapse into a menu, and the phone button stays visible.

### Steps

1. Build `TopBar` with the address and the weekday hours from `site.ts`.
2. Rebuild `Header`: wordmark linking to `/`, nav links from `site.ts`, and a solid phone button. Mark the active link with `NavLink`.
3. Add a menu button for small screens. Opening it shows the same four links. Closing it on navigation and on a second press. Trap focus only if the menu is a full-screen layer. A simple disclosure is enough.
4. Rebuild `Footer`: phone, address, email, hours, the four nav links, and a one-line copyright for Hanson’s Auto Repair. No Yellow Pages credit.
5. Mount `TopBar`, `Header`, and `Footer` from `Layout`. Main content sits between header and footer and grows so the footer rests at the bottom of short pages.
6. Check `/` and `/contact` at desktop width and at about 390px wide. The phone button must be tappable without opening the menu.

## Phase 3 — Homepage

**Goal:** `/` follows the section order in this ticket, using Hanson facts and placeholder media.

**Depends on:** Phase 2.

**Done when:** A visitor can read who the shop is, what it does, and how to call or book without leaving the homepage. Each service card lands on the right place.

### Steps

1. Build `PageHero` for the homepage: darkened placeholder frame, the hero draft headline, the supporting line, Call, and Book a visit (`/contact`).
2. Add the intro block under the hero. One short paragraph from the identity facts and a text link to `/about`.
3. Build `ServiceCards` with three items:
   - Repair & maintenance → `/services`
   - Propane & CNG → `/services#propane`
   - Book a visit → `/contact`
4. Build `SplitFeature`. On the homepage, one column is a placeholder for Henry Hanson or the shopfront. The other column is the family-owned story: September 2001, Kamloops, Red Seal, all makes and models.
5. Build `CredentialList` as a navy band. Use the trust points from this ticket. Plain checkmarks, no icons library.
6. Build `Testimonial` as one card quoting Pat H. No arrows, dots, or stars unless a real rating is provided later.
7. Add a closing appointment band with the phone number and a link to `/contact`.
8. Compose these in `src/pages/Home.tsx` in the documented order. Delete the scaffold placeholder paragraph.

## Phase 4 — About and Services

**Goal:** The two inner pages carry the rest of the old site’s useful content in the new template.

**Depends on:** Phase 3 (`PageHero` and `SplitFeature` exist).

**Done when:** `/about` tells the shop story, `/services` lists every service group, and the propane block is reachable at `/services#propane`.

### Steps

1. About: `PageHero` title band (“About”), then a `SplitFeature` with Henry’s placeholder and the shop story (family-owned, Red Seal, apprentices, shop equipment, customers first).
2. About, continued: a short block for preventive-maintenance reminders and seasonal coupons. End with a call to action to `/contact`.
3. Services: `PageHero` title band (“Services”), then an intro line that the shop works on all makes and models.
4. Render the three service groups from `site.ts` as headed lists. Give the propane group `id="propane"` so the homepage card can scroll to it.
5. Add the headlight restoration note under the lists: two restorations include one free alignment.
6. Add the supplier names as a text list under a “Parts” heading. No logos.
7. End Services with the same contact call to action used on About.

## Phase 5 — Contact, hours, map, and form

**Goal:** `/contact` is where someone books. The form checks required fields and does not send them anywhere.

**Depends on:** Phase 2. It can proceed in parallel with Phase 4 after Phase 2.

**Done when:** Hours match `site.ts`. The map opens a search for the locked address. An empty submit shows errors. A complete submit shows a confirmation and does not navigate away.

### Steps

1. Contact layout: title band, then a two-column region. One side is phone, address, email, and hours. The other side is the map on wide screens. Stack them on small screens.
2. Build `ShopMap` as a link or embed that queries `2B-962 Laval Crescent, Kamloops, BC V2C 5P5`. Include a visible “Open in Google Maps” link. Do not add an API key.
3. Build `AppointmentForm` with: name, phone, email, preferred date, vehicle year/make/model, service (select from the service group names), and problem/comments.
4. Require name, phone, email, and problem. Validate email shape and a non-empty phone. Show errors beside the fields.
5. On valid submit, prevent the default post, clear nothing that would hide the confirmation, and show a message that the request is not sent yet and the shop can be reached at the phone number.
6. Privacy line under the form: the shop uses the details to confirm an appointment. No reCAPTCHA in v1.
7. Optional: if the payment marks are still wanted, show Visa, Mastercard, and Interac as text under the hours. Skip the unknown fourth mark.

## Phase 6 — Motion and pass

**Goal:** The site feels finished at desktop and phone width, and motion stays quiet.

**Depends on:** Phases 3, 4, and 5.

**Done when:** The checks below pass, `npm run lint` and `npm run build` pass, and the homepage can be read top to bottom without a placeholder route or a broken link.

### Steps

1. Add the hover and menu transitions from the Motion section. Wrap any scroll fade so reduced motion shows the content at full opacity.
2. Walk every route at a wide desktop width and at about 390px. Fix overflow, overlapping header, and tap targets on the phone button, menu, form, and map link.
3. Keyboard-check the header, mobile menu, form fields, and links. Visible focus styles must use the blue token.
4. Confirm the active nav state on all four routes and that `/services#propane` scrolls to the propane block.
5. Read the copy once against this ticket. Remove scaffold sentences (“Placeholder page”, “site scaffold”).
6. Run `npm run lint` and `npm run build`.

## Suggested order

Phase 1 → Phase 2 → Phase 3 → Phase 4 and Phase 5 → Phase 6.

Phase 5 does not need to wait for Phase 4. Phase 6 waits for both.
