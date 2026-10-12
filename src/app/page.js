import Image from "next/image";
import CopyEmail from "./components/CopyEmail";
import Interactions from "./components/Interactions";
import Media from "./components/Media";
import ApiCover from "./components/ApiCover";
import RoleRotator from "./components/RoleRotator";
import SpontaMockup from "./components/SpontaMockup";
import { site, nav, hero, ticker, liveProjects, moreProjects, experience, numbers, about, skills } from "./data";

function SectionHead({ index, label, children, intro }) {
  return (
    <div className="sec-head reveal">
      <p className="eyebrow">
        <span>{index}</span> {label}
      </p>
      <h2 className="sec-title">{children}</h2>
      {intro && <p className="sec-intro">{intro}</p>}
    </div>
  );
}

function External({ href, children, className }) {
  return (
    <a className={className} href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <>
      <Interactions />

      <header className="topbar">
        <a className="brand" href="#top">
          <span className="brand-name">{site.name}</span>
          <span className="brand-role">{site.role}</span>
        </a>
        <nav className="topnav" aria-label="Primary">
          {nav.map((item, i) => (
            <a key={item.id} href={`#${item.id}`}>
              <span className="idx">0{i + 1}</span>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="btn btn-dark btn-sm" href={site.resume} download={site.resumeDownloadName}>
          Résumé ↓
        </a>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="hero-hello rise">{hero.hello}</p>
              <h1 className="hero-title rise d1">
                <span className="line">I like to</span>
                <span className="line">
                  <em>build.</em>
                </span>
                <span className="sr-only"> {hero.roles.join(", ")}.</span>
              </h1>
              <p className="hero-roles rise d2">
                <span className="hero-roles-bar" aria-hidden="true" />
                <RoleRotator roles={hero.roles} />
              </p>
              <p className="hero-lede rise d2">{hero.lede}</p>
              <div className="hero-ctas rise d3">
                <a className="btn btn-red" href="#projects">
                  See my work <span className="arr">→</span>
                </a>
                <External className="btn btn-line" href={site.github}>
                  GitHub <span className="arr">↗</span>
                </External>
              </div>
            </div>

            <div className="hero-visual rise d2">
              <div className="arch">
                <Media src={hero.portrait.src} alt={hero.portrait.alt} sizes="(max-width: 900px) 80vw, 420px" priority />
              </div>
              <span className="stamp" aria-hidden="true">
                UW
                <br />
                &apos;26
              </span>
            </div>
          </div>

          <dl className="facts rise d4">
            {hero.facts.map((f) => (
              <div key={f.k}>
                <dt>{f.k}</dt>
                <dd>{f.v}</dd>
              </div>
            ))}
          </dl>
        </section>

        <div className="ticker" aria-hidden="true">
          <div className="ticker-track">
            {[...ticker, ...ticker].map((t, i) => (
              <span key={i}>
                {t}
                <i>✦</i>
              </span>
            ))}
          </div>
        </div>

        <section className="sec" id="projects">
          <div className="wrap">
            <SectionHead
              index="01"
              label="Selected projects"
              intro="Side projects I've designed and built end to end, with a live demo where there's one to try."
            >
              What I&apos;ve been <em>building lately.</em>
            </SectionHead>

            <div className="features">
              {liveProjects.map((p, i) => (
                <article className={`feature reveal${i % 2 ? " flip" : ""}`} key={p.name}>
                  {p.mockup === "sponta" ? (
                    <External className="browser browser-app" href={p.code}>
                      <SpontaMockup />
                    </External>
                  ) : (
                    <External className="browser" href={p.url}>
                      <span className="browser-bar">
                        <span className="dots" aria-hidden="true">
                          <i />
                          <i />
                          <i />
                        </span>
                        <span className="url">{p.urlLabel}</span>
                        <span className="open" aria-hidden="true">
                          ↗
                        </span>
                      </span>
                      <span className="browser-shot">
                        <Image src={p.image} alt={`${p.name} live site`} fill sizes="(max-width: 960px) 100vw, 640px" />
                      </span>
                    </External>
                  )}
                  <div className="feature-body">
                    <p className="feature-meta">
                      <span className="num">{String(i + 1).padStart(2, "0")}</span>
                      <span>{p.year}</span>
                      <span className={p.url ? "live-dot" : "live-dot launched"}>{p.status ?? "Live demo"}</span>
                    </p>
                    <h3>{p.name}</h3>
                    <p className="tagline">{p.tagline}</p>
                    <ul className="points">
                      {p.points.map((pt) => (
                        <li key={pt}>{pt}</li>
                      ))}
                    </ul>
                    <ul className="chips">
                      {p.stack.map((s) => (
                        <li key={s}>{s}</li>
                      ))}
                    </ul>
                    <div className="feature-links">
                      {p.url ? (
                        <>
                          <External className="btn btn-dark" href={p.url}>
                            Try the demo <span className="arr">↗</span>
                          </External>
                          <External className="btn btn-line" href={p.code}>
                            Code <span className="arr">↗</span>
                          </External>
                        </>
                      ) : (
                        <External className="btn btn-dark" href={p.code}>
                          View the code <span className="arr">↗</span>
                        </External>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="sec dark" id="experience">
          <div className="wrap">
            <SectionHead index="02" label="Experience">
              Where I&apos;ve <em>done the work.</em>
            </SectionHead>
            <ol className="timeline">
              {experience.map((job) => (
                <li className={`job reveal${job.tag ? " job-featured" : ""}`} key={job.company}>
                  <span className="job-dates">{job.dates}</span>
                  <div className="job-who">
                    <span className="job-logo">
                      {job.logo ? (
                        <Image src={job.logo} alt="" width={44} height={44} />
                      ) : (
                        <span className="monogram">{job.monogram}</span>
                      )}
                    </span>
                    <span>
                      <span className="job-company">{job.company}</span>
                      <span className="job-role">{job.role}</span>
                      {job.tag && <span className="job-tag">{job.tag}</span>}
                    </span>
                  </div>
                  <div className="job-what">
                    <p>{job.summary}</p>
                    {job.results && (
                      <dl className="job-results">
                        {job.results.map((r) => (
                          <div key={r.l}>
                            <dt>{r.n}</dt>
                            <dd>{r.l}</dd>
                          </div>
                        ))}
                      </dl>
                    )}
                    {job.points && (
                      <ul className="job-points">
                        {job.points.map((p) => (
                          <li key={p}>{p}</li>
                        ))}
                      </ul>
                    )}
                    <ul className="chips chips-dark">
                      {job.stack.map((s) => (
                        <li key={s}>{s}</li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="numbers" aria-label="By the numbers">
          <div className="wrap numbers-grid reveal">
            {numbers.map((n) => (
              <div className="number" key={n.label}>
                <span className="n">{n.num}</span>
                <span className="l">{n.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="sec sec-tint" id="more" data-nav="projects">
          <div className="wrap">
            <SectionHead
              index="03"
              label="More projects"
              intro="Smaller things I've built for fun, at hackathons, or to learn something new. Each one opens its GitHub repo."
            >
              Side builds <em>and experiments.</em>
            </SectionHead>
            <ul className="mini-grid">
              {moreProjects.map((p) => (
                <li key={p.name} className="reveal">
                  <External className="mini" href={p.href}>
                    <span className="mini-shot">
                      {p.cover === "api" ? (
                        <ApiCover />
                      ) : (
                        <Image src={p.image} alt="" fill sizes="(max-width: 640px) 100vw, (max-width: 1080px) 50vw, 380px" />
                      )}
                    </span>
                    <span className="mini-body">
                      <span className="mini-meta">
                        {p.year}
                        {p.tag && <span className="i-status">{p.tag}</span>}
                      </span>
                      <span className="mini-name">{p.name}</span>
                      <span className="mini-what">{p.what}</span>
                      <span className="mini-foot">
                        <span className="mini-stack">{p.stack}</span>
                        <span className="mini-go">
                          GitHub <span aria-hidden="true">↗</span>
                        </span>
                      </span>
                    </span>
                  </External>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="sec" id="about">
          <div className="wrap">
            <SectionHead index="04" label="About">
              Off the screen, <em>too.</em>
            </SectionHead>

            <div className="bento">
              <div className="card card-about reveal">
                {about.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
                <div className="card-links">
                  <External className="btn btn-dark btn-sm" href={site.linkedin}>
                    LinkedIn ↗
                  </External>
                  <a className="btn btn-line btn-sm" href={site.resume} target="_blank" rel="noopener noreferrer">
                    View résumé
                  </a>
                </div>
              </div>

              <div className="card card-photos reveal" aria-label="Photos">
                {about.photos.map((ph, i) => (
                  <figure className={`polaroid p${i + 1}`} key={ph.caption}>
                    <div className="polaroid-img">
                      <Media
                        src={ph.src}
                        alt={ph.alt}
                        sizes="(max-width: 900px) 45vw, 260px"
                        style={ph.position ? { objectPosition: ph.position } : undefined}
                      />
                    </div>
                    <figcaption>{ph.caption}</figcaption>
                  </figure>
                ))}
              </div>

              <div className="card card-edu reveal">
                <div className="edu-top">
                  <Image src={about.education.logo} alt="UW–Madison crest" width={40} height={58} />
                  <span className="mono-sm">{about.education.dates}</span>
                </div>
                <h3>{about.education.school}</h3>
                <p className="edu-degree">{about.education.degree}</p>
                <p className="edu-course">{about.education.coursework}</p>
              </div>

              <External className="card card-music reveal" href={site.band}>
                <span className="card-kicker">♪ Music</span>
                <h3>{about.music.title}</h3>
                <p>{about.music.text}</p>
                <span className="card-go">@maggi_melodies ↗</span>
              </External>

              <div className="card card-football reveal">
                <span className="card-kicker">⚽ Football</span>
                <h3>{about.football.title}</h3>
                <p>{about.football.text}</p>
              </div>
            </div>

            <div className="toolbox reveal">
              <p className="eyebrow">
                <span>05</span> Toolbox
              </p>
              <div className="toolbox-grid">
                {skills.map((g) => (
                  <div key={g.group}>
                    <h4>{g.group}</h4>
                    <ul>
                      {g.items.map((s) => (
                        <li key={s}>{s}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="wrap">
            <p className="eyebrow eyebrow-light">
              <span>06</span> Contact
            </p>
            <h2 className="contact-title reveal">
              Let&apos;s build
              <br />
              something <em>real.</em>
            </h2>
            <div className="contact-mail reveal">
              <a href={`mailto:${site.email}`}>{site.email}</a>
              <CopyEmail email={site.email} />
            </div>
            <div className="contact-links reveal">
              <External href={site.linkedin}>LinkedIn ↗</External>
              <External href={site.github}>GitHub ↗</External>
              <External href={site.instagram}>Instagram ↗</External>
              <a href={site.resume} download={site.resumeDownloadName}>
                Résumé ↓
              </a>
            </div>
          </div>
          <footer className="footer wrap">
            <a href="#top" className="to-top">
              Back to top <span aria-hidden="true">↑</span>
            </a>
          </footer>
        </section>
      </main>
    </>
  );
}
