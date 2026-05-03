// Daylight Terminal — slides for the PM-day kickoff deck.
// 1920 × 1080. Each slide is a full-bleed component; window.SLIDES is the
// ordered array consumed by index.html.

const A = {
  bg: '#f4f1e8',
  bgPanel: 'rgba(255,255,255,0.45)',
  ink: '#1a1d1a',
  inkSoft: '#3d433d',
  inkMute: '#7a7e74',
  inkFaint: '#aaa89a',
  rule: 'rgba(20,20,15,0.12)',
  ruleSoft: 'rgba(20,20,15,0.06)',
  accent: '#1f8a3a',
  accentDim: 'rgba(31,138,58,0.10)',
  fontDisp: '"Roboto Mono", ui-monospace, Menlo, monospace',
  fontBody: '"Switzer", -apple-system, BlinkMacSystemFont, sans-serif'
};

const slideStyle = {
  width: 1920, height: 1080, position: 'relative', overflow: 'hidden',
  background: A.bg, color: A.ink, fontFamily: A.fontBody,
  display: 'grid', gridTemplateRows: '1fr 48px',
  padding: '64px 88px', fontSize: 22, lineHeight: 1.55,
  boxSizing: 'border-box'
};
const chrome = {
  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
  fontFamily: A.fontBody, fontSize: 15, letterSpacing: '0.18em',
  textTransform: 'uppercase', color: A.inkMute, fontWeight: 500
};
const brand = { display: 'flex', alignItems: 'center', gap: 12 };
const dot = { width: 9, height: 9, borderRadius: '50%', background: A.accent };
const h1 = { fontFamily: A.fontDisp, fontWeight: 400, lineHeight: 0.95, letterSpacing: '-0.025em', margin: 0, color: A.ink };
const h2 = { fontFamily: A.fontDisp, fontWeight: 400, lineHeight: 1.1, letterSpacing: '-0.015em', margin: 0, color: A.ink };
const labelEyebrow = { fontFamily: A.fontBody, fontSize: 16, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.22em', color: A.accent };

function PageNum({ idx, total, label }) {
  return (
    <div style={{
      position: 'absolute', right: 88, bottom: 72, zIndex: 5,
      fontFamily: A.fontDisp, fontSize: 14, letterSpacing: '0.22em',
      textTransform: 'uppercase', fontFeatureSettings: '"tnum"',
      display: 'flex', alignItems: 'center', gap: 14
    }}>
      {label && <span style={{ color: A.inkFaint }}>{label}</span>}
      {label && <span style={{ width: 14, height: 1, background: A.rule }}></span>}
      <span style={{ color: A.accent, fontWeight: 500 }}>{String(idx).padStart(2, '0')}</span>
      <span style={{ width: 18, height: 1, background: A.rule }}></span>
      <span style={{ color: A.inkFaint }}>{String(total).padStart(2, '0')}</span>
    </div>);

}

function Slide({ idx, total, label, children, body }) {
  return (
    <div style={slideStyle} data-screen-label={`${String(idx).padStart(2, '0')} ${label}`}>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: 0, ...(body || {}) }}>
        {children}
      </div>
      <PageNum idx={idx} total={total} label={label} />
    </div>);

}

const Em = ({ children }) => <em style={{ fontStyle: 'italic', color: A.accent }}>{children}</em>;

// Plays an HLS (.m3u8) source: native in Safari, hls.js elsewhere.
function MuxVideo({ src, style, ...rest }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const v = ref.current;
    if (!v || !src) return;
    if (v.canPlayType('application/vnd.apple.mpegurl')) {
      v.src = src;
      return;
    }
    if (window.Hls && window.Hls.isSupported()) {
      const hls = new window.Hls();
      hls.loadSource(src);
      hls.attachMedia(v);
      return () => hls.destroy();
    }
  }, [src]);
  return <video ref={ref} autoPlay muted loop playsInline style={style} {...rest} />;
}

