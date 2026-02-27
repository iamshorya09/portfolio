import { useEffect, useState } from 'react'
import GridCanvas from './GridCanvas'
import { personal } from '../data/portfolio'

const roles = ['Product Manager', 'Growth Strategist', 'Business Analyst', 'PM — SaaS']

export default function Hero({ onResume }) {
  const [roleIdx, setRoleIdx] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const id = setInterval(() => {
      setVisible(false)
      setTimeout(() => { setRoleIdx((i) => (i + 1) % roles.length); setVisible(true) }, 350)
    }, 2600)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="hero" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      padding: '100px 64px 80px', position: 'relative', overflow: 'hidden',
    }}>
      <GridCanvas />

      {/* Noise grain */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.025'/%3E%3C/svg%3E")`,
        backgroundSize: '200px', opacity: 0.6,
      }} />

      {/* Gradient vignette */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse at 20% 50%, rgba(200,255,0,0.04) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(129,140,248,0.04) 0%, transparent 50%)',
      }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 780 }}>
        {/* Status badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          background: 'var(--surface2)', border: '1px solid var(--border)',
          padding: '6px 14px', borderRadius: 100, marginBottom: 36,
          animation: 'fadeIn 0.6s 0.1s both',
        }}>
          <div style={{
            width: 7, height: 7, borderRadius: '50%', background: 'var(--lime)',
            animation: 'blink 1.8s ease-in-out infinite',
          }} />
          <span style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 11, color: 'var(--muted)', letterSpacing: '0.08em',
          }}>
            Open to PM / Growth / Strategy roles
          </span>
        </div>

        {/* Name */}
        <h1 style={{
          fontFamily: "'Instrument Serif', serif",
          fontSize: 'clamp(52px, 8.5vw, 110px)',
          fontWeight: 400, lineHeight: 1, letterSpacing: '-2px',
          color: '#fff', marginBottom: 16,
          animation: 'fadeUp 0.85s 0.25s both',
        }}>
          Shorya<br />
          <span style={{ color: 'var(--lime)', fontStyle: 'italic' }}>Pratap</span><br />
          Singh
        </h1>

        {/* Rotating role */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 12, marginBottom: 32,
          animation: 'fadeUp 0.85s 0.4s both',
        }}>
          <div style={{
            width: 32, height: 1,
            background: 'linear-gradient(90deg, var(--lime), transparent)',
          }} />
          <span style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 14, color: 'var(--lime)', letterSpacing: '0.06em',
            transition: 'opacity 0.3s, transform 0.3s',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(-8px)',
            display: 'inline-block',
          }}>
            {roles[roleIdx]}
          </span>
        </div>

        {/* Bio */}
        <p style={{
          maxWidth: 520, fontSize: 15, lineHeight: 1.9, color: '#6b6b8a',
          marginBottom: 44, animation: 'fadeUp 0.85s 0.55s both',
          borderLeft: '2px solid var(--lime-border)', paddingLeft: 18,
        }}>
          {personal.bio}
        </p>

        {/* CTA row */}
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', animation: 'fadeUp 0.85s 0.7s both' }}>
          <a href="#cases" className="btn btn-lime">View Case Studies →</a>
          <button onClick={onResume} className="btn btn-outline">↓ Download Resume</button>
          <a href="#contact" className="btn btn-outline">Get in Touch</a>
        </div>
      </div>

      {/* Floating metric cards */}
      <div style={{
        position: 'absolute', right: 64, top: '50%', transform: 'translateY(-50%)',
        display: 'flex', flexDirection: 'column', gap: 12,
        animation: 'fadeIn 1s 1s both',
      }}>
        {[
          { n: '22%→7%', l: 'Drop-offs' },
          { n: '27%↑', l: 'Adoption' },
          { n: '3', l: 'Companies' },
        ].map((m) => (
          <div key={m.l} style={{
            background: 'var(--surface2)', border: '1px solid var(--border)',
            padding: '16px 20px', minWidth: 140, textAlign: 'right',
            animation: 'float 3s ease-in-out infinite',
          }}>
            <div style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: 28, color: 'var(--lime)', lineHeight: 1,
            }}>{m.n}</div>
            <div style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 10, color: 'var(--muted)', letterSpacing: '0.12em',
              textTransform: 'uppercase', marginTop: 4,
            }}>{m.l}</div>
          </div>
        ))}
      </div>

      {/* Scroll cue */}
      <div style={{
        position: 'absolute', bottom: 32, left: 64,
        display: 'flex', alignItems: 'center', gap: 12,
        animation: 'fadeIn 1s 1.3s both',
      }}>
        <div style={{ width: 1, height: 32, background: 'linear-gradient(to bottom, var(--lime), transparent)' }} />
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: 'var(--muted)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
          scroll
        </span>
      </div>
    </section>
  )
}
