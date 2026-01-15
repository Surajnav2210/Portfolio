import { certificates } from "../data/certificates";

const Certificates = () => {
  return (
    <section className="scroll-mt-24 py-12 sm:py-16">
      <div className="space-y-8">
        <div className="space-y-3 text-center">
          <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
            Certificates
          </h2>
          <p className="text-sm text-slate-300 sm:text-base">
            Formal recognitions that complement my day-to-day experience.
          </p>
        </div>
        <ul className="space-y-4">
          {certificates.map((cert) => (
            <li
              key={cert.name}
              className="flex flex-col rounded-lg border border-slate-800/70 bg-slate-900/60 px-4 py-3 text-sm text-slate-200 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <p className="font-medium">{cert.name}</p>
                <p className="text-xs text-slate-400 sm:text-sm">
                  {cert.issuer}
                </p>
              </div>
              {cert.year && (
                <p className="mt-1 text-xs text-slate-400 sm:mt-0 sm:text-sm">
                  {cert.year}
                </p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Certificates;


