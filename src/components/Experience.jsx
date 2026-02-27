import { useState } from 'react'
import { experience } from '../data/portfolio'

const tagMap = { 'Full-time': 'tag-lime', 'Internship': 'tag-indigo' }

export default function Experience() {
  const [open, setOpen] = useState(0)

  return (
    <section id="experience" className="section section-dark">
      <div className="container">
        <div className="reveal">
          <div className="sec-label">02 — Work History</div>
          <h2 className="sec-title">Experience<br /><em>Changelog</em></h2>
        </div>

        {/* Timeline */}
        <div style={{ position: 'relative' }}>
          {/* Vertical line */}
          <div style={{
            position: 'absolute', left: 0, top: 0, bottom: 0, width: 1,
            background: 'linear-gradient(to bottom, var(--lime), rgba(200,255,0,0.1), transparent)',
          }} />

          <div style={{ paddingLeft: 32, display: 'flex', flexDirection: 'column', gap: 2 }}>
            {experience.map((job, i) => (
              <div key={job.company} className={`reveal r${i + 1}`} style={{ position: 'relative' }}>
                {/* Timeline dot */}
                <div style={{
                  position: 'absolute', left: -36, top: 28,
                  width: 10, height: 10, borderRadius: '50%',
                  background: open === i ? job.color : 'var(--surface3)',
                  border: `1px solid ${open === i ? job.color : 'var(--border)'}`,
                  transition: 'all 0.3s',
                  boxShadow: open === i ? `0 0 12px ${job.color}60` : 'none',
                }} />

                {/* Card */}
                <div
                  className="hoverable"
                  onClick={() => setOpen(open === i ? -1 : i)}
                  style={{
                    background: open === i ? 'var(--surface2)' : 'transparent',
                    border: `1px solid ${open === i ? job.color + '30' : 'var(--border)'}`,
                    padding: '24px 28px', cursor: 'pointer',
                    transition: 'all 0.3s', marginBottom: 2,
                    borderLeft: `3px solid ${open === i ? job.color : 'transparent'}`,
                  }}
                >
                  {/* Header */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <span className={`tag ${tagMap[job.type]}`}>{job.badge}</span>
                        <span style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: 10, color: 'var(--muted)', letterSpacing: '0.08em',
                        }}>
                          {job.period}
                        </span>
                      </div>
                      <div>
                        <div style={{
                          fontFamily: "'Instrument Serif', serif",
                          fontSize: 22, color: '#fff', marginBottom: 2,
                        }}>
                          {job.role}
                        </div>
                        <div style={{ fontSize: 13, color: 'var(--muted)' }}>
                          {job.company} · {job.location}
                        </div>
                      </div>
                    </div>

                    {/* Impact pills */}
                    <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', justifyContent: 'flex-end', maxWidth: 280 }}>
                      {job.impact.map((m) => (
                        <span key={m} style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: 10, padding: '3px 10px',
                          background: job.color + '14', border: `1px solid ${job.color}30`,
                          color: job.color, letterSpacing: '0.06em',
                          borderRadius: 2,
                        }}>{m}</span>
                      ))}
                    </div>
                  </div>

                  {/* Expandable details */}
                  <div style={{
                    maxHeight: open === i ? 500 : 0, overflow: 'hidden',
                    transition: 'max-height 0.45s cubic-bezier(0.16,1,0.3,1)',
                  }}>
                    <div style={{ borderTop: `1px solid ${job.color}20`, marginTop: 20, paddingTop: 20 }}>
                      {job.highlights.map((h, j) => (
                        <div key={j} style={{
                          display: 'flex', gap: 16, padding: '10px 0',
                          borderBottom: '1px solid var(--border)',
                        }}>
                          <div style={{
                            fontFamily: "'JetBrains Mono', monospace",
                            fontSize: 11, color: job.color, flexShrink: 0,
                            minWidth: 70, paddingTop: 1,
                          }}>
                            {h.metric}
                          </div>
                          <div style={{ fontSize: 13, color: '#8080a0', lineHeight: 1.7 }}>{h.desc}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Expand hint */}
                  {open !== i && (
                    <div style={{
                      marginTop: 12, fontSize: 11, color: 'var(--muted)',
                      fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.08em',
                    }}>
                      → click to expand
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
