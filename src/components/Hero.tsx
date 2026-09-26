import { useLanguage } from '../i18n/LanguageContext'

function Hero() {
  const { t } = useLanguage()

  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="relative flex min-h-screen w-full items-center overflow-hidden bg-zinc-950 px-6 py-32 text-white md:px-10"
    >
      <div className="relative z-10 w-full">
        <div className="mx-auto w-full max-w-[1600px]">
          <div className="max-w-6xl">
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-zinc-500 md:text-base">
              {t.hero.role}
            </p>

            <h1
              id="hero-title"
              className="max-w-6xl text-[clamp(3.5rem,10vw,10rem)] font-medium leading-[0.82] tracking-[-0.055em]"
            >
              Software
              <br />
              Engineer
            </h1>

            <p className="mt-10 max-w-2xl text-xl leading-relaxed text-zinc-400 md:text-2xl">
              {t.hero.headline}
            </p>
          </div>

          <div className="mt-16 flex flex-col justify-between gap-10 border-t border-zinc-800 pt-5 sm:flex-row sm:items-end">
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-zinc-500">
              {t.hero.areas.map((area, index) => (
                <span key={area} className="flex items-center gap-4">
                  <span>{area}</span>

                  {index < t.hero.areas.length - 1 && (
                    <span aria-hidden="true">·</span>
                  )}
                </span>
              ))}
            </div>

            <a
              href="#who-i-am"
              className="group flex w-fit items-center gap-3 text-xs uppercase tracking-[0.2em] text-zinc-400 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-zinc-950"
            >
              <span>{t.hero.scroll}</span>

              <span
                aria-hidden="true"
                className="animate-scroll-hint transition-transform duration-300 group-hover:translate-y-1"
              >
                ↓
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero