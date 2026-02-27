export default function Footer() {
  return (
    <footer style={{
      padding: '24px 64px', borderTop: '1px solid var(--border)',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    }}>
      <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: 'var(--muted)' }}>
        © 2025 Shorya Pratap Singh
      </span>
      <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: 'var(--muted)' }}>
        Built with React + Vite · Deployed on Vercel
      </span>
      <a href="#hero" style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 11, color: 'var(--lime)', textDecoration: 'none',
      }}>
        ↑ top
      </a>
    </footer>
  )
}
