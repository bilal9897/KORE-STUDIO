# Kerbcode Studio · Day 20 · DESIGN.md

**Mode: FULL (Max)**: desktop 1440×900 only. The user records the final reel by scrolling by hand, so every motion works at any scroll speed, both ways, and stays alive when stopped.

**Status: Round 0. Section list + hover/scroll ideas approved by the user (2026-10-12) with the changes below. Search sheet built. The inbox has 3 references (not one per section), so per the kit's layout-options rule: 3 animated full-page mockups in `day20/refs/layouts/` (A Photocopy Zine, B White Studio, C Night Drop). Waiting for the user's layout pick, then the full DESIGN.md.**

## Brief
Streetwear drop · **Kerbcode Studio** (fictional; renamed from the plan's name, which clashes with a registered apparel trademark). Drop 07 hoodie on an invisible mannequin. ₹ sample prices, labelled. Not a travelling-object day. Footer: "Concept website by Triozen Tech". No AI faces, hands or people.

## Round 0 decisions so far (user, 2026-10-12)
1. **Loader:** no squeegee (that is only for the "Pull the print" signature). A woven neck label stitching itself in, or a hang-tag barcode scanning in with the real counter.
2. **Hero:** the hoodie turns on its own as a **Veo film** (start frame = the hoodie still). **Code fallback:** front ↔ back flip with a 3D tilt from 2 stills, if Veo warps the fabric. The scroll drives a different move (Day 9 already used a scroll-turned spin as its hero).
3. **Lean assets (Flow credits are low):** colourways as pixel-aligned Flow edits of one hoodie image; all 6 line-up pieces in the same studio setup; about 20 stills and 1–2 Veo films at most, each with a code fallback.
4. The "people in the queue" number is labelled as a sample, like the prices.
5. Leaning to **A · Photocopy Zine** (halftone print, newsprint + riso-blue ink, Lexend Mega), but the layout is picked after the references.
6. GitHub repo: created later with the other days. `npm install` not run yet (run before Round 1).

## Sections (approved list)
Loader · Nav · Hero · Drop clock · The line-up (6 pieces) · Product detail · Pull the print (signature) · Built heavy · Flat-lay looks · Fit guide · Past drops · Join the drop list · Footer

## References (inbox, 2026-10-12)
- **ref 1 · `hero.mov`**: wordmark over a subject on khaki with big black geometric shapes, info card + round thumbnail; then a white studio: garment on an invisible mannequin, ghost giant title, big category word left, faded category list right, View More pill, garment swaps in slices. (The model is replaced by the hoodie; no people.)
- **ref 2 · `product-detail.png`**: light 3-column product page: title + price pill + accordions left, product centre, size chips + colour dots + Favourite / Add to cart right; "You might also like" row of 4 cards with stars.
- **ref 3 · screen recording**: dark teal drop page: giant wide title, a row of floating tees, a figure on snowy peaks with clouds, a red word behind; nav tabs with hover; Featured card rail with ₹ MRP. (The statue is replaced by the hoodie on a kerb plinth; no people.)
- No real-brand look: names, logos and copy are ours; layouts mix the three references with our own sections.

## Layout mockups (animated, code-drawn placeholders)
Same section list and motion in all three; each section is labelled with its reference (press `t` to hide the labels, `?static=1` for no motion).
- **A · Photocopy Zine** `a-photocopy-zine.html`: newsprint + riso-blue ink, Lexend Mega + Public Sans + Courier Prime. Loader: hang-tag barcode scan. Nav: index tab. Hero: halftone hoodie that sharpens with scroll, plates slide into register, half-disc turns.
- **B · White Studio** `b-white-studio.html`: khaki + studio white + pale blue, ultramarine accent, Krona One + Inter Tight. Loader: woven neck label stitched in. Nav: menu + centred wordmark. Hero: ref 1 khaki with black shapes that turn apart, then the white studio sweeps up on a diagonal into the line-up.
- **C · Night Drop** `c-night-drop.html`: night teal + snow, red accent, Dela Gothic One + Geist. Loader: care label prints out and tears off. Nav: floating pill with sliding tab. Hero: ref 3 title + tee row + peaks; the camera rises, clouds part, the hoodie lifts off a kerb plinth.
- Hero hoodie in B and C turns by the code fallback (front ↔ back flip with tilt); A shows it as a halftone. The Veo turn film replaces it in the build.
- **D · Close match** `d-close-match.html` (user asked for the references as exactly as possible, 2026-10-12): one page that follows the three references section by section in their own colours: ref 1 hero (khaki, black nav tab, quarter-cut disc, giant KERB, card, round thumb) → ref 1 white studio line-up (logo, ghost title, big word + ORIGINAL, faded list, slice swap, View More) → ref 2 product page (pale blue map lines, orange price pill, round size chips, colour dots, Favourite / Add to cart, You might also like) → ref 3 night page (chrome title, New Arrival pill, floating tee row, red ORIGINALS, peaks + clouds) → ref 3 white tiles with MRP → ref 3 black Featured rail. Only names, logos, text and images are ours; the model and statue are replaced by the hoodie. Our sections (clock, print, fabric, flat-lay, fit, join, footer) take the neighbouring reference's colours.
