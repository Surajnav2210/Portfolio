import { projects } from "../data/projects";

const Projects = () => {
  return (
    <section className="scroll-mt-24 py-12 sm:py-16">
      <div className="space-y-8">
        <div className="space-y-3">
          <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
            Projects
          </h2>
          <p className="max-w-2xl text-sm text-slate-300 sm:text-base">
            A mix of research-driven and product-focused work, from concept
            graphs to production web apps.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group relative overflow-hidden rounded-3xl border border-slate-800/70 bg-slate-950/80"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-sky-500/40 via-fuchsia-500/35 to-amber-400/35 opacity-60 transition group-hover:opacity-90" />
              <div className="relative flex h-full flex-col justify-between p-4 sm:p-5">
                <div className="space-y-3">
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-slate-200">
                    Web & AI Project
                  </p>
                  <h3 className="text-sm font-semibold text-slate-50 sm:text-base">
                    {project.title}
                  </h3>
                  <p className="text-[0.75rem] leading-relaxed text-slate-100 sm:text-sm">
                    {project.description}
                  </p>
                </div>
                <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-slate-950/70 px-2 py-0.5 text-[0.65rem] font-medium text-slate-100 ring-1 ring-slate-200/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center text-[0.7rem] font-semibold text-slate-50 transition group-hover:text-slate-900"
                    >
                      <span className="mr-1">View</span>
                      <span className="text-xs">↗</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;


