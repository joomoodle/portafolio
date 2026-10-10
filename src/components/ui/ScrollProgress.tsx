import { motion, useScroll, useSpring } from 'framer-motion'

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 40 })

  return <motion.div aria-hidden="true" className="fixed inset-x-0 top-0 z-[60] h-px origin-left bg-white" style={{ scaleX }} />
}
