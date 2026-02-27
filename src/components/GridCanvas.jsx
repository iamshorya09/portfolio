import { useEffect, useRef } from 'react'

export default function GridCanvas() {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas.getContext('2d')
    let t = 0, id

    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight }
    resize()
    window.addEventListener('resize', resize)

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      t += 0.008

      const W = canvas.width, H = canvas.height
      const gap = 36
      const cols = Math.ceil(W / gap) + 1
      const rows = Math.ceil(H / gap) + 1

      // Dot grid
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * gap, y = j * gap
          const dx = x - W * 0.4, dy = y - H * 0.5
          const dist = Math.sqrt(dx * dx + dy * dy)
          const wave = Math.sin(dist * 0.012 - t * 1.2) * 0.5 + 0.5
          const alpha = wave * 0.12 + 0.02
          ctx.beginPath()
          ctx.arc(x, y, 0.8, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(200,255,0,${alpha})`
          ctx.fill()
        }
      }

      // Flowing lines
      for (let k = 0; k < 4; k++) {
        ctx.beginPath()
        const yBase = H * (0.2 + k * 0.2)
        for (let x = 0; x < W; x += 3) {
          const y = yBase + Math.sin(x * 0.005 + t + k) * (20 + k * 10)
          x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
        }
        ctx.strokeStyle = `rgba(200,255,0,${0.025 - k * 0.004})`
        ctx.lineWidth = 1
        ctx.stroke()
      }

      // Abstract geometric — top right
      const cx = W * 0.88, cy = H * 0.25
      ;[120, 80, 45].forEach((r, i) => {
        ctx.beginPath()
        ctx.arc(cx, cy + Math.sin(t * 0.5 + i) * 4, r, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(200,255,0,${0.06 - i * 0.015})`
        ctx.setLineDash(i === 0 ? [6, 12] : [])
        ctx.lineWidth = 0.8
        ctx.stroke()
        ctx.setLineDash([])
      })

      // Cross
      ctx.strokeStyle = 'rgba(200,255,0,0.06)'
      ctx.lineWidth = 0.5
      ctx.beginPath(); ctx.moveTo(cx - 150, cy); ctx.lineTo(cx + 150, cy); ctx.stroke()
      ctx.beginPath(); ctx.moveTo(cx, cy - 150); ctx.lineTo(cx, cy + 150); ctx.stroke()

      id = requestAnimationFrame(draw)
    }
    draw()

    return () => { cancelAnimationFrame(id); window.removeEventListener('resize', resize) }
  }, [])

  return (
    <canvas ref={ref} style={{
      position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.8,
    }} />
  )
}
