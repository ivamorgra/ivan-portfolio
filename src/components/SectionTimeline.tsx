import { useEffect, useRef, useState } from 'react'

const sections = [
  { id: 'who-i-am', label: 'WHO I AM', theme: 'light' },
  {
    id: 'how-i-approach-things',
    label: 'HOW I APPROACH THINGS',
    theme: 'dark',
  },
  { id: 'experience', label: 'EXPERIENCE', theme: 'light' },
  {
    id: 'what-im-exploring',
    label: "WHAT I'M EXPLORING",
    theme: 'dark',
  },
  {
    id: 'what-ive-built',
    label: "WHAT I'VE BUILT",
    theme: 'light',
  },
  {
    id: 'whats-next',
    label: "WHAT'S NEXT",
    theme: 'dark',
  },
] as const

function SectionTimeline() {
  const [activeSection, setActiveSection] = useState('')
  const [visible, setVisible] = useState(false)
  const [showLabels, setShowLabels] = useState(false)
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  const hideLabelsTimeout = useRef<ReturnType<typeof setTimeout> | null>(
    null,
  )

  useEffect(() => {
    const handleScroll = () => {
      const whoIAm = document.getElementById('who-i-am')

      if (!whoIAm) return

      /*
       * Show the timeline once Who I Am starts entering
       * the viewport.
       */
      const whoIAmRect = whoIAm.getBoundingClientRect()

      setVisible(whoIAmRect.top <= window.innerHeight * 0.65)

      /*
       * Show section labels while the user is scrolling.
       */
      setShowLabels(true)

      if (hideLabelsTimeout.current) {
        clearTimeout(hideLabelsTimeout.current)
      }

     hideLabelsTimeout.current = setTimeout(() => {
        setShowLabels(false)
     }, 600)

      /*
       * The section crossing this reference point
       * becomes the active section.
       */
      const referencePoint = window.innerHeight * 0.35

      let currentSection: (typeof sections)[number] = sections[0]

      for (const section of sections) {
        const element = document.getElementById(section.id)

        if (!element) continue

        const rect = element.getBoundingClientRect()

        if (rect.top <= referencePoint) {
          currentSection = section
        }
      }

      setActiveSection(currentSection.id)
      setTheme(currentSection.theme)
    }

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    })

    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)

      if (hideLabelsTimeout.current) {
        clearTimeout(hideLabelsTimeout.current)
      }
    }
  }, [])

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id)

    if (!section) return

    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  const isDark = theme === 'dark'

  return (
    <nav
      aria-label="Page sections"
      className={`pointer-events-none fixed inset-0 z-40 transition-opacity duration-500 ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Desktop */}
      <div className="pointer-events-auto absolute left-4 top-1/2 hidden -translate-y-1/2 md:block">
        <div className="relative flex flex-col">
          {/* Vertical line */}
          <div
            aria-hidden="true"
            className={`absolute left-[3px] top-4 bottom-4 w-px transition-colors duration-500 ${
              isDark ? 'bg-zinc-700' : 'bg-zinc-300'
            }`}
          />

          {sections.map((section) => {
            const isActive = activeSection === section.id

            return (
              <button
                key={section.id}
                type="button"
                onClick={() => scrollToSection(section.id)}
                aria-current={isActive ? 'location' : undefined}
                aria-label={`Go to ${section.label}`}
                className="group relative flex h-11 items-center gap-3 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-current"
              >
                {/* Point */}
                <span
                  aria-hidden="true"
                  className={`relative z-10 block h-2 w-2 shrink-0 rounded-full border transition-all duration-300 ${
                    isActive
                      ? isDark
                        ? 'scale-125 border-white bg-white'
                        : 'scale-125 border-zinc-950 bg-zinc-950'
                      : isDark
                        ? 'border-zinc-600 bg-zinc-950 group-hover:border-zinc-400'
                        : 'border-zinc-400 bg-[#e8e7e3] group-hover:border-zinc-600'
                  }`}
                />

                {/* Label */}
                <span
                  className={`whitespace-nowrap text-[9px] font-medium uppercase tracking-[0.16em] transition-all duration-500 ${
                    showLabels
                      ? 'translate-x-0 opacity-100'
                      : '-translate-x-2 opacity-0'
                  } ${
                    isActive
                      ? isDark
                        ? 'text-white'
                        : 'text-zinc-950'
                      : isDark
                        ? 'text-zinc-600'
                        : 'text-zinc-500'
                  }`}
                >
                  {section.label}
                </span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Mobile */}
      <div
        className={`pointer-events-auto fixed left-0 right-0 top-0 px-3 pt-3 transition-opacity duration-500 md:hidden ${
          visible
            ? 'opacity-100'
            : 'pointer-events-none opacity-0'
        }`}
      >
        <div className="mx-auto max-w-full overflow-hidden rounded-full border border-zinc-700/80 bg-zinc-950/90 px-2 py-2 shadow-lg backdrop-blur-md">
          <div
            className="flex gap-1 overflow-x-auto"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {sections.map((section) => {
              const isActive = activeSection === section.id

              return (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => scrollToSection(section.id)}
                  aria-current={isActive ? 'location' : undefined}
                  className={`min-h-10 shrink-0 rounded-full px-3 text-[9px] font-medium uppercase tracking-[0.14em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                    isActive
                      ? 'bg-white text-zinc-950'
                      : 'text-zinc-500 hover:text-zinc-200'
                  }`}
                >
                  {section.label}
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default SectionTimeline