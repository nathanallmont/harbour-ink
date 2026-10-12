// Harbour Ink Engraved card. A bordered panel with a corner angle, a bold bright heading on a tinted band and a hairline rule; `raised` is the one hero card
// per screen (a glowing status dot and the bright accent over an accent wash), `tone` swaps to the warm (ember) or critical (red) treatment.
import Cap from "./Cap";
import CornerBracket from "./CornerBracket";

// The card heading: 21px (17px on a narrow phone, by width), bold, in the bright accent with a soft glow, on a tinted band, so a card is easy to find at a glance.
export const TITLE_STYLE = { fontSize: "clamp(17px, 5vw, 21px)", fontWeight: 700, letterSpacing: "0.08em", lineHeight: 1.15, textShadow: "0 0 14px #6FCFC155" };

export default function Block({ theme, title, tag, children, tone = "default", raised = false, statusColor }) {
  const toneBg = raised ? theme.panelRaised : tone === "warm" ? theme.panelWarm : tone === "critical" ? theme.panelCritical : theme.panel;
  const toneBorder = raised ? theme.borderActive : tone === "warm" ? `${theme.ember}4D` : tone === "critical" ? `${theme.critical}66` : theme.border;

  return (
    <div
      className="flex h-full flex-col overflow-hidden rounded-lg"
      style={{ background: toneBg, border: `1px solid ${toneBorder}`, boxShadow: raised ? "inset 0 1px 0 #FFFFFF0F" : tone === "default" ? "inset 0 1px 0 #FFFFFF0A" : "none" }}
    >
      {raised ? (
        <div className="flex items-center gap-2.5 px-4 pb-[14px] pt-[16px]" style={{ background: `${theme.accent}14`, borderBottom: `1px solid ${theme.accent}40` }}>
          <span
            className="h-[5px] w-[5px] shrink-0 rounded-full"
            style={{ background: statusColor ?? theme.accent, boxShadow: `0 0 8px ${statusColor ?? theme.accent}8A` }}
          />
          <Cap size={21} color={theme.accentBright} style={TITLE_STYLE}>
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
        <div
          className="flex items-center gap-2.5 px-4 pb-[14px] pt-[16px]"
          style={{ background: `${tone === "warm" ? theme.ember : tone === "critical" ? theme.critical : theme.accent}14`, borderBottom: `1px solid ${tone === "warm" ? theme.ember : tone === "critical" ? theme.critical : theme.accent}40` }}
        >
          <CornerBracket color={tone === "critical" ? theme.critical : theme.ember} className="shrink-0" />
          <Cap
            size={21}
            color={tone === "warm" ? theme.ember : tone === "critical" ? theme.criticalText : theme.accentBright}
            style={{ ...TITLE_STYLE, textShadow: tone === "default" ? TITLE_STYLE.textShadow : "none" }}
          >
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
