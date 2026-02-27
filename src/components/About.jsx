import { personal } from '../data/portfolio'

const pmTraits = [
  { icon: '◎', label: 'Data-Driven', desc: 'Every decision backed by metrics, SQL queries, and dashboards.' },
  { icon: '◈', label: 'User-Centric', desc: 'Funnel mapping, persona research, and usability validation at the core.' },
  { icon: '◆', label: 'Cross-Functional', desc: 'Aligning Product, Engineering, Sales and CS toward shared outcomes.' },
  { icon: '◉', label: 'Impact-Focused', desc: 'Measure twice, ship once. Results tracked from day one.' },
]

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="reveal">
          <div className="sec-label">01 — Profile</div>
          <h2 className="sec-title">How I think<br /><em>about products</em></h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64 }}>
          {/* Left — text */}
          <div className="reveal">
            <p style={{ fontSize: 15, lineHeight: 2, color: '#8080a0', marginBottom: 24 }}>
              {personal.bio}
            </p>
            <p style={{ fontSize: 14, lineHeight: 2, color: '#6b6b8a', marginBottom: 32, borderLeft: '2px solid var(--lime-border)', paddingLeft: 16 }}>
              "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work."
            </p>
            <div style={{ display: 'flex', gap: 12 }}>
              <a href={personal.linkedin} target="_blank" rel="noreferrer" className="btn btn-outline">LinkedIn ↗</a>
              <a href={`mailto:${personal.email}`} className="btn btn-outline">Email ↗</a>
            </div>
          </div>

          {/* Right — PM traits */}
          <div className="reveal r2">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
              {pmTraits.map((t) => (
                <div
                  key={t.label}
                  className="hoverable"
                  style={{
                    padding: '24px 20px', background: 'var(--surface)',
                    border: '1px solid var(--border)', transition: 'border-color 0.25s',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--lime-border)'}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border)'}
                >
                  <div style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 18, color: 'var(--lime)', marginBottom: 10,
                  }}>{t.icon}</div>
                  <div style={{ fontWeight: 700, fontSize: 14, color: '#fff', marginBottom: 6 }}>{t.label}</div>
                  <div style={{ fontSize: 12, color: 'var(--muted)', lineHeight: 1.7 }}>{t.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
