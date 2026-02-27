import { useEffect, useRef } from 'react'

export default function Cursor() {
  const c = useRef(null), r = useRef(null)
  const pos = useRef({ x: 0, y: 0 }), ring = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const move = (e) => {
      pos.current = { x: e.clientX, y: e.clientY }
      if (c.current) { c.current.style.left = e.clientX + 'px'; c.current.style.top = e.clientY + 'px' }
    }
    const on = () => { c.current?.classList.add('hov'); r.current?.classList.add('hov') }
    const off = () => { c.current?.classList.remove('hov'); r.current?.classList.remove('hov') }
    document.addEventListener('mousemove', move)
    document.querySelectorAll('a,button,.hoverable').forEach((el) => { el.addEventListener('mouseenter', on); el.addEventListener('mouseleave', off) })
    let id
    const tick = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.1
      ring.current.y += (pos.current.y - ring.current.y) * 0.1
      if (r.current) { r.current.style.left = ring.current.x + 'px'; r.current.style.top = ring.current.y + 'px' }
      id = requestAnimationFrame(tick)
    }
    tick()
    return () => { document.removeEventListener('mousemove', move); cancelAnimationFrame(id) }
  }, [])

  return (<><div className="cursor" ref={c} /><div className="cursor-ring" ref={r} /></>)
}
