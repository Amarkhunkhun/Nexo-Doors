// Direction B — "Architectural Bold"
// Big tight grotesk type, a structural grid, black blocks, orange as a sharp
// load-bearing accent. Confident, modern, architectural.

function DirectionB() {
  const W = 1360;
  const ACCENT = "#e2691f";
  const INK = "#0c0c0c";
  const mono = "'Spline Sans Mono', monospace";
  return (
    <div
      style={{
        width: W,
        background: "#fff",
        color: INK,
        fontFamily: "'Space Grotesk', sans-serif",
        overflow: "hidden",
      }}
    >
      {/* Nav */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "26px 56px",
          borderBottom: `1px solid ${INK}`,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 12, height: 12, background: ACCENT }} />
          <span style={{ fontWeight: 700, fontSize: 20, letterSpacing: "-0.02em", textTransform: "uppercase" }}>
            Nexo Doors
          </span>
        </div>
        <div style={{ display: "flex", gap: 34, fontSize: 14, fontWeight: 500 }}>
          <span>Home</span>
          <span style={{ color: ACCENT }}>Services</span>
          <span>Contact</span>
        </div>
        <span style={{ fontFamily: mono, fontSize: 12.5 }}>BAY AREA, CA</span>
      </div>

      {/* Hero */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 560px", borderBottom: `1px solid ${INK}` }}>
        <div style={{ padding: "60px 56px 54px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div style={{ fontFamily: mono, fontSize: 12.5, letterSpacing: "0.12em" }}>
            (EST. BAY AREA) — INTERIOR · FRONT · CUSTOM
          </div>
          <h1
            style={{
              fontWeight: 700,
              fontSize: 92,
              lineHeight: 0.92,
              letterSpacing: "-0.035em",
              textTransform: "uppercase",
              margin: "40px 0 0",
            }}
          >
            Make every<br />
            entrance<br />
            <span style={{ color: ACCENT }}>mean</span> something.
          </h1>
          <div style={{ display: "flex", gap: 0, marginTop: 46 }}>
            <span style={{ background: INK, color: "#fff", padding: "18px 34px", fontSize: 14, fontWeight: 600 }}>
              Get a quote →
            </span>
            <span style={{ border: `1px solid ${INK}`, padding: "18px 34px", fontSize: 14, fontWeight: 600 }}>
              Our services
            </span>
          </div>
        </div>
        <div style={{ borderLeft: `1px solid ${INK}` }}>
          <Placeholder label="hero · statement door" dark />
        </div>
      </div>

      {/* Stat strip */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", borderBottom: `1px solid ${INK}` }}>
        {[
          ["100%", "Custom-measured"],
          ["3", "Door specialties"],
          ["SF", "Bay Area based"],
        ].map(([n, l], i) => (
          <div
            key={l}
            style={{
              padding: "30px 36px",
              borderLeft: i === 0 ? "none" : `1px solid ${INK}`,
              display: "flex",
              alignItems: "baseline",
              gap: 16,
            }}
          >
            <span style={{ fontWeight: 700, fontSize: 40, letterSpacing: "-0.03em" }}>{n}</span>
            <span style={{ fontFamily: mono, fontSize: 12, color: "#555" }}>{l}</span>
          </div>
        ))}
      </div>

      {/* Services as numbered rows */}
      <div>
        {[
          ["01", "Interior Doors", "Panel, flush, glazed and barn doors fitted to bring flow and light through the home."],
          ["02", "Front Doors", "Pivot, double and oversized entryways engineered to make the first impression."],
          ["03", "Custom Solutions", "Non-standard openings, materials and hardware — designed and built to spec."],
        ].map(([n, t, d], i) => (
          <div
            key={n}
            style={{
              display: "grid",
              gridTemplateColumns: "120px 1fr 360px 200px",
              alignItems: "center",
              gap: 24,
              padding: "30px 56px",
              borderBottom: `1px solid ${INK}`,
            }}
          >
            <span style={{ fontFamily: mono, fontSize: 14, color: ACCENT }}>{n}</span>
            <h3 style={{ fontWeight: 700, fontSize: 34, letterSpacing: "-0.02em", margin: 0, textTransform: "uppercase" }}>
              {t}
            </h3>
            <p style={{ fontSize: 14.5, lineHeight: 1.5, color: "#444", margin: 0 }}>{d}</p>
            <div style={{ height: 90 }}>
              <Placeholder label="img" />
            </div>
          </div>
        ))}
      </div>

      {/* CTA band */}
      <div
        style={{
          background: ACCENT,
          color: "#fff",
          padding: "64px 56px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h2 style={{ fontWeight: 700, fontSize: 52, letterSpacing: "-0.03em", margin: 0, textTransform: "uppercase", lineHeight: 0.95 }}>
          Ready when<br />you are.
        </h2>
        <div style={{ textAlign: "right" }}>
          <div style={{ fontFamily: mono, fontSize: 13, marginBottom: 8 }}>656·660·6396</div>
          <div style={{ fontFamily: mono, fontSize: 13 }}>nexodoors@gmail.com</div>
        </div>
      </div>
    </div>
  );
}

window.DirectionB = DirectionB;
