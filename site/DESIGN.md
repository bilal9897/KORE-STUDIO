# Kerbcode Studio · Day 20 · DESIGN.md

**Mode: FULL (Max)**: desktop 1440×900 only.

## 1. Status
- **Layout D (Close Match) picked** (user, 2026-10-13). Round 0 design is written here; no code yet. Waiting for the user's OK on the Motion map, Hover map, Product detail plan, reel time table and asset list.
- The user records by hand (`?record=1` is not the filming mode). So **every motion works at any scroll speed, forward and back**, nothing depends on a fixed timeline, and every section stays **alive when idle** (loops, drifts, tickers keep going while the page is still). `?static=1` shows every final state.
- **Not a travelling-object day** (Day 20 is not in the F-day list). Traveling object column in the SITES-LOG: "—".
- Brand: **Kerbcode Studio** is fictional. Streetwear drop, Drop 07 hoodie on an invisible mannequin. No faces, hands or people in any asset (the reference model and statue are replaced by the hoodie).

## 2. Look, fonts, colours, design system
Layout D follows the three references section by section in their own colours; only names, logos, copy and images are ours. Our extra sections (clock, print, fabric, looks, fit, join, footer) take the colours of the neighbouring reference section.

| Token | Value | Used in |
|---|---|---|
| `--khaki` / `--khaki-d` | `#A49A74` / `#8C8260` | hero (ref 1) |
| `--studio` | `#E7EBF0` | white studio line-up, clock (ref 1) |
| `--ink` | `#0E0F11` | nav tab, black shapes, type, featured rail |
| `--sky` | `#E3EDF9` | product page background (ref 2) |
| `--orange` | `#EC6A2C` | **the accent**: price pill, Add to cart, CTA, ticker (ref 2) |
| `--tile` | `#E8DFD0` | print and fabric sections |
| `--teal` / `--night` | `#0E3A4C` / `#07161D` | night drop (ref 3) |
| `--red` | `#E3262D` | the giant "ORIGINALS" word and cap only, on purpose, night section (colour band) |
| `--mesh` | `10px` | map-line grid on the product page |

- **Fonts:** display **Krona One** (wide geometric: the giant wordmark, ghost titles, price pill). Body **Inter Tight** (my pick: the digest names only Krona One). Check the pair against Day 19 when the log is synced; never the same pair two days running.
- **Design system:** hard-edged shapes (quarter-cut disc, black slabs), round chips and dots, one orange accent, ghost (outlined, low-opacity) giant titles, small caps labels, thin 1px rules. Cards are flat tiles with name + MRP; no shadows except under products. All product stills share one studio grade (cool white `#E7EBF0` background, soft floor shadow).
- **Copy rules:** 2–6 words per headline. Prices in ₹ and always labelled **"sample"** (e.g. "MRP ₹4,990 · sample"). The join-section queue number is labelled **"sample"**. Footer: **"Concept website by Triozen Tech"**. No fake phone numbers or real addresses.

## 3. Approved sections, in order
Menu codes are SECTION-MENU layouts, none repeated on the site and none used by Days 16–18 (checked against `docs/SITES-SUMMARY.md` and the SITES-LOG Layouts column). Motion codes are unique across the page and none is "just fade in". Item numbers match the section ids in the build.

