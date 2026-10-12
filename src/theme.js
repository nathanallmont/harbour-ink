// Harbour Ink Engraved design tokens: a dark, cool palette with one teal accent and one warm (ember) signal colour.
// The names are the contract the components use (`theme.panel`, `theme.accentBright`, ...), so a project can swap the values and keep the code.
export const theme = {
  // Surfaces
  bg: "#0B141A", // the page ground
  panel: "#16242E", // every card
  panelRaised: "#1C2C37", // the one hero card per screen, sheets, menus
  panelWarm: "#1B1A1C", // ground for attention cards only
  panelCritical: "#1E1618", // ground for critical cards only

  // Lines: four weights, and the weight carries meaning. Never mix two weights on one axis in a card.
  rule: "#1B2B34", // between groups, under headers, column splits
  border: "#2C4250", // a card's outline, tick marks
  borderActive: "#3A5665", // the raised card, focus, selection
  bracket: "#5E7A85", // a LINE colour only (brackets, ticks): it fails contrast as text, never set type in it

  // Text
  text: "#EAF2F3", // primary
  textSecondary: "#A8BFC6", // supporting sentences
  muted: "#728C96", // labels, secondary numerals
  textDim: "#76909B", // the dimmest legible step: the smallest mono labels

  // Accent: spend it sparingly (about three appearances a screen)
  accentDeep: "#1A5F59", // depth, pressed states, fills behind text
  accent: "#2E9488", // solid fills, the active tab, focus brackets
  accentSoft: "#4FB5A8",
  accentBright: "#6FCFC1", // numerals and labels on dark; never a fill
  onAccent: "#EAF2F3", // text on an accent fill

  // Semantic: ember is the only warm note, so warmth alone says "look here"
  ember: "#E08A5C", // attention, staleness, disruption (also the corner angle on a card heading)
  critical: "#D9584B", // critical borders
  criticalText: "#F0796B", // critical text on panelCritical

  // Optional extras a project may add; not part of the core palette (kept in the same lightness family):
  charge: "#4FAE72", // a genuine "charging / good" green
  info: "#4C8DD9", // a genuine blue for a "normal / info" status
};
