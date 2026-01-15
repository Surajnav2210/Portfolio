import Link from "next/link";
import { personal } from "../data/personal";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "blog", label: "Blog" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
] as const;

const Navbar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-800/60 bg-slate-950/80 backdrop-blur-lg">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="#home"
          className="text-base font-semibold tracking-wide text-slate-100 sm:text-lg"
        >
          {personal.name}
        </Link>
        <ul className="flex items-center gap-4 text-xs sm:gap-6 sm:text-sm md:text-[0.9rem]">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className="text-slate-300 transition hover:text-slate-50"
              >
                {section.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;


