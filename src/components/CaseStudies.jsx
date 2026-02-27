import { caseStudies, caseFramework } from '../data/portfolio'

function CaseCard({ cs, i }) {
  return (
    <div
      className={`reveal r${i + 1} hoverable`}
      style={{
        background: 'var(--surface)', border: '1px solid var(--border)',
        padding: '40px 36px', position: 'relative', overflow: 'hidden',
        transition: 'border-color 0.3s, transform 0.3s',
      }}
      onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(200,255,0,0.25)'; e.currentTarget.style.transform = 'translateY(-3px)' }}
      onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateY(0)' }}
    >
      {/* Top accent line */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg, var(--lime), transparent)' }} />

      {/* Case number watermark */}
      <div style={{
        position: 'absolute', right: 24, top: 20,
        fontFamily: "'Instrument Serif', serif",
        fontSize: 80, fontWeight: 400, color: 'var(--surface2)',
        lineHeight: 1, userSelect: 'none', pointerEvents: 'none',
      }}>
        {cs.id}
      </div>

      <span className="tag tag-lime" style={{ marginBottom: 20, display: 'inline-block' }}>{cs.tag}</span>

      <h3 style={{
        fontFamily: "'Instrument Serif', serif",
        fontSize: 28, color: '#fff', marginBottom: 16, lineHeight: 1.2,
      }}>
        {cs.title}
      </h3>

      {/* Problem statement */}
      <div style={{
        background: 'var(--surface2)', border: '1px solid var(--border)',
        padding: '12px 16px', marginBottom: 24, borderLeft: '3px solid var(--lime)',
      }}>
        <div style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 9, color: 'var(--lime)', letterSpacing: '0.15em', textTransform: 'uppercase',
          marginBottom: 4,
        }}>Problem Statement</div>
        <div style={{ fontSize: 13, color: '#8080a0', lineHeight: 1.6 }}>{cs.problem}</div>
      </div>

      {/* Approach */}
      <div style={{ marginBottom: 24 }}>
        <div style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 9, color: 'var(--muted)', letterSpacing: '0.15em', textTransform: 'uppercase',
          marginBottom: 12,
        }}>Key Approach</div>
        {cs.approach.map((a, j) => (
          <div key={j} style={{
            display: 'flex', gap: 12, fontSize: 13, color: '#8080a0',
            padding: '7px 0', borderBottom: '1px solid var(--border)', lineHeight: 1.6,
          }}>
            <span style={{ color: 'var(--lime)', flexShrink: 0, fontSize: 10 }}>▸</span>
            {a}
          </div>
        ))}
      </div>

      {/* Framework used */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, color: 'var(--muted)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 4 }}>
            Framework Used
          </div>
          <div style={{ fontSize: 12, color: 'var(--indigo)' }}>{cs.framework}</div>
        </div>
        <a href={cs.link} style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 11, color: 'var(--lime)', textDecoration: 'none',
          border: '1px solid var(--lime-border)', padding: '8px 16px',
          transition: 'background 0.2s',
        }}
          onMouseEnter={(e) => e.currentTarget.style.background = 'var(--lime-dim)'}
          onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
        >
          Full Case Study →
        </a>
      </div>
    </div>
  )
}

export default function CaseStudies() {
  return (
    <section id="cases" className="section section-dark">
      <div className="container">
        <div className="reveal">
          <div className="sec-label">04 — Portfolio</div>
          <h2 className="sec-title">Case<br /><em>Studies</em></h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 32 }}>
          {caseStudies.map((cs, i) => <CaseCard key={cs.id} cs={cs} i={i} />)}
        </div>

        {/* Framework card */}
        <div className="reveal" style={{
          background: 'var(--bg)', border: '1px dashed var(--border)',
          padding: '24px 28px', display: 'flex', gap: 32, alignItems: 'center', flexWrap: 'wrap',
        }}>
          <div style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 10, color: 'var(--muted)', letterSpacing: '0.15em', textTransform: 'uppercase',
            minWidth: 140,
          }}>
            Case Study Structure
          </div>
          <div style={{ display: 'flex', gap: 0, flex: 1, flexWrap: 'wrap' }}>
            {caseFramework.map((f, i) => (
              <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{
                  fontSize: 12, color: '#8080a0', padding: '4px 12px',
                  background: 'var(--surface2)', border: '1px solid var(--border)',
                }}>{i + 1}. {f}</span>
                {i < caseFramework.length - 1 && (
                  <span style={{ color: 'var(--muted)', fontSize: 10 }}>→</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