// 1 — Title
function S1Title({ idx, total }) {
  const t = window.DECK.title;
  return (
    <div style={{ ...slideStyle, padding: 0 }} data-screen-label={`${String(idx).padStart(2, '0')} Title`}>
      {/* Subtle motion behind the cream — video sits at the back, blurred,
          with the cream bg layered on top at high opacity so it whispers. */}
      <video
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260423_161253_c72b1869-400f-45ed-ac0c-52f68c2ed5bd.mp4"
        autoPlay muted loop playsInline
        style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%',
          objectFit: 'cover', filter: 'blur(28px) saturate(1.1)',
          transform: 'scale(1.12)', zIndex: 0,
        }}
      />
      <div style={{
        position: 'absolute', inset: 0, background: A.bg, opacity: 0.61, zIndex: 1,
      }}/>
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at 30% 40%, rgba(190,90,170,0.26), transparent 70%)',
        zIndex: 1, mixBlendMode: 'multiply',
      }}/>
      <div style={{
        position: 'relative', zIndex: 2, height: '100%',
        padding: '64px 88px', display: 'flex', flexDirection: 'column', justifyContent: 'center',
      }}>
        <div style={{ ...labelEyebrow, marginBottom: 28 }}>{t.kicker}</div>
      <h1 style={{ ...h1, fontSize: 220, maxWidth: '12ch' }}>
        Product AI<br /><Em>Hackathon</Em>
        <span style={{
          display: 'inline-block', width: '0.5em', height: '0.085em',
          background: A.accent, marginLeft: 12, verticalAlign: 'baseline',
          animation: 'cursor-blink 1.05s steps(1, end) infinite'
        }}></span>
      </h1>
      <div style={{ marginTop: 56, display: 'flex', gap: 88, color: A.inkMute, fontSize: 20, letterSpacing: '0.04em' }}>
        <div>
          <div style={{ fontSize: 14, letterSpacing: '0.22em', textTransform: 'uppercase', color: A.inkFaint }}>Today</div>
          <div style={{ color: A.ink, fontFamily: A.fontDisp, marginTop: 6 }}>04 May 2026</div>
        </div>
        <div>
          <div style={{ fontSize: 14, letterSpacing: '0.22em', textTransform: 'uppercase', color: A.inkFaint }}></div>
          <div style={{ color: A.ink, fontFamily: A.fontDisp, marginTop: 6 }}></div>
        </div>
        <div>
          <div style={{ fontSize: 14, letterSpacing: '0.22em', textTransform: 'uppercase', color: A.inkFaint }}></div>
          <div style={{ color: A.ink, fontFamily: A.fontDisp, marginTop: 6 }}></div>
        </div>
      </div>
      </div>
      <PageNum idx={idx} total={total} label="Title" />
    </div>);

}

// 2 — Why
function S2Why({ idx, total }) {
  return (
    <Slide idx={idx} total={total} label="Why">
      <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 1fr', gap: 96, alignItems: 'center', height: '100%' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img
            src="images/capability-gap.png"
            alt="Model capabilities curve climbs steeply while realized value lags far behind."
            style={{ width: '100%', height: 'auto', maxHeight: 720, objectFit: 'contain', borderRadius: 12 }} />
        </div>
        <div>
          <h2 style={{ ...h2, fontSize: 76, lineHeight: 1.35, maxWidth: '18ch' }}>
            Models keep getting better. <Em>Our day-to-day hasn't caught up.</Em>
          </h2>
        </div>
      </div>
    </Slide>);

}

