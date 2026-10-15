// Harbour Ink Engraved card. A bordered panel with a corner angle, a quiet heading and a hairline rule; `raised` is the one hero card per screen (a status dot and
// the bright accent over a faint accent wash), `tone` swaps to the warm (ember) or critical (red) treatment.
//
// The card heading is deliberately calm: 14px, regular weight, in the secondary text colour, no tinted band and no glow. The earlier version (21px, bold,
// bright accent with a glow on a tinted band) was too loud once a screen had more than a few cards. The hero card's heading is 16px in the bright accent.
import Cap from "./Cap";
import CornerBracket from "./CornerBracket";

export default function Block({ theme, title, tag, children, tone = "default", raised = false, statusColor }) {
  const toneBg = raised ? theme.panelRaised : tone === "warm" ? theme.panelWarm : tone === "critical" ? theme.panelCritical : theme.panel;
  const toneBorder = raised ? theme.borderActive : tone === "warm" ? `${theme.ember}4D` : tone === "critical" ? `${theme.critical}66` : theme.border;

  return (
    <div
      className="flex h-full flex-col overflow-hidden rounded-lg"
      style={{ background: toneBg, border: `1px solid ${toneBorder}`, boxShadow: raised ? "inset 0 1px 0 #FFFFFF0F" : tone === "default" ? "inset 0 1px 0 #FFFFFF0A" : "none" }}
    >
      {raised ? (
        <div className="flex items-center gap-2.5 px-4 pb-[11px] pt-[13px]" style={{ background: `${theme.accent}0F` }}>
          <span
            className="h-[5px] w-[5px] shrink-0 rounded-full"
            style={{ background: statusColor ?? theme.accent, boxShadow: `0 0 8px ${statusColor ?? theme.accent}8A` }}
          />
          <Cap size={16} color={theme.accentBright} style={{ letterSpacing: "0.14em" }}>
            {title}
          </Cap>
          <span className="ml-1 h-px flex-1" style={{ background: `${theme.accent}26` }} />
          {tag && (
            <Cap size={11} color={theme.textDim}>
              {tag}
            </Cap>
          )}
        </div>
      ) : (
        <div className="flex items-center gap-2.5 px-4 pb-[11px] pt-[13px]">
          <CornerBracket color={tone === "critical" ? theme.critical : theme.ember} className="shrink-0" />
          <Cap size={14} color={tone === "warm" ? theme.ember : tone === "critical" ? theme.criticalText : theme.textSecondary} style={{ letterSpacing: "0.12em" }}>
            {title}
          </Cap>
          <span className="h-px flex-1" style={{ background: tone === "warm" ? `${theme.ember}33` : tone === "critical" ? `${theme.critical}33` : theme.rule }} />
          {tag && (
            <Cap size={9.5} color={theme.textDim} style={{ letterSpacing: "0.1em" }}>
              {tag}
            </Cap>
          )}
        </div>
      )}
      <div className="flex-1 px-6 py-6" style={{ color: theme.text }}>
        {children}
      </div>
    </div>
  );
}