| # | Section (id) | Layout | Motion | Hover | Scroll animation | Source |
|---|---|---|---|---|---|---|
| 0 | Loader | — | new I-code: **woven neck label stitches itself in**, the label shows the brand + a real % counter, then the label lifts away to the khaki hero | — | plays once on load | ours |
| 1 | Nav | NV25 pill/tab that expands | M71 magnetic tab + label lean | black tab expands into a panel of the page links with a sliding highlight | tab stays pinned; its fill flips ink ↔ white when it passes the white studio | ref 1 |
| 2 | Hero (`hero`) | HR19 giant title on a full-bleed field | **M30 dial**: the quarter-cut disc rotates with scroll (both ways) while the hoodie **turn film loops on its own** | card lifts and its CTA arrow slides; the round thumb swaps hoodie colour | giant wordmark `KERB` slides apart as you scroll; disc turns; film never pauses | ref 1 hero |
| 3 | The line-up (`lineup`, 7 slices) | PS02 editorial product index | **M213 seven slices** retract and re-form to swap the piece (hoodie, puffer, tee, cargo, cap, socks): scroll steps one piece at a time, forward and back; idle auto-advances every ~3 s | list row brightens, big word + `ORIGINAL` tag follow it, View More pill fills | ghost title drifts opposite to the slices; faded list scrolls | ref 1 white studio |
| 4 | Drop clock (`clock`) | CT04 countdown launch banner | **M3 odometer** digits roll for days / hours / min / sec (a real ticking clock to a sample drop date) | digit group inverts to ink | digits roll in on enter; keeps ticking idle | ours, studio colours |
| 5 | Product detail (`product`) | PS07 three-step page (3 columns) | **M216 group blur-slide stagger**: title, pill, chips, dots and buttons rise in groups | colour dots swap the hoodie (pixel-aligned stills, push not crossfade); size chips get a sliding highlight; Favourite heart pops; Add to cart fills orange and flies a token to the nav bag | pale-blue map lines (`--mesh`) drift slowly; "You might also like" 4 cards enter in a row | ref 2 |
| 6 | Pull the print (**signature**) (`print`) | SY06 process (4 steps) | **new signature code: the print is pulled**. A squeegee-edge sweep drags across a screen-printed graphic on the hoodie as you scroll, revealing ink in 4 passes; scroll back un-pulls it. Idle: a faint ink shimmer | step label inverts, ink swatch swatches | pinned ~3 screens, scrubbed, both ways | ours, ref 2 colours |
| 7 | Built heavy (`fabric`) | FT04 product with callout lines | **M8 line draw-on**: callout lines draw from the fabric detail to labels (weight, ribbing, stitching, hood) | callout label ticks and the hit area zooms the macro still | lines draw on enter and re-draw on re-enter | ours |
| 8 | Night drop (`night`) | GL17 adapted: **curved carousel** | **M33 ring/carousel** (see section 4) | a tee tilts toward the pointer and its name tag appears; `New Arrival` pill slides | the tee row curves and turns with scroll; clouds and peaks parallax; the hoodie lifts off a kerb plinth at the end | ref 3 hero |
| 9 | Shop tiles (`shop`) | PS14 tile grid | **M211 wave-stagger** from the top-left tile | white tile lifts, product swaps to its back view, MRP bar slides | tiles scale in as a wave | ref 3 |
| 10 | Flat-lay looks (`looks`) | PS08 shop the look | **M4 stack fan-out**: pieces fan out of a pile into two flat-lay looks (positions from `data-look="x,y,rot"`), then fan back on reverse | piece lifts, rotates 2° and shows its name + MRP | two looks, pinned ~1.5 screens | ours, night colours |
| 11 | Fit guide (`fit`) | PS20 size guide | **M26 progress fill**: chest / length / sleeve bars fill to the sample measurements (`data-fit-num`) | row highlights, the size chip row slides | bars fill on enter and re-fill when the size changes | ours |
| 12 | Past drops / Featured (`featured`) | PS01 product row (rail) | **M44 marquee drift**: black rail drifts sideways; `SOLD OUT` stamps drop on | card pauses its drift on hover, stamp tilts | rail drifts slowly with scroll speed added | ref 3 black rail |
| 13 | Join the drop list (`join`) | NL05 launch signup | **M9 print-out line by line**: a queue ticket prints, ending with "You're #… in line (sample)" | field underline sweeps, button fills | ticket prints on enter; queue number (`12,480`, labelled sample) counts up | ours |
| 14 | Footer | FO10 oversize word footer | **M12 split-letter stagger** on a giant `KERBCODE` word | links get an orange underline sweep | letters rise on enter; word nudges with scroll | ours |

Transitions between sections (X codes): chosen in Round 3 from MOTION-MENU, one per join, all work in both scroll directions. Planned: hero → line-up is a **diagonal sweep** (khaki to white), line-up → clock colour hand-over, product → print push (not crossfade, lesson 134), print → fabric tone shift, fabric → night a **slow dark wipe**, night → shop an upward **snow-white wipe**, shop → looks → fit → featured a dark/light alternation, featured → join a cut to orange.

