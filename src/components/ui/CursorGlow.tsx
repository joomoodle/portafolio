import { useEffect, useRef } from 'react'

export function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return
    const el = glowRef.current
    if (!el) return

    let raf: number
    let tx = 0, ty = 0, cx = 0, cy = 0

    const onMove = (e: MouseEvent) => { tx = e.clientX; ty = e.clientY }
    const animate = () => {
      cx += (tx - cx) * 0.07
      cy += (ty - cy) * 0.07
      el.style.transform = `translate(${cx - 300}px, ${cy - 300}px)`
      raf = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMove)
    raf = requestAnimationFrame(animate)
    return () => { window.removeEventListener('mousemove', onMove); cancelAnimationFrame(raf) }
  }, [])

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-0 w-[600px] h-[600px] rounded-full"
      style={{
        background: 'radial-gradient(circle, rgba(34,197,94,0.05) 0%, transparent 70%)',
        willChange: 'transform',
      }}
    />
  )
}
