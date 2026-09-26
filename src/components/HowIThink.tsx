import { useLanguage } from '../i18n/LanguageContext'

function HowIApproachThings() {
  const { t } = useLanguage()

  return (
    <section
      id="how-i-approach-things"
      aria-labelledby="how-i-approach-things-title"
      className="bg-zinc-950 px-6 py-32 text-white md:px-10 md:py-40"
    >
      <div className="mx-auto max-w-6xl md:pl-28 lg:pl-36">
        <div className="max-w-3xl">
          <p className="mb-8 text-xs font-medium uppercase tracking-[0.25em] text-zinc-500">
            {t.howIApprouchThings.label}
          </p>

          <h2
            id="how-i-approach-things-title"
            className="text-[clamp(3.5rem,8vw,8rem)] font-medium leading-[0.88] tracking-[-0.055em]"
          >
            {t.howIApprouchThings.title}
          </h2>

          <p className="mt-10 max-w-2xl text-xl leading-relaxed text-zinc-400 md:text-2xl">
            {t.howIApprouchThings.intro}
          </p>
        </div>

        <div className="mt-24 grid gap-px overflow-hidden border border-zinc-800 bg-zinc-800 md:grid-cols-2">
          {t.howIApprouchThings.principles.map((principle, index) => (
            <article
              key={principle.title}
              className="bg-zinc-950 p-8 md:p-10"
            >
              <span className="text-xs text-zinc-600">
                {String(index + 1).padStart(2, '0')}
              </span>

              <h3 className="mt-10 text-2xl font-medium tracking-tight text-zinc-100 md:text-3xl">
                {principle.title}
              </h3>

              <p className="mt-5 max-w-md text-base leading-relaxed text-zinc-500 md:text-lg">
                {principle.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-24">
          <div className="mb-10 border-b border-zinc-800 pb-5">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-zinc-500">
              {t.howIApprouchThings.inPracticeLabel}
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-3 md:gap-8">
            {t.howIApprouchThings.inPractice.map((item) => (
              <article key={item.title}>
                <h3 className="text-lg font-medium text-zinc-200">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-zinc-500 md:text-base">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        <a
          href="#experience"
          className="group mt-28 flex w-fit items-center gap-3 text-xs uppercase tracking-[0.2em] text-zinc-500 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-zinc-950"
        >
          <span>{t.howIApprouchThings.next}</span>

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

export default HowIApproachThings