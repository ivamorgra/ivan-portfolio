import { useLanguage } from '../i18n/LanguageContext'

function Experience() {
  const { t } = useLanguage()

  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="bg-[#e8e7e3] px-6 py-32 text-zinc-950 md:px-10 md:py-40"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="mb-8 text-xs font-medium uppercase tracking-[0.25em] text-zinc-500">
            {t.experience.label}
          </p>

          <h2
            id="experience-title"
            className="text-[clamp(4rem,10vw,9rem)] font-medium leading-[0.85] tracking-[-0.06em]"
          >
            {t.experience.title}
          </h2>
        </div>

        <div className="mt-24">
          {/* Ever Health */}
          <article className="border-t border-zinc-300 py-10 md:py-14">
            <div className="grid gap-8 md:grid-cols-[1fr_auto] md:gap-12">
              <div>
                <h3 className="text-4xl font-medium tracking-[-0.03em] md:text-5xl">
                  Ever Health
                </h3>

                <p className="mt-3 text-sm uppercase tracking-[0.16em] text-zinc-500">
                  {t.experience.everHealth.role}
                </p>

                <p className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-700">
                  {t.experience.everHealth.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-xs uppercase tracking-[0.14em] text-zinc-500">
                  {t.experience.everHealth.areas.map((area) => (
                    <span key={area}>{area}</span>
                  ))}
                </div>
              </div>

              <p className="text-xs uppercase tracking-[0.16em] text-zinc-500 md:pt-2">
                {t.experience.everHealth.period}
              </p>
            </div>
          </article>

          {/* Avanade */}
          <article className="border-t border-zinc-300 py-10 md:py-14">
            <div className="grid gap-8 md:grid-cols-[1fr_auto] md:gap-12">
              <div>
                <h3 className="text-3xl font-medium tracking-[-0.03em] md:text-4xl">
                  Avanade
                </h3>

                <p className="mt-3 text-sm uppercase tracking-[0.16em] text-zinc-500">
                  {t.experience.avanade.role}
                </p>

                <p className="mt-8 max-w-2xl text-base leading-relaxed text-zinc-600 md:text-lg">
                  {t.experience.avanade.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-xs uppercase tracking-[0.14em] text-zinc-500">
                  {t.experience.avanade.areas.map((area) => (
                    <span key={area}>{area}</span>
                  ))}
                </div>
              </div>

              <p className="text-xs uppercase tracking-[0.16em] text-zinc-500 md:pt-2">
                {t.experience.avanade.period}
              </p>
            </div>
          </article>
        </div>

        <a
          href="#what-im-exploring"
          className="group mt-24 flex w-fit items-center gap-3 text-xs uppercase tracking-[0.2em] text-zinc-500 transition-colors hover:text-zinc-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-4 focus-visible:ring-offset-[#e8e7e3]"
        >
          <span>{t.experience.next}</span>

          <span
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:translate-y-1"
          >
            ↓
          </span>
        </a>
      </div>
    </section>
  )
}

export default Experience