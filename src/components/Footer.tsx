import { personal } from "../data/personal";

const Footer = () => {
  return (
    <footer className="mt-16 border-t border-slate-800/70 py-6 text-xs text-slate-400 sm:text-sm">
      <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
        <p className="text-center sm:text-left">
          © {new Date().getFullYear()} {personal.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a
            href={`mailto:${personal.email}`}
            className="transition hover:text-slate-200"
          >
            Email
          </a>
          <a
            href={personal.github}
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-slate-200"
          >
            GitHub
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-slate-200"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