// 3 — Examples
function S3Examples({ idx, total }) {
  const e = window.DECK.examples;
  return (
    <Slide idx={idx} total={total} label="Examples">
      <div>
        <div style={labelEyebrow}>What to build</div>
        <h2 style={{ ...h2, fontSize: 88, marginTop: 22, maxWidth: '22ch' }}>
          {e.h} <Em>{e.sub}</Em>
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, marginTop: 56 }}>
          {e.categories.map((c, i) =>
          <div key={i} style={{
            border: `1px solid ${A.rule}`, borderRadius: 14, padding: '44px 34px',
            background: A.bgPanel, display: 'flex', flexDirection: 'column', gap: 28,
            minHeight: 540
          }}>
              <div>
                <div style={{ fontFamily: A.fontDisp, fontSize: 15, textTransform: 'uppercase', letterSpacing: '0.15em', color: A.accent }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div style={{ fontFamily: A.fontDisp, fontSize: 34, marginTop: 10, color: A.ink, letterSpacing: '-0.01em' }}>{c.type}</div>
                <div style={{ fontFamily: A.fontDisp, fontStyle: 'italic', fontSize: 18, color: A.accent, marginTop: 10 }}>{c.blurb}</div>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 24 }}>
                {c.items.map((it, j) =>
              <li key={j} style={{ fontSize: 20, color: A.inkSoft, lineHeight: 1.6, paddingLeft: 22, position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, top: '0.65em', width: 6, height: 6, borderRadius: '50%', background: A.accent }}></span>
                    <strong style={{ fontWeight: 600, color: A.ink }}>{it.name}</strong>{it.desc ? ` — ${it.desc}` : ''}
                  </li>
              )}
              </ul>
            </div>
          )}
        </div>
      </div>
    </Slide>);

}

// 4 — Tools
function S4Tools({ idx, total }) {
  const t = window.DECK.tools;
  return (
    <Slide idx={idx} total={total} label="Tools">
      <div>
        <div style={labelEyebrow}>The toolkit</div>
        <h2 style={{ ...h2, fontSize: 88, marginTop: 22 }}>
          {t.h}
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22, marginTop: 52 }}>
          {t.items.map((it, i) =>
          <div key={i} style={{
            border: `1px solid ${A.rule}`, borderRadius: 14, padding: '30px 32px',
            background: A.bgPanel, minHeight: 200,
            display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 14
          }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 14 }}>
                <span style={{ fontFamily: A.fontDisp, fontSize: 18, color: A.accent, fontStyle: 'italic' }}>{String(i + 1).padStart(2, '0')}</span>
                <div style={{ fontFamily: A.fontDisp, fontSize: 36, color: A.ink, letterSpacing: '-0.01em' }}>{it.name}</div>
              </div>
              <div style={{ fontSize: 20, color: A.inkSoft, lineHeight: 1.45 }}>{it.for}</div>
            </div>
          )}
        </div>
      </div>
    </Slide>);

}

// 5 — Demo
function S5Demo({ idx, total }) {
  const d = window.DECK.demo;
  return (
    <Slide idx={idx} total={total} label="Demo">
      <div style={{ position: 'relative' }}>
        <div style={labelEyebrow}>{d.kicker}</div>
        <h2 style={{ ...h2, fontSize: 168, marginTop: 24, maxWidth: '14ch', lineHeight: 0.98 }}>
          {d.h}
        </h2>
      </div>
    </Slide>);

}