### Hover map
| Element type | Hover effect | `data-hover-demo` (record cursor, ≥ 3 required) |
|---|---|---|
| Nav tab | expands to panel, sliding highlight | — |
| Hero card + round thumb | card lifts, thumb swaps colour | thumb (hover) |
| Line-up list row | row brightens, big word follows | one row (hover) |
| Colour dots | swap the hoodie | **two dots (`click`)** (already in the build) |
| Size chips | sliding highlight | — |
| Add to cart | fill + flying token | **`click`** |
| You might also like cards | lift + back view | one card (hover) |
| Night tee | tilt + name tag | one tee (hover) |
| Shop tile | back view + MRP bar | one tile (hover) |
| Buttons / links | magnetic pull, underline sweep | — |

### Product detail plan (ref 2)
Colour dots that swap the product (push transition) · size chips with a sliding highlight · Favourite heart pop · Add to cart with a flying token that lands in the nav bag · accordions (Details, Care, Delivery) · "You might also like" 4 cards with stars. All in section 5 (`product`).

## 4. Night section: the curved tee carousel
- **What it is:** a row of seven pieces on a shallow cylinder, curving toward the viewer at the middle and away at the sides (CSS 3D `rotateY` per slot on a pinned stage, `perspective` on the parent). Behind it: the giant chrome title, the `New Arrival` pill, a red `ORIGINALS` word, clouds and peaks (code, parallax). At the end the hoodie lifts off the kerb plinth.
- **How it moves:** scroll rotates the cylinder (scrubbed, reversible), so the slot at the centre faces the camera and the one that turns away shows its **back view** halfway round. Idle: the cylinder keeps a slow constant drift, and a scroll adds speed on top. No big jumps at any scroll speed.
- **Which stills it uses (no new ones):** the **same 6 line-up stills (4 with real backs)** (hoodie, puffer, tee, cargo, cap, socks): each has a **front** and a **back** still, seven slots are filled by repeating the first piece at the far end. Front faces show the front still; once a slot rotates past 90° it swaps to the piece's own **back still**. Cap and socks have no back still: their far-side faces show the flat inside-colour fallback and they sit in slots that never turn past 80°. Tee, puffer, cargo and hoodie backs are real back views, **never a CSS mirror**, so printed text is never reversed. Slots with `#E9EDEF` use the chalk colourway, `#141516` the ink one.
- **Fallback if backs are not generated:** the back faces show a plain-colour inside of the piece (a flat darker version of the cut-out) and the carousel only turns up to 80°, so the missing back never shows.

## 5. Reel time table (hand-scrolled, target 25–40 s total including loader)
Loader 3 s · Hero 4 · Line-up 6 (pieces step) · Clock 2 · Product 5 (two swatch clicks, Add to cart) · Print 5 · Fabric 3 · Night 6 · Shop 2 · Looks 3 · Fit 2 · Featured 2 · Join 2 · Footer 1. Total about 46 s of material at a hand pace; the user can scroll the quiet sections faster. Pinned sections: line-up, print, night, looks.

## 6. Lean assets (2 batches: 16 stills + 1 Veo film)
Nothing here is prompted in this file. Flow prompts come from the director in chat; Claude never writes them. All stills: studio-white background (`#E7EBF0` look), invisible mannequin, no people, one shared grade. Colourways are **pixel-aligned edits of the hoodie master** (attach it to the edit). Cut-outs are made locally with `npm run cutout` from the stills (no extra Flow images).

