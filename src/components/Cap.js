// Harbour Ink Engraved primitive.
// Condensed caption text; letter-spacing scales with size (tighter as it gets bigger).
export default function Cap({ children, size = 13, color, className = "", style }) {
  return (
    <span
      className={`font-cap ${className}`}
      style={{
        fontSize: `${size}px`,
        letterSpacing: `${(0.22 - size * 0.009).toFixed(3)}em`,
        color,
        ...style,
      }}
    >
      {children}
    </span>
  );
}
