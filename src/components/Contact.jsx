import { personal } from '../data/portfolio'

export default function Contact() {
  return (
    <section id="contact" className="section section-dark" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Grid bg */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: `linear-gradient(rgba(200,255,0,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(200,255,0,0.02) 1px, transparent 1px)`,
        backgroundSize: '48px 48px',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="reveal" style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <div className="sec-label" style={{ justifyContent: 'center' }}>06 — Let's Talk</div>

          <h2 style={{
            fontFamily: "'Instrument Serif', serif",
            fontSize: 'clamp(52px, 8vw, 96px)',
            fontWeight: 400, lineHeight: 1, letterSpacing: '-2px',
            color: '#fff', marginBottom: 20,
          }}>
            Open to<br />
            <em style={{ fontStyle: 'italic', color: 'var(--lime)' }}>great roles</em>
          </h2>

          <p style={{ fontSize: 15, color: '#6b6b8a', marginBottom: 48, lineHeight: 1.8 }}>
            Looking for PM, Growth, or Business Strategy roles where I can drive real product outcomes. Let's connect.
          </p>

          {/* Terminal card */}
          <div style={{
            background: 'var(--bg)', border: '1px solid var(--border)',
            padding: '20px 24px', marginBottom: 40, textAlign: 'left',
          }}>
            <div style={{ display: 'flex', gap: 6, marginBottom: 16 }}>
              {['#ff5f56', '#ffbd2e', '#27c93f'].map((c) => (
                <div key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c }} />
              ))}
            </div>
            {[
              { cmd: '$ whoami', out: 'Shorya Pratap Singh — Product Manager & Growth Analyst' },
              { cmd: '$ cat email.txt', out: personal.email },
              { cmd: '$ open linkedin', out: personal.linkedin },
              { cmd: '$ cat status.txt', out: '✓ Actively looking for PM / Growth / Strategy roles' },
            ].map((line, i) => (
              <div key={i} style={{ marginBottom: 6 }}>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: 'var(--lime)' }}>{line.cmd}</div>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: '#6b6b8a', paddingLeft: 16 }}>{line.out}</div>
              </div>
            ))}
            <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: 'var(--lime)' }}>$</span>
              <div style={{ width: 7, height: 14, background: 'var(--lime)', animation: 'blink 1s step-end infinite' }} />
            </div>
          </div>

          {/* CTA buttons */}
          <div className="reveal r2" style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`mailto:${personal.email}`} className="btn btn-lime">✉ Send Email</a>
            <a href={personal.linkedin} target="_blank" rel="noreferrer" className="btn btn-outline">LinkedIn ↗</a>
            <a href={`tel:${personal.phone}`} className="btn btn-outline">☎ Call</a>
          </div>
        </div>
      </div>
    </section>
  )
}
