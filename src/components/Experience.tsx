import { experience } from "../data/experience";

const Experience = () => {
  return (
    <section className="scroll-mt-24 py-12 sm:py-16">
      <div className="space-y-8">
        <div className="space-y-3">
          <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
            Experience
          </h2>
          <p className="max-w-2xl text-sm text-slate-300 sm:text-base">
            Roles where I&apos;ve shipped production software, supported
            students, and collaborated with research teams.
          </p>
        </div>
        <ol className="grid gap-4 md:grid-cols-2">
          {experience.map((item) => (
            <li key={`${item.role}-${item.organization}`}>
              <article className="flex h-full flex-col rounded-2xl border border-slate-800/70 bg-slate-950/80 p-4 shadow-[0_14px_36px_rgba(15,23,42,0.9)]">
                <div className="mb-3 flex items-center justify-between gap-2">
                  <h3 className="text-sm font-semibold text-slate-50 sm:text-base">
                    {item.role}
                  </h3>
                  <span className="rounded-full border border-slate-700/80 px-2 py-0.5 text-[0.65rem] font-medium text-slate-200">
                    {item.start} — {item.end}
                  </span>
                </div>
                <p className="text-xs font-medium text-slate-300 sm:text-sm">
                  {item.organization}
                </p>
                <p className="mt-2 text-[0.75rem] leading-relaxed text-slate-300 sm:text-sm">
                  {item.description}
                </p>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Experience;


