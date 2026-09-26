import { useLanguage } from '../i18n/LanguageContext'

function Navbar() {
  const { language, setLanguage, t } = useLanguage()

  return (
    <nav
      aria-label="Main navigation"
      className="fixed left-0 top-0 z-50 w-full px-6 py-6 md:px-10"
    >
      <div className="flex items-center justify-between">
        <a
          href="#"
          className="text-sm font-semibold tracking-tight"
          aria-label="Iván Moreno - Home"
        >
          IVÁN MORENO GRANADO
        </a>

        <div className="flex items-center gap-8">
          <div className="hidden gap-8 text-sm text-zinc-400 md:flex">
            <a
              href="#work"
              className="transition-colors hover:text-white focus-visible:text-white focus-visible:outline-none"
            >
              {t.nav.work}
            </a>

            <a
              href="#who-i-am"
              className="transition-colors hover:text-white focus-visible:text-white focus-visible:outline-none"
            >
              {t.nav.about}
            </a>

            <a
              href="#contact"
              className="transition-colors hover:text-white focus-visible:text-white focus-visible:outline-none"
            >
              {t.nav.contact}
            </a>
          </div>

          <div
            className="flex items-center gap-1 text-xs"
            aria-label="Language selection"
          >
            <button
              type="button"
              onClick={() => setLanguage('en')}
              aria-pressed={language === 'en'}
              className={`rounded px-1 py-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                language === 'en'
                  ? 'text-white'
                  : 'text-zinc-500 hover:text-zinc-300'
              }`}
            >
              EN
            </button>

            <span
              className="text-zinc-700"
              aria-hidden="true"
            >
              /
            </span>

            <button
              type="button"
              onClick={() => setLanguage('es')}
              aria-pressed={language === 'es'}
              className={`rounded px-1 py-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                language === 'es'
                  ? 'text-white'
                  : 'text-zinc-500 hover:text-zinc-300'
              }`}
            >
              ES
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar