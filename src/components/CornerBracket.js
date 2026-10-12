// Harbour Ink Engraved primitive.
export default function CornerBracket({ color, size = 7, leaving = false, className = "", style }) {
  return (
    <span
      aria-hidden
      className={className}
      style={{
        width: size,
        height: size,
        ...(leaving
          ? { borderLeft: `1px solid ${color}`, borderBottom: `1px solid ${color}` }
          : { borderLeft: `1px solid ${color}`, borderTop: `1px solid ${color}` }),
        ...style,
      }}
    />
  );
}
