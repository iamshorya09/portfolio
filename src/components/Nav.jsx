import { useState, useEffect } from 'react'

const links = [
  { id: 'metrics', label: 'Impact' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'cases', label: 'Case Studies' },
  { id: 'contact', label: 'Contact' },
]

export default function Nav({ onResume }) {
  const [active, setActive] = useState('')
  const [top, setTop] = useState(true)

  useEffect(() => {
    const s = () => {
      setTop(window.scrollY < 40)
      let cur = ''
      links.forEach(({ id }) => { const el = document.getElementById(id); if (el && window.scrollY >= el.offsetTop - 140) cur = id })
      setActive(cur)
    }
    window.addEventListener('scroll', s)
    return () => window.removeEventListener('scroll', s)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, width: '100%', zIndex: 200,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 64px', height: 60,
      background: top ? 'transparent' : 'rgba(4,4,10,0.88)',
      backdropFilter: top ? 'none' : 'blur(24px)',
      borderBottom: top ? '1px solid transparent' : '1px solid rgba(255,255,255,0.04)',
      transition: 'all 0.35s ease',
    }}>
      {/* Logo */}
      <a href="#hero" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{
          width: 28, height: 28, background: 'var(--lime)', display: 'flex',
          alignItems: 'center', justifyContent: 'center',
          fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: 12, color: '#04040a',
        }}>S</div>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: 'var(--muted)', letterSpacing: '0.05em' }}>
          shorya.ps
        </span>
      </a>

      {/* Links */}
      <ul style={{ display: 'flex', gap: 2, listStyle: 'none' }}>
        {links.map(({ id, label }) => (
          <li key={id}>
            <a href={`#${id}`} style={{
              display: 'block', padding: '6px 14px',
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 12, fontWeight: 500,
              color: active === id ? 'var(--lime)' : 'var(--muted)',
              textDecoration: 'none', transition: 'color 0.2s',
              background: active === id ? 'var(--lime-dim)' : 'transparent',
              borderRadius: 4,
            }}>
              {label}
            </a>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <button onClick={onResume} className="btn btn-lime" style={{ padding: '8px 18px', fontSize: 11 }}>
        ↓ Resume
      </button>
    </nav>
  )
}
