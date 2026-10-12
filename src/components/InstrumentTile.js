"use client";

import TickRuler from "./TickRuler";
import CornerBracket from "./CornerBracket";

// Harbour Ink Engraved primitive: an 88px notched square with a mono numeral and an embedded TickRuler, used for every
// reading tile instead of a plain box. tone="warm" swaps to the ember treatment.
export default function InstrumentTile({ theme, value, tone = "default", marker, run, span, size = 88, caption, captionLines = 1, label }) {
  const compact = size < 88;
  const warm = tone === "warm";
  const border = warm ? `${theme.ember}4D` : theme.border;
  const ground = warm ? theme.panelWarm : theme.panel;
  const bracketColor = warm ? theme.ember : theme.bracket;
  const valueColor = warm ? theme.ember : theme.text;
  // Compact (mobile-rail) tiles used to render their value SMALLER than the desktop rail's,
  // exactly backwards from what a phone needs — direct report: "hard to read on a mobile
  // device". Bumped both, compact more so it actually reads at the size mobile shows it at.
  const numeralSize = compact ? Math.round(size * 0.34) : 28;
  const notch = compact ? Math.round(size * 0.3) : 26;

  return (
    // Compact (the horizontal mobile row): fixed-width columns that don't shrink, and a label slot
    // always two lines tall, bottom-aligned. Real cause of the "mis-aligned when zoomed/on mobile"
    // reports: in that scrolling row every column shrank to its own min-content width, so some
    // labels wrapped to two lines and others stayed on one, pushing each tile to a different
    // height. (Desktop rails are vertical stacks, so they never showed it.)
    <div className="flex flex-col items-center gap-[6px]" style={compact ? { width: size + 24, flexShrink: 0 } : undefined}>
      {label && (
        <span
          className="font-mono text-center leading-tight"
          style={{
            fontSize: 11,
            fontWeight: 500,
            lineHeight: 1.1,
            letterSpacing: "0.08em",
            color: theme.textSecondary,
            textTransform: "uppercase",
            ...(compact ? { display: "flex", alignItems: "flex-end", justifyContent: "center", minHeight: "2.5em" } : {}),
          }}
        >
          {label}
        </span>
      )}
      <div
        className="relative flex shrink-0 flex-col items-center justify-center gap-[7px]"
        style={{
          width: size,
          height: size,
          border: `1px solid ${border}`,
          borderRadius: 12,
          borderTopRightRadius: notch,
          background: ground,
          boxShadow: warm ? "none" : "inset 0 1px 0 #FFFFFF0A",
        }}
      >
        {!compact && <CornerBracket color={bracketColor} className="absolute left-[7px] top-[7px]" />}
        <span className="font-mono leading-none text-center px-1" style={{ fontSize: numeralSize, fontWeight: 600, letterSpacing: "-0.02em", fontVariantNumeric: "tabular-nums", color: valueColor }}>
          {value}
        </span>
        {!compact && (run != null || marker != null || span != null) && (
          <div style={{ width: 56, height: 9 }}>
            <TickRuler theme={theme} tone={warm ? "warm" : "default"} run={run} marker={marker} span={span} height={9} />
          </div>
        )}
      </div>
      {caption && (
        <span
          className="font-mono text-center leading-tight"
          style={{ fontSize: 10.5, fontWeight: 500, lineHeight: 1.1, letterSpacing: "0.08em", minHeight: `${(captionLines * 1.1).toFixed(1)}em`, color: warm ? theme.ember : theme.textDim }}
        >
          {caption}
        </span>
      )}
    </div>
  );
}
