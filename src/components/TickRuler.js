// Harbour Ink Engraved primitive.
// A repeating-tick strip instead of a progress bar, with optional span/marker/run overlays.
export default function TickRuler({ theme, tone = "default", span, marker, run, height = 11 }) {
  const tickColor = tone === "raised" ? theme.borderActive : tone === "warm" ? "#4A4038" : theme.border;
  const spacing = tone === "raised" ? 9 : 7;

  return (
    <div
      className="relative"
      style={{
        height,
        backgroundImage: `repeating-linear-gradient(to right, ${tickColor} 0 1px, transparent 1px ${spacing}px)`,
      }}
    >
      {run != null && (
        <span
          className="absolute left-0 top-1/2 h-0.5 -translate-y-1/2"
          style={{ width: `${Math.max(0, Math.min(100, run))}%`, background: tone === "warm" ? theme.ember : theme.accent }}
        />
      )}
      {span != null && (
        <span
          className="absolute top-1/2 h-px -translate-y-1/2"
          style={{
            left: `${Math.max(0, Math.min(100, span.from))}%`,
            right: `${100 - Math.max(0, Math.min(100, span.to))}%`,
            background: theme.textSecondary,
          }}
        />
      )}
      {marker != null && (
        <span
          className="absolute top-[-3px]"
          style={{ left: `${Math.max(0, Math.min(100, marker))}%`, width: 1, height: height + 6, background: theme.accentBright }}
        />
      )}
    </div>
  );
}
