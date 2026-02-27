import { useState } from 'react'
import { pmStack, tools } from '../data/portfolio'

const catColors = { 'tag-lime': 'var(--lime)', 'tag-indigo': 'var(--indigo)', 'tag-green': 'var(--green)', 'tag-orange': 'var(--orange)' }
const tagClasses = ['tag-lime', 'tag-indigo', 'tag-green', 'tag-orange']

export default function Skills() {
  const [hov, setHov] = useState(null)

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="reveal">
          <div className="sec-label">03 — Capabilities</div>
          <h2 className="sec-title">The PM<br /><em>Stack</em></h2>
        </div>

        {/* 4 quadrant grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2, marginBottom: 64 }}>
          {pmStack.map((cat, i) => (
            <div
              key={cat.category}
              className={`reveal r${i + 1} hoverable`}
              style={{
                padding: '36px 32px',
                background: hov === i ? 'var(--surface2)' : 'var(--surface)',
                border: `1px solid ${hov === i ? cat.color + '35' : 'var(--border)'}`,
                transition: 'all 0.25s', cursor: 'default',
              }}
              onMouseEnter={() => setHov(i)}
              onMouseLeave={() => setHov(null)}
            >
              {/* Category header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
                <span style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 20, color: cat.color,
                }}>{cat.icon}</span>
                <div>
                  <div style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: 15, fontWeight: 700, color: '#fff',
                  }}>{cat.category}</div>
                </div>
              </div>

              {/* Skills list */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                {cat.items.map((item, j) => (
                  <div key={item} style={{
                    display: 'flex', alignItems: 'center', gap: 12,
                    padding: '9px 0',
                    borderBottom: j < cat.items.length - 1 ? '1px solid var(--border)' : 'none',
                    fontSize: 13, color: '#8080a0',
                    transition: 'color 0.2s',
                  }}>
                    <div style={{
                      width: 4, height: 4, borderRadius: '50%',
                      background: cat.color, opacity: 0.6, flexShrink: 0,
                    }} />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tools */}
        <div className="reveal" style={{
          background: 'var(--surface)', border: '1px solid var(--border)', padding: '28px 32px',
        }}>
          <div style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 10, color: 'var(--muted)', letterSpacing: '0.18em', textTransform: 'uppercase',
            marginBottom: 20,
          }}>
            tools & platforms
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {tools.map((t) => {
              const catIndex = ['PM', 'Analytics', 'Design', 'GTM', 'Automation'].indexOf(t.cat)
              const tagClass = tagClasses[catIndex >= 0 ? catIndex % 4 : 0]
              return (
                <span
                  key={t.name}
                  className={`tag ${tagClass} hoverable`}
                  style={{ cursor: 'default', fontSize: 11, padding: '5px 12px' }}
                >
                  {t.name}
                </span>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