// 6 — Schedule
function S6Schedule({ idx, total }) {
  const s = window.DECK.schedule;
  return (
    <Slide idx={idx} total={total} label="Schedule">
      <div>
        <div style={labelEyebrow}>Schedule</div>
        <h2 style={{ ...h2, fontSize: 88, marginTop: 22 }}>{s.h}</h2>
        <div style={{
          marginTop: 44, paddingTop: 32, borderTop: `1px solid ${A.rule}`,
          display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '6px 64px'
        }}>
          {s.rows.map((r, i) =>
          <React.Fragment key={i}>
              <div style={{
              fontFamily: A.fontBody, fontSize: 19, color: A.inkMute,
              padding: '20px 0', fontFeatureSettings: '"tnum"', whiteSpace: 'nowrap', fontWeight: 500
            }}>{r.time}</div>
              <div style={{
              padding: '18px 0', borderBottom: i < s.rows.length - 1 ? `1px solid ${A.ruleSoft}` : 'none',
              display: 'grid', gridTemplateColumns: '380px 1fr', alignItems: 'baseline', gap: 56
            }}>
                <div style={{
                fontFamily: A.fontDisp, fontSize: 24, letterSpacing: '-0.01em',
                color: r.checkpoint ? A.accent : A.ink,
                display: 'flex', alignItems: 'center', gap: 14
              }}>
                  {r.checkpoint &&
                <span style={{ width: 9, height: 9, borderRadius: '50%', background: A.accent, flexShrink: 0 }}></span>
                }
                  {r.title}
                </div>
                <div style={{ fontSize: 20, color: r.checkpoint ? A.accent : A.inkSoft }}>{r.desc}</div>
              </div>
            </React.Fragment>
          )}
        </div>
      </div>
    </Slide>);

}

// 7 — Rules
function S7Rules({ idx, total }) {
  const r = window.DECK.rules;
  return (
    <Slide idx={idx} total={total} label="Rules">
      <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 88, alignItems: 'center', height: '100%' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {r.items.map((it, i) =>
          <div key={i} style={{
            border: `1px solid ${A.rule}`, borderRadius: 12, padding: '34px 36px',
            background: A.bgPanel,
            display: 'grid', gridTemplateColumns: 'auto 1fr', columnGap: 32, alignItems: 'baseline'
          }}>
              <div style={{ fontFamily: A.fontDisp, fontStyle: 'italic', fontSize: 22, color: A.accent }}>{it.n}</div>
              <div>
                <div style={{ fontFamily: A.fontDisp, fontSize: 30, color: A.accent, lineHeight: 1.15, letterSpacing: '-0.01em' }}>{it.title}</div>
                <div style={{ fontSize: 18, color: A.inkSoft, lineHeight: 1.5, marginTop: 10 }}>{it.body}</div>
              </div>
            </div>
          )}
        </div>
        <div>
          <h2 style={{ ...h2, fontSize: 132, lineHeight: 1.0 }}>
            House<br />rules<Em>.</Em>
          </h2>
        </div>
      </div>
    </Slide>);

}

// 8 — Closing
function S8Close({ idx, total }) {
  const c = window.DECK.close;
  return (
    <div style={{ ...slideStyle, padding: 0 }} data-screen-label={`${String(idx).padStart(2, '0')} Close`}>
      <video
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260302_085640_276ea93b-d7da-4418-a09b-2aa5b490e838.mp4"
        autoPlay muted loop playsInline
        style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%',
          objectFit: 'cover', filter: 'blur(28px) saturate(1.15) hue-rotate(265deg)',
          transform: 'scale(1.12)', zIndex: 0
        }} />

      <div style={{
        position: 'absolute', inset: 0, background: A.bg, opacity: 0.42, zIndex: 1
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at 70% 60%, rgba(120,70,180,0.28), transparent 70%)',
        zIndex: 1, mixBlendMode: 'multiply'
      }} />
      <div style={{
        position: 'relative', zIndex: 2, height: '100%',
        padding: '64px 88px', display: 'flex', flexDirection: 'column', justifyContent: 'center'
      }}>
        <div style={labelEyebrow}>Now</div>
        <h2 style={{ ...h1, fontSize: 240, lineHeight: 0.92, marginTop: 16 }}>
          Build<br />something<br />cool<Em>!</Em>
        </h2>
        <div style={{ marginTop: 52, fontFamily: A.fontDisp, fontSize: 32, color: A.inkSoft, maxWidth: '40ch' }}>
          {c.sub}
        </div>
      </div>
      <PageNum idx={idx} total={total} label="Close" />
    </div>);

}

window.SLIDES = [S1Title, S2Why, S3Examples, S4Tools, S5Demo, S6Schedule, S7Rules, S8Close];