import { personal } from "../data/personal";

const About = () => {
  return (
    <section className="scroll-mt-24 py-12 sm:py-16">
      <div className="space-y-4 text-center">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          About
        </h2>
        <div className="space-y-3">
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
            {personal.about}
          </p>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500 sm:text-[0.7rem]">
            B.S. Computer Science &amp; Data Science · University of
            Wisconsin–Madison · {personal.location}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;


