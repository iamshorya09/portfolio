import { useEffect, useRef, useState } from 'react'
import { metrics } from '../data/portfolio'

function MetricCard({ m, delay }) {
  const [vis, setVis] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setTimeout(() => setVis(true), delay) } }, { threshold: 0.3 })
    obs.observe(ref.current)
    return () => obs.disconnect()
  }, [delay])

  return (
    <div ref={ref} className="hoverable" style={{
      flex: '1 1 0', padding: '28px 24px',
      borderRight: '1px solid var(--border)',
      transition: 'background 0.25s',
      cursor: 'default',
    }}
      onMouseEnter={(e) => e.currentTarget.style.background = 'var(--surface2)'}
      onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
    >
      <div style={{
        fontFamily: "'Instrument Serif', serif",
        fontSize: 38, color: 'var(--lime)', lineHeight: 1,
        marginBottom: 8,
        opacity: vis ? 1 : 0, transform: vis ? 'translateY(0)' : 'translateY(12px)',
        transition: 'opacity 0.5s, transform 0.5s',
      }}>
        {m.value}
      </div>
      <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 13, color: 'var(--text)', fontWeight: 500, marginBottom: 4 }}>
        {m.label}
      </div>
      <div style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 10, color: 'var(--muted)', letterSpacing: '0.1em', textTransform: 'uppercase',
      }}>
        @ {m.context}
      </div>
    </div>
  )
}

export default function Metrics() {
  return (
    <section id="metrics" style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      {/* Header */}
      <div style={{
        padding: '16px 64px', borderBottom: '1px solid var(--border)',
        display: 'flex', alignItems: 'center', gap: 16,
      }}>
        <div style={{
          width: 6, height: 6, borderRadius: '50%', background: 'var(--lime)',
          animation: 'blink 2s ease-in-out infinite',
        }} />
        <span style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 10, color: 'var(--muted)', letterSpacing: '0.18em', textTransform: 'uppercase',
        }}>
          impact_metrics.json — live results across roles
        </span>
      </div>

      {/* Metrics grid */}
      <div style={{ display: 'flex', borderBottom: '1px solid var(--border)' }}>
        {metrics.map((m, i) => (
          <MetricCard key={i} m={m} delay={i * 80} />
        ))}
      </div>
    </section>
  )
}
