import { skills } from "../data/skills";

const Skills = () => {
  return (
    <section className="scroll-mt-24 py-12 sm:py-16">
      <div className="space-y-8">
        <div className="space-y-3 text-center">
          <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
            Skills
          </h2>
          <p className="text-sm text-slate-300 sm:text-base">
            A snapshot of the tools and technologies I work with most often.
          </p>
        </div>
        <div className="space-y-4">
          {skills.map((skill) => (
            <div key={skill.name} className="space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-300 sm:text-sm">
                <span>{skill.name}</span>
                <span className="text-slate-400">{skill.level}%</span>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-slate-800">
                <div
                  className="h-full rounded-full bg-sky-500"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;