| Batch | ID | Name | What it is | Aspect | Save as | Code fallback |
|---|---|---|---|---|---|---|
| 1 | A01 | `hoodie-front` | Drop 07 hoodie, front, invisible mannequin: **master** (hero card, line-up, product, print, night, plinth) | 4:5 | `raw/hoodie-front.jpg` | none: this is the master, redo until it is right |
| 2 | A02 | `hoodie-back` | same hoodie, back view (night carousel, hero flip) | 4:5 | `raw/hoodie-back.jpg` | CSS tint of the front's inside (carousel stops at 80°) |
| 2 | V01 | `hero-turn` | **Veo film**: hoodie turning on its own, start frame = A01, 6–8 s loop | 16:9 (hoodie centred, cropped by code) | `raw/hero-turn.mp4` | front ↔ back 3D flip with tilt from A01 + A02 |
| 2 | A03 | `hoodie-ember` | colourway edit of A01 (`#EC6A2C`) | 4:5 | `raw/hoodie-ember.jpg` | canvas multiply recolour of A01 |
| 2 | A04 | `hoodie-chalk` | colourway edit (`#F6F6F4`) | 4:5 | `raw/hoodie-chalk.jpg` | canvas recolour of A01 |
| 2 | A05 | `hoodie-navy` | colourway edit (`#1B2537`); used in product + print + fabric | 4:5 | `raw/hoodie-navy.jpg` | canvas recolour of A01 |
| 2 | A06 | `hoodie-teal` | colourway edit (`#2F5A5E`), shop / featured | 4:5 | `raw/hoodie-teal.jpg` | canvas recolour of A01 |
| 1 | A07 | `puffer-front` | puffer jacket, ink, same set-up | 4:5 | `raw/puffer-front.jpg` | none (line-up piece); drop it from the 6 if it fails |
| 1 | A08 | `tee-front` | tee, ink | 4:5 | `raw/tee-front.jpg` | none |
| 1 | A09 | `cargo-front` | cargo pants, charcoal `#3A3C40` | 4:5 | `raw/cargo-front.jpg` | none |
| 1 | A10 | `cap-front` | cap, red `#E3262D` | 4:5 | `raw/cap-front.jpg` | none |
| 1 | A11 | `socks-front` | socks, chalk `#E9EDEF` | 4:5 | `raw/socks-front.jpg` | none |
| 2 | A12 | `tee-chalk` | tee in chalk/grey (`#E9EDEF`), carousel + shop | 4:5 | `raw/tee-chalk.jpg` | canvas recolour of A08 |
| 2 | A13 | `puffer-back` | back view | 4:5 | `raw/puffer-back.jpg` | inside-colour fallback, section 4 |
| 2 | A14 | `tee-back` | back view | 4:5 | `raw/tee-back.jpg` | same |
| 2 | A15 | `cargo-back` | back view | 4:5 | `raw/cargo-back.jpg` | same |
| 2 | A18 | `fabric-macro` | close-up of the hoodie's knit and ribbing (fabric + print) | 3:2 | `raw/fabric-macro.jpg` | zoomed crop of A01 (soft) |
| 1 | A19 | `kerb-plinth` | empty concrete kerb plinth, **transparent cut-out** | 3:2 | `raw/kerb-plinth.png` | CSS concrete block with grain |

Code-only (no asset; V02 hoodie lift is now a code lift from A01 + A19): khaki shapes and quarter-cut disc, ghost titles, chrome title, clouds and peaks (SVG + parallax), pale-blue mesh lines, printed graphic and squeegee for the signature, clock, queue ticket, SOLD OUT stamps, woven label loader.
**Batch 1** (nothing attached, run together): A01, A07, A08, A09, A10, A11, A19. **Batch 2** (after A01 and the fronts are approved; attach A01 or the matching front): A02, A13, A14, A15, A12, A03–A06, A18, V01. **Dropped:** A16, A17 (cap and socks backs) and V02. Total 17 stills + 1 film.

## 7. Prompts (as run)
*(empty. When the user pastes back the prompts that were run: asset ID · date · prompt · attachments, word for word.)*

## 8. Different from the last sites
Layout codes: none shared with Days 16–18 (checked). The look, palette and type-pair comparison goes in `docs/SITES-LOG.md` ("Uniqueness checks") at the end of the day; Day 19's row is not in this copy of the kit, so sync the kit first. Motion codes to confirm against every earlier hero and signature in Round 2: hero M30 (dial) and the print signature (new code, to be added to MOTION-MENU after the build).
