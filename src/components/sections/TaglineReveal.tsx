import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import type { MotionValue } from 'framer-motion'

const lines = ['Entiendo el negocio antes del código,', 'y me quedo hasta que funciona en producción.']

function Word({ word, range, progress }: { word: string; range: [number, number]; progress: MotionValue<number> }) {
  const opacity = useTransform(progress, range, [0.3, 1], { ease: (t) => 1 - Math.pow(1 - t, 3) })
  return (
    <motion.span style={{ opacity }} className="inline-block">
      {word}&nbsp;
    </motion.span>
  )
}

export function TaglineReveal() {
  const ref = useRef<HTMLParagraphElement>(null)
  // Words light up one by one as the block crosses the middle of the viewport
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.8', 'end 0.45'] })
  const words = lines.flatMap((line, li) => line.split(' ').map((w) => ({ w, li })))
  const step = 1 / words.length

  return (
    <section aria-label="Filosofía de trabajo" className="section-y border-t border-line">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p ref={ref} className="max-w-[680px] text-4xl font-semibold tracking-tight text-white md:text-6xl">
          {lines.map((line, li) => (
            <span key={line} className="block">
              {words
                .map((x, i) => ({ ...x, i }))
                .filter((x) => x.li === li)
                .map(({ w, i }) => (
                  <Word key={i} word={w} range={[i * step, (i + 1) * step]} progress={scrollYProgress} />
                ))}
            </span>
          ))}
        </p>
      </div>
    </section>
  )
}
