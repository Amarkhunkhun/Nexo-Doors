// Shared bits for the home-page direction explorations.
// Striped image placeholders with a monospace caption (swap for real photos later).

function Placeholder({ label, dark, accent, style }) {
  const base = dark
    ? { bg: "#0d0d0d", stripe: "rgba(255,255,255,0.045)", text: "rgba(255,255,255,0.55)" }
    : { bg: "#f3f1ee", stripe: "rgba(0,0,0,0.035)", text: "rgba(0,0,0,0.42)" };
  const line = accent ? "#d96a2a" : base.text;
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        background: `repeating-linear-gradient(135deg, ${base.bg}, ${base.bg} 14px, ${base.stripe} 14px, ${base.stripe} 28px)`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        ...style,
      }}
    >
      <span
        style={{
          fontFamily: "'Spline Sans Mono', ui-monospace, monospace",
          fontSize: 12,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: line,
          background: dark ? "rgba(0,0,0,0.35)" : "rgba(255,255,255,0.6)",
          padding: "6px 12px",
          borderRadius: 2,
          backdropFilter: "blur(2px)",
        }}
      >
        {label}
      </span>
    </div>
  );
}

window.Placeholder = Placeholder;
