import { useRef, useState, useEffect, type CSSProperties } from 'react'
import { motion } from 'motion/react'

interface BlurTextProps {
  text: string
  delay?: number
  className?: string
  direction?: 'top' | 'bottom'
  stepDuration?: number
}

export default function BlurText({
  text,
  delay = 200,
  className = '',
  direction = 'bottom',
  stepDuration = 0.35,
}: BlurTextProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const words = text.split(' ')
  const yStart = direction === 'bottom' ? 50 : -50

  return (
    <span ref={ref} className={`inline-block ${className}`}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.25em]"
          initial={{ filter: 'blur(10px)', opacity: 0, y: yStart }}
          animate={
            inView
              ? { filter: 'blur(0px)', opacity: 1, y: 0 }
              : { filter: 'blur(10px)', opacity: 0, y: yStart }
          }
          transition={{
            duration: stepDuration * 2,
            delay: (i * delay) / 1000,
            ease: 'easeOut',
          }}
          style={{ willChange: 'filter, opacity, transform' } as CSSProperties}
        >
          {word}
        </motion.span>
      ))}
    </span>
  )
}
