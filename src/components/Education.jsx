import { education, achievements } from '../data/portfolio'

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <div className="reveal">
          <div className="sec-label">05 — Background</div>
          <h2 className="sec-title">Education &<br /><em>Achievements</em></h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64 }}>
          {/* Education */}
          <div>
            <div style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 10, color: 'var(--muted)', letterSpacing: '0.18em', textTransform: 'uppercase',
              marginBottom: 20,
            }}>Academic</div>
            {education.map((e, i) => (
              <div
                key={i}
                className={`reveal r${i + 1} hoverable`}
                style={{
                  display: 'flex', gap: 20, alignItems: 'center',
                  padding: '20px 24px', marginBottom: 2,
                  background: 'var(--surface)', border: '1px solid var(--border)',
                  transition: 'all 0.25s',
                }}
                onMouseEnter={(el) => { el.currentTarget.style.borderColor = 'var(--lime-border)'; el.currentTarget.style.transform = 'translateX(6px)' }}
                onMouseLeave={(el) => { el.currentTarget.style.borderColor = 'var(--border)'; el.currentTarget.style.transform = 'translateX(0)' }}
              >
                <div style={{
                  width: 44, height: 44, flexShrink: 0,
                  background: 'var(--surface2)', border: '1px solid var(--border)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20,
                }}>
                  {e.icon}
                </div>
                <div>
                  <div style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 10, color: 'var(--lime)', letterSpacing: '0.1em', marginBottom: 3,
                  }}>
                    {e.year}{e.score ? ` · ${e.score}` : ''}
                  </div>
                  <div style={{ fontWeight: 600, fontSize: 14, color: '#fff', marginBottom: 2 }}>{e.degree}</div>
                  <div style={{ fontSize: 12, color: 'var(--muted)' }}>{e.institute}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Achievements */}
          <div className="reveal r2">
            <div style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 10, color: 'var(--muted)', letterSpacing: '0.18em', textTransform: 'uppercase',
              marginBottom: 20,
            }}>Achievements</div>
            {achievements.map((a, i) => (
              <div key={i} style={{
                padding: '20px 0', borderBottom: '1px solid var(--border)',
              }}>
                <div style={{ fontWeight: 600, fontSize: 14, color: '#fff', marginBottom: 6, display: 'flex', gap: 10 }}>
                  <span style={{ color: 'var(--lime)', fontSize: 12 }}>✦</span>
                  {a.title}
                </div>
                <div style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.7, paddingLeft: 22 }}>{a.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
