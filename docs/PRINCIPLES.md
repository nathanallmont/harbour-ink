# The rules

The look comes from a few rules held strictly, not from decoration. If you break them it stops looking like this.

## 1. Colour signals depth, importance or urgency. It never labels a category.

There is one cool family (the teal accent and the blue-greys) and one warm note (ember). Warm is the only thing that says "look here", so a problem is visible in peripheral vision. Do not give each category its own colour.

- **Accent budget:** spend `accent` and `accentBright` sparingly, about three appearances on a screen (a live dot, the hero numeral, the active tab).
- **One ember element per screen, at most.** More than one and it stops meaning anything.
- `accentBright` is for numerals and labels on dark. It is never a fill.
- `bracket` (`#5E7A85`) is a line colour only: it draws brackets and ticks and must never set type, because it fails contrast at those sizes.
- Never fade a container that holds dim text. De-emphasise a row by moving its text down the ladder (`text` to `muted`), not by opacity: stacking the two gives roughly 2:1 contrast.

## 2. The hairline is the design language.

- **Four line weights, and the weight means something:** `whisper` between rows in a list, `rule` between groups and under headers, `border` for a card's outline and tick marks, `borderActive` for the raised card, focus and selection. Never mix two weights on the same axis in one card.
- **Elevation is border luminance, not shadow.** A raised card is one with a `borderActive` border and a 1px inner top highlight. At most one raised card per screen.
- **Broken joins:** a line never meets another at a T. A section rule starts after its label, not under it. A vertical split is a 1px element with margin so it stops short of both edges. The first row of a list has no line above it.
- Where a row needs a leading divider use `border-top`, not `border-bottom`, so the last row does not double up against the card edge.

## 3. Instruments, not decoration.

- **Tick rulers replace progress bars.** A run is a filled line from the left, a span is a thin line inset from both ends, a marker is a bright vertical line that overhangs the strip.
- **Corner brackets replace focus rings and bullets.** Seven pixels, one pixel thick, left and top only. Amber on a card heading; accent for focus; ember for attention.
- **The notched square** (`InstrumentTile`): a 12px radius with a larger top-right radius, used for every single reading.

## 4. Type

| Role | Face | Notes |
|---|---|---|
| Headings and labels | Bebas Neue (`font-cap`) | The card heading is 14px, regular, in the secondary text colour, with no band and no glow; the one hero card's is 16px in `accentBright` |
| Body | Manrope (`font-body`) | 13 to 13.5px, line height about 1.6 |
| Every number | JetBrains Mono (`font-mono`) | Tabular figures, so columns share one grid |

Every number in an interface is mono: balances, times, rates, counts.

## 5. Geometry

- Card radius 12px, small controls 8px, chips and checkboxes 3 to 5px.
- Hero cards take a larger top-right radius (the signature corner).
- List rows are exactly 44px: the touch minimum, and what makes hairlines read as an even comb.
- Card padding 15 to 20px, gap between cards 12 to 16px.

## 6. States are built from the same parts

Empty, loading and offline states use the tick ruler, a heading and one sentence. No spinners and no illustrations.
