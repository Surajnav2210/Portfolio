import { hackathons } from "../data/hackathons";

const Hackathons = () => {
  return (
    <section className="scroll-mt-24 py-12 sm:py-16">
      <div className="space-y-6">
        <div className="space-y-3">
          <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
            Hackathons
          </h2>
          <p className="max-w-2xl text-sm text-slate-300 sm:text-base">
            A few fast-paced weekends where I built end-to-end prototypes, from
            data pipelines and models to polished frontends.
          </p>
        </div>
        <div className="no-scrollbar -mx-4 flex gap-4 overflow-x-auto px-1 py-2 sm:mx-0 sm:grid sm:grid-cols-3 sm:gap-5 sm:overflow-visible sm:px-0">
          {hackathons.map((item) => (
            <article
              key={item.name}
              className="group relative min-w-[260px] max-w-xs rounded-2xl border border-slate-700/70 bg-gradient-to-br from-sky-500/20 via-purple-500/15 to-amber-400/15 p-[1px] shadow-[0_18px_45px_rgba(15,23,42,0.9)] sm:max-w-none"
            >
              <div className="flex h-full flex-col justify-between rounded-2xl bg-slate-950/80 px-4 py-4 sm:px-5 sm:py-5">
                <div className="space-y-3">
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-slate-300">
                    {item.event} · {item.year}
                  </p>
                  <h3 className="text-sm font-semibold text-slate-50 sm:text-base">
                    {item.name}
                  </h3>
                  <p className="text-[0.7rem] font-medium text-sky-300">
                    {item.role}
                  </p>
                  <p className="text-[0.75rem] leading-relaxed text-slate-200 sm:text-sm">
                    {item.highlight}
                  </p>
                </div>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center text-[0.7rem] font-medium text-slate-100 transition group-hover:text-sky-300"
                  >
                    View details
                    <span className="ml-1 text-xs">↗</span>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hackathons;


