// Direction A — "Editorial Luxury"
// High-contrast serif headlines (Cormorant), airy white space, hairline rules,
// orange used only as a thin accent. Magazine-like, restrained, premium.

function DirectionA() {
  const W = 1360;
  const ACCENT = "#d96a2a";
  const INK = "#111110";
  const s = {
    page: {
      width: W,
      background: "#ffffff",
      color: INK,
      fontFamily: "'Work Sans', sans-serif",
      overflow: "hidden",
    },
    nav: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "34px 64px",
      borderBottom: "1px solid #ece9e4",
    },
    wordmark: {
      fontFamily: "'Cormorant Garamond', serif",
      fontWeight: 600,
      fontSize: 26,
      letterSpacing: "0.16em",
      textTransform: "uppercase",
    },
    navlinks: { display: "flex", gap: 38, fontSize: 14, letterSpacing: "0.04em", color: "#56524c" },
  };
  const navlink = { cursor: "default" };
  return (
    <div style={s.page}>
      {/* Nav */}
      <div style={s.nav}>
        <div style={s.wordmark}>
          Nexo<span style={{ color: ACCENT }}>.</span>Doors
        </div>
        <div style={s.navlinks}>
          <span style={navlink}>Home</span>
          <span style={navlink}>Services</span>
          <span style={navlink}>Contact</span>
        </div>
        <div
          style={{
            fontFamily: "'Spline Sans Mono', monospace",
            fontSize: 12.5,
            letterSpacing: "0.05em",
            color: INK,
          }}
        >
          656·660·6396
        </div>
      </div>

      {/* Hero */}
      <div style={{ display: "grid", gridTemplateColumns: "1.05fr 0.95fr" }}>
        <div style={{ padding: "92px 64px 88px" }}>
          <div
            style={{
              fontFamily: "'Spline Sans Mono', monospace",
              fontSize: 12.5,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: ACCENT,
              marginBottom: 30,
            }}
          >
            Bay Area · Door Specialists
          </div>
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 500,
              fontSize: 78,
              lineHeight: 0.98,
              letterSpacing: "-0.01em",
              margin: "0 0 28px",
            }}
          >
            Doors that make a house feel{" "}
            <span style={{ fontStyle: "italic", color: ACCENT }}>alive</span>.
          </h1>
          <p
            style={{
              fontSize: 17,
              lineHeight: 1.6,
              color: "#56524c",
              maxWidth: 440,
              margin: "0 0 40px",
            }}
          >
            Interior doors, statement entryways, and fully custom solutions —
            measured, crafted, and installed for Bay Area homes.
          </p>
          <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
            <span
              style={{
                background: INK,
                color: "#fff",
                padding: "16px 30px",
                fontSize: 14,
                letterSpacing: "0.04em",
              }}
            >
              Request a consultation
            </span>
            <span style={{ fontSize: 14, color: INK, borderBottom: `1px solid ${ACCENT}`, paddingBottom: 3 }}>
              View our work
            </span>
          </div>
        </div>
        <div style={{ height: 620, borderLeft: "1px solid #ece9e4" }}>
          <Placeholder label="hero · front-door install" />
        </div>
      </div>

      {/* Services */}
      <div style={{ borderTop: "1px solid #ece9e4", padding: "70px 64px 30px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 46 }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500, fontSize: 40, margin: 0 }}>
            What we do
          </h2>
          <span style={{ fontFamily: "'Spline Sans Mono', monospace", fontSize: 12, color: "#9a958d", letterSpacing: "0.1em" }}>
            (03)
          </span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 1, background: "#ece9e4" }}>
          {[
            ["01", "Interior Doors", "Panel, flush and glazed doors that bring rhythm and light through the home."],
            ["02", "Front Doors", "Entryways that set the tone — pivot, double and statement front doors."],
            ["03", "Custom Solutions", "Bespoke sizing, materials and hardware designed around your space."],
          ].map(([n, t, d]) => (
            <div key={n} style={{ background: "#fff", padding: "34px 30px 40px" }}>
              <div style={{ height: 150, marginBottom: 24 }}>
                <Placeholder label={`${t.toLowerCase()}`} />
              </div>
              <div style={{ fontFamily: "'Spline Sans Mono', monospace", fontSize: 12, color: ACCENT, marginBottom: 10 }}>
                {n}
              </div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: 26, margin: "0 0 10px" }}>
                {t}
              </h3>
              <p style={{ fontSize: 14.5, lineHeight: 1.55, color: "#56524c", margin: 0 }}>{d}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Closing band */}
      <div style={{ padding: "76px 64px 84px", textAlign: "center" }}>
        <h2
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 500,
            fontSize: 48,
            margin: "0 auto 22px",
            maxWidth: 720,
            lineHeight: 1.05,
          }}
        >
          Let's talk about the doors your home deserves.
        </h2>
        <span style={{ background: ACCENT, color: "#fff", padding: "16px 32px", fontSize: 14, letterSpacing: "0.04em" }}>
          nexodoors@gmail.com
        </span>
      </div>
    </div>
  );
}

window.DirectionA = DirectionA;
