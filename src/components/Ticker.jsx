const items = [
  'Product Roadmapping', 'SQL & Analytics', 'PRD Writing', 'Stakeholder Alignment',
  'A/B Testing', 'GTM Strategy', 'Funnel Optimisation', 'OKR Setting',
  'Scrum & Agile', 'User Research', 'KPI Dashboards', 'Competitive Analysis',
]

export default function Ticker() {
  const doubled = [...items, ...items]
  return (
    <div style={{
      overflow: 'hidden', borderBottom: '1px solid var(--border)',
      padding: '12px 0', background: 'var(--bg2)',
    }}>
      <div style={{
        display: 'flex', gap: 48, whiteSpace: 'nowrap',
        animation: 'marquee 28s linear infinite', width: 'max-content',
      }}>
        {doubled.map((item, i) => (
          <span key={i} style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 11, color: 'var(--muted)', letterSpacing: '0.1em',
            display: 'flex', alignItems: 'center', gap: 20,
          }}>
            {item}
            <span style={{ color: 'var(--lime)', fontSize: 8 }}>◆</span>
          </span>
        ))}
      </div>
    </div>
  )
}
