import { useLanguage } from '../i18n/LanguageContext'

function WhoIAm() {
  const { t } = useLanguage()

  return (
    <section
      id="who-i-am"
      aria-labelledby="who-i-am-title"
      className="bg-[#e8e7e3] px-6 py-32 text-zinc-950 md:px-10 md:py-40"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center text-center">
        <p className="mb-8 text-xs font-medium uppercase tracking-[0.25em] text-zinc-500">
          {t.whoIAm.label}
        </p>

        <h2
          id="who-i-am-title"
          className="text-[clamp(4rem,10vw,9rem)] font-medium leading-[0.85] tracking-[-0.06em]"
        >
          {t.whoIAm.title}
        </h2>

        <div className="mt-20 max-w-3xl">
          <p className="text-xl leading-relaxed text-zinc-700 md:text-2xl">
            {t.whoIAm.paragraphs[0]}
          </p>

          <p className="mt-10 text-base leading-relaxed text-zinc-600 md:text-lg">
            {t.whoIAm.paragraphs[1]}
          </p>

          <p className="mt-10 text-base leading-relaxed text-zinc-600 md:text-lg">
            {t.whoIAm.paragraphs[2]}
          </p>
        </div>

        <div className="mt-20 border-t border-zinc-300 pt-5">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-xs uppercase tracking-[0.18em] text-zinc-500">
            {t.whoIAm.areas.map((area) => (
              <span key={area}>{area}</span>
            ))}
          </div>
        </div>

        <a
          href="#how-i-think"
          className="group mt-28 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-zinc-500 transition-colors hover:text-zinc-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-4 focus-visible:ring-offset-[#e8e7e3]"
        >
          <span>{t.whoIAm.next}</span>

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

export default WhoIAm