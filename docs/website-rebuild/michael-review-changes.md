# Michael's wireframe review: change list

From the review transcript of the "Certifyd website wireframes" canvas, 6 November 2026. Each item is ticked when the rebuild branch (`rebuild/website-2026-11`) carries it. Open items need a decision or a fact from the team.

## Across the site

- [x] **G1 No serif fonts.** IBM Plex Sans for body text, IBM Plex Mono for headlines and data, both self-hosted, with sans-serif fallbacks only. The serif text in the canvas was the browser's fallback font.
- [x] **G2 Headlines in one colour.** No two-tone headings. The one exception Michael kept: "Ask once. Certifyd does the rest." on How it works, because each line ends on a full stop.
- [x] **G3 Message Certifyd off.** Removed from the header and from every page, because it isn't fully tested. The components stay in the code behind one switch (`NEXT_PUBLIC_MESSAGE_CERTIFYD=on`), ready to turn on later.
- [x] **G4 Start now becomes Book a demo.** The main button everywhere is "Book a demo" (20-minute demo, to fill the pipeline); "Contact us" is the secondary.
- [x] **G5 Real QR codes.** The pass graphics on the homepage ("At the door") and For workers ("Your record") show a proper QR pattern, not a checkerboard.

## Homepage

- [x] **H1 Proof strip removed.** The "Home Office-certified ID checks", UK hosting, ICO and Cyber Essentials row and the customer logos all go. Who it's for moves up to sit directly under the hero.
- [x] **H2 The chase, new headline.** A missing document is more than an unfilled shift: it is a compliance gap and a contract you can't deliver. The headline sells the painkiller.
- [x] **H3 Legislation line fact-checked.** "No grace period" is gone. New line: "From 1 October 2026, right-to-work checks also cover worker's contracts, individual subcontractors and online platforms, for work that starts on or after that date." (Home Office: the change is not retrospective.)
- [x] **H4 Ask once, new headline.** It makes the templated roles clear: say "I'm hiring a nurse" and Certifyd already knows what a nurse needs. One colour. The "Hiring for a role that isn't here?" block and the library link stay.
- [x] **H5 Security section.** One-colour headline. The "UK GDPR · data hosted in the UK · ICO registration" line is removed until the post-raise security work is done.
- [x] **H6 Library and integrations section removed** from the homepage. The pages still exist.
- [x] **H7 Close, new message.** One colour, white. The pitch is the whole business staying compliant all the time, not one starter. "Set up in about 10 minutes. No sales call needed." is removed. Buttons: Book a 20-minute demo, Contact us.
- [x] Film section kept as designed.

## How it works

- [x] **W1** Remove the square background behind the dashed connector between the phone and the platform screen.
- [x] **W2** Hero: "Ask once." on line one, "Certifyd does the rest." on line two.
- [x] **W3** Subtext: "We do the asking, checking, chasing and recording, from the first message to the evidence pack."
- [x] **W4** "Follow one new starter from invite to evidence pack." on one line, one colour.
- [x] **W5** Who does what: "We do the chasing, so your team stays compliant."
- [x] **W6** What you get and the four things we will never do: kept, one-colour headlines.
- [x] **W7** Close: same change as the homepage, no Message Certifyd button.

## For workers

- [x] **K1** One-colour headlines, including "Got a message from Certifyd?"
- [x] **K2** Real QR code in the "Your record" section.
- [x] **K3** Q&A and the "Stuck on a step? We'll talk you through it. Get in touch." close kept.
- [x] **K4** The Message Certifyd section is hidden behind the switch.

## Regulations (was Requirements)

- [x] **R1** One-colour headlines.
- [x] **R2** Integrations taken out of the main navigation. `/integrations/` stays as a page, unlinked, because no integrations are built yet.
- [x] **R3** URL is `/regulations/{role}/` (Andrew).

## Pricing

- [x] **P1** One-colour headlines.
- [ ] **P2 Open:** "Up to [N] active workers" on Starter and Professional needs real numbers. Set `PLAN_LIMITS` in `src/lib/site.ts`; the line is hidden until a number is there.
- [x] **P3** The "Checks billed at cost" section is removed.
- [x] **P4** FAQ "Is there a setup fee?": no on Starter and Professional, because we set up your roster as part of the plan. Enterprise may include a setup or consultancy fee, depending on tier and number of workers.
- [x] **P5** Close "Worker compliance without the chasing." kept.

## Still needs a person

| Item | Owner | Why |
| --- | --- | --- |
| Active-worker limits for Starter and Professional | Founders (COM-162) | Michael asked for a number |
| Plan prices (£299 and up) | Founders (COM-162) | Still drafts on the wireframes |
| Registered provider for ID and right-to-work checks | Product | Security card says checks run through registered providers. Confirm the provider before launch |
| Film files and captions | Design | The videos live in the RogerSon client-materials folder, not this repo |
| Customer proof for segment pages | Sales | Each segment page needs one real proof point before it goes live |
