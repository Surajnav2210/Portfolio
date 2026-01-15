import { personal } from "../data/personal";

const Hero = () => {
  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center gap-10 pb-16 pt-10 text-center sm:min-h-[88vh] sm:pb-20">
      <div className="h-32 w-32 overflow-hidden rounded-full border border-slate-700 bg-slate-900 shadow-lg shadow-slate-900/70 sm:h-36 sm:w-36" />
      <div className="space-y-4">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-slate-400">
          {personal.role}
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl md:text-5xl">
          {personal.name}
        </h1>
        <p className="max-w-xl text-sm text-slate-300 sm:text-base">
          {personal.tagline}
        </p>
      </div>
      <a
        href="#about"
        className="mt-6 inline-flex flex-col items-center gap-2 text-xs font-medium text-slate-400 transition hover:text-slate-100"
      >
        <span>Scroll down</span>
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-600/80 bg-slate-900/60 text-base text-slate-200 shadow-[0_0_15px_rgba(15,23,42,0.9)] animate-bounce">
          ↓
        </span>
      </a>
    </section>
  );
};

export default Hero;


