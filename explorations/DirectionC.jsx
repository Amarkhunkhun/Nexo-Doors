// Direction C — "Warm Premium"
// Full-bleed dark hero imagery, elegant serif + clean sans, warmer palette,
// orange more present. Inviting, cinematic, craftsman-luxury.

function DirectionC() {
  const W = 1360;
  const ACCENT = "#dd7333";
  const INK = "#15120f";
  const serif = "'Cormorant Garamond', serif";
  const sans = "'Work Sans', sans-serif";
  return (
    <div style={{ width: W, background: "#faf8f5", color: INK, fontFamily: sans, overflow: "hidden" }}>
      {/* Hero — full bleed dark */}
      <div style={{ position: "relative", height: 660, color: "#fff" }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <Placeholder label="hero · warm interior, oak door" dark />
        </div>
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, rgba(10,8,6,0.55) 0%, rgba(10,8,6,0.2) 40%, rgba(10,8,6,0.78) 100%)",
          }}
        />
        {/* nav over hero */}
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "32px 60px",
          }}
        >
          <span style={{ fontFamily: serif, fontSize: 25, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase" }}>
            Nexo Doors
          </span>
          <div style={{ display: "flex", gap: 36, fontSize: 14, letterSpacing: "0.04em" }}>
            <span>Home</span>
            <span>Services</span>
            <span>Contact</span>
          </div>
          <span
            style={{
              border: "1px solid rgba(255,255,255,0.5)",
              padding: "10px 20px",
              fontSize: 13,
              letterSpacing: "0.04em",
            }}
          >
            656·660·6396
          </span>
        </div>
        {/* hero copy */}
        <div style={{ position: "absolute", left: 60, bottom: 70, right: 60 }}>
          <div
            style={{
              fontFamily: "'Spline Sans Mono', monospace",
              fontSize: 12.5,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: ACCENT,
              marginBottom: 22,
            }}
          >
            Bay Area Door Specialists
          </div>
          <h1 style={{ fontFamily: serif, fontWeight: 500, fontSize: 88, lineHeight: 0.98, margin: 0, maxWidth: 900 }}>
            Bring your home <span style={{ fontStyle: "italic", color: ACCENT }}>to life</span>,<br />
            one door at a time.
          </h1>
          <div style={{ display: "flex", gap: 16, marginTop: 34 }}>
            <span style={{ background: ACCENT, color: "#fff", padding: "16px 30px", fontSize: 14, letterSpacing: "0.03em" }}>
              Start your project
            </span>
            <span
              style={{
                background: "rgba(255,255,255,0.12)",
                backdropFilter: "blur(4px)",
                border: "1px solid rgba(255,255,255,0.4)",
                color: "#fff",
                padding: "16px 30px",
                fontSize: 14,
              }}
            >
              Explore services
            </span>
          </div>
        </div>
      </div>

      {/* Intro line */}
      <div style={{ padding: "76px 60px 52px", display: "grid", gridTemplateColumns: "0.8fr 1.2fr", gap: 50, alignItems: "start" }}>
        <h2 style={{ fontFamily: serif, fontWeight: 500, fontSize: 34, lineHeight: 1.15, margin: 0 }}>
          A door is the first thing your home says.
        </h2>
        <p style={{ fontSize: 16.5, lineHeight: 1.7, color: "#5a534b", margin: 0, maxWidth: 560 }}>
          We help Bay Area homeowners replace and reimagine their doors — from warm interior
          passages to commanding entryways, and fully custom builds when the space calls for
          something of its own. Measured precisely, installed cleanly, made to last.
        </p>
      </div>

      {/* Services — overlapping warm cards */}
      <div style={{ padding: "10px 60px 80px", display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 26 }}>
        {[
          ["Interior Doors", "Panel, flush and glazed doors that carry light and calm through the home."],
          ["Front Doors", "Statement entryways in wood, glass and steel that welcome you home."],
          ["Custom Solutions", "Bespoke doors built around odd openings, rare materials and your taste."],
        ].map(([t, d]) => (
          <div key={t} style={{ background: "#fff", boxShadow: "0 20px 50px -30px rgba(40,25,10,0.4)" }}>
            <div style={{ height: 220 }}>
              <Placeholder label={t.toLowerCase()} accent />
            </div>
            <div style={{ padding: "26px 26px 30px" }}>
              <h3 style={{ fontFamily: serif, fontWeight: 600, fontSize: 27, margin: "0 0 10px" }}>{t}</h3>
              <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "#5a534b", margin: "0 0 16px" }}>{d}</p>
              <span style={{ fontSize: 13, color: ACCENT, letterSpacing: "0.04em", borderBottom: `1px solid ${ACCENT}`, paddingBottom: 3 }}>
                Learn more →
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div style={{ background: INK, color: "#fff", padding: "72px 60px", textAlign: "center" }}>
        <h2 style={{ fontFamily: serif, fontWeight: 500, fontSize: 46, margin: "0 0 18px", lineHeight: 1.05 }}>
          Tell us what you're imagining.
        </h2>
        <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 15.5, margin: "0 0 30px" }}>
          Send us a note about your space and we'll be in touch.
        </p>
        <span style={{ background: ACCENT, color: "#fff", padding: "16px 34px", fontSize: 14, letterSpacing: "0.03em" }}>
          nexodoors@gmail.com
        </span>
      </div>
    </div>
  );
}

window.DirectionC = DirectionC;
