"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import styles from "./mac.module.css";

const KICKER_SEGMENTS = [
  { text: "System.out.print", className: "codeMethod" },
  { text: "(", className: "codePunc" },
  { text: '"Hello There !"', className: "codeString" },
  { text: ")", className: "codePunc" },
  { text: ";", className: "codePunc" },
];

const KICKER_TOTAL = KICKER_SEGMENTS.reduce((acc, s) => acc + s.text.length, 0);

export default function MacPortfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [roleIndex, setRoleIndex] = useState(0);
  const [typed, setTyped] = useState(0);

  const navItems = useMemo(
    () => [
      { id: "home", label: "Home" },
      { id: "about", label: "About" },
      { id: "experience", label: "Work Experience" },
      { id: "education", label: "Education" },
      { id: "skills", label: "Skills" },
      { id: "hobbies", label: "Hobbies" },
    ],
    []
  );

  useEffect(() => {
    const onScroll = () => {
      const sectionOffsets = navItems.map((item) => {
        const element = document.getElementById(item.id);
        if (!element) return { id: item.id, top: Number.POSITIVE_INFINITY };
        const top = Math.abs(element.getBoundingClientRect().top - 140);
        return { id: item.id, top };
      });

      const closest = sectionOffsets.sort((a, b) => a.top - b.top)[0];
      if (closest) setActiveSection(closest.id);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [navItems]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.revealIn);
          }
        });
      },
      { threshold: 0.12 }
    );

    const targets = document.querySelectorAll(`.${styles.reveal}`);
    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const roles = useMemo(
    () => [
      "Software Engineer",
      "Full-Stack Developer",
      "AI / ML Builder",
      "Data Enthusiast",
      "Musician",
      "Football Fan",
    ],
    []
  );

  useEffect(() => {
    const timer = window.setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 1800);
    return () => window.clearInterval(timer);
  }, [roles.length]);

  useEffect(() => {
    if (typed >= KICKER_TOTAL) return;
    const delay = typed === 0 ? 350 : 55;
    const t = window.setTimeout(() => setTyped((n) => n + 1), delay);
    return () => window.clearTimeout(t);
  }, [typed]);

  const skillCategories = [
    {
      key: "languages",
      label: "Languages",
      symbol: "{ }",
      items: [
        "JavaScript",
        "TypeScript",
        "Python",
        "Java",
        "C",
        "C++",
        "SQL",
        "R",
        "Bash",
        "HTML/CSS",
      ],
    },
    {
      key: "web",
      label: "Web & Backend",
      symbol: "</>",
      items: [
        "React",
        "Next.js",
        "Node.js",
        "Express",
        "FastAPI",
        "Flask",
        "React Native",
        "REST APIs",
        "GraphQL",
        "Tailwind CSS",
      ],
    },
    {
      key: "data",
      label: "Databases & Data",
      symbol: "▤",
      items: [
        "PostgreSQL",
        "MySQL",
        "MongoDB",
        "Redis",
        "Firebase",
        "ChromaDB",
        "PyTorch",
        "Keras",
        "Pandas",
      ],
    },
    {
      key: "devops",
      label: "DevOps & Tools",
      symbol: "◇",
      items: [
        "Docker",
        "Kubernetes",
        "AWS",
        "GCP",
        "Git",
        "CI/CD",
        "JIRA",
        "Linux",
        "Agile/Scrum",
      ],
    },
  ];

  return (
    <div className={styles.shell}>
      <div className={styles.bgLayer} aria-hidden="true">
        <span className={`${styles.blob} ${styles.blobA}`} />
        <span className={`${styles.blob} ${styles.blobB}`} />
        <span className={`${styles.blob} ${styles.blobC}`} />
        <span className={`${styles.blob} ${styles.blobD}`} />
      </div>

      <header className={styles.siteHeader}>
        <div className={styles.headerInner}>
          <a href="#home" className={styles.brand} aria-label="Suraj">
            <span className={styles.brandBracket}>&lt;</span>
            <span className={styles.brandName}>Suraj</span>
            <span className={styles.brandBracket}>/&gt;</span>
            <span className={styles.brandCaret} aria-hidden="true" />
          </a>
          <nav className={styles.nav}>
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={activeSection === item.id ? styles.activeLink : ""}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className={styles.main}>
        <section className={styles.hero} id="home">
          <div className={styles.heroPhotoWrap}>
            <div className={styles.heroPhotoRing}>
              <Image
                src="/profile.jpeg"
                alt="Suraj Naveen profile"
                className={styles.heroPhoto}
                width={736}
                height={1040}
                priority
              />
            </div>
          </div>
          <div className={styles.heroText}>
            <p className={styles.kicker} aria-label='System.out.print("Hello There !");'>
              {KICKER_SEGMENTS.reduce((acc, segment, idx) => {
                const start = acc.consumed;
                const end = start + segment.text.length;
                const visibleEnd = Math.min(end, typed);
                if (visibleEnd > start) {
                  acc.nodes.push(
                    <span key={idx} className={styles[segment.className]}>
                      {segment.text.slice(0, visibleEnd - start)}
                    </span>
                  );
                }
                return { consumed: end, nodes: acc.nodes };
              }, { consumed: 0, nodes: [] }).nodes}
              <span className={styles.typingCursor} aria-hidden="true" />
            </p>
            <h1 className={styles.heroTitle}>
              <span className={styles.iam}>I am</span>{" "}
              <span className={styles.gradientName}>Suraj Naveen</span>
            </h1>
            <ul className={styles.roleList} aria-label="Roles">
              {roles.map((role, idx) => (
                <li
                  key={role}
                  className={`${styles.roleItem} ${roleIndex === idx ? styles.roleItemActive : ""}`}
                >
                  {role}
                </li>
              ))}
            </ul>
            <div className={styles.socials}>
              <a
                href="https://www.linkedin.com/in/suraj-naveen/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className={styles.socialIcon}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="https://github.com/Surajnav2210"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className={styles.socialIcon}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="mailto:snaveen@wisc.edu"
                aria-label="Email"
                className={styles.socialIcon}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/suraj_navn/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className={styles.socialIcon}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>
          <a href="#about" className={styles.scrollHint} aria-label="Scroll to about">
            <span className={styles.scrollDot} />
          </a>
        </section>

        <section id="about" className={`${styles.section} ${styles.reveal}`}>
          <h2 className={styles.sectionTitle}>About Me</h2>
          <div className={styles.aboutWrap}>
            <p>
              I am a Computer Science and Data Science student at the University of Wisconsin-Madison, graduating in 2026.
              I love working at the intersection of product engineering, full-stack development, and applied machine learning,
              and I have shipped real software across early-stage startups and a public-media organization.
            </p>
            <p>
              Most recently I have been building a RAG-based AI assistant at <strong>PBS Wisconsin</strong> (my senior
              capstone) that lets PBS staff query 500+ Airtable records using natural language instead of manually
              scanning spreadsheets, and I am training CNN fall-detection models for <strong>Wear Tech Inc.</strong> in
              PyTorch and Keras on 1,000+ labeled video frames from wearable sensors.
            </p>
            <p>
              Earlier I shipped production SaaS features at Dealcycle AI, did undergraduate research at the MAGIC Lab at
              UW-Madison, and built dashboard tooling for 200+ car dealerships at Evenforce Technologies. On the side
              I have worked on AI fraud detection (RiskChain) and consumer products like Sponta.
            </p>
            <p>
              I care a lot about clean systems, thoughtful UX, and writing code that is actually useful. I am currently
              <strong> looking for full time positions</strong>.
            </p>
            <div className={styles.aboutActions}>
              <a
                href="/Suraj_Naveen_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className={styles.resumeBtn}
              >
                Resume <span aria-hidden="true">&darr;</span>
              </a>
            </div>
          </div>
        </section>

        <section id="experience" className={`${styles.section} ${styles.reveal}`}>
          <h2 className={styles.sectionTitle}>Work Experience</h2>
          <div className={styles.experienceList}>
            <article className={styles.experienceCard}>
              <div className={styles.experienceLogoWrap}>
                <Image
                  src="/exp-pbs.png"
                  alt="PBS Wisconsin logo"
                  width={80}
                  height={80}
                  className={styles.experienceLogo}
                />
              </div>
              <div className={styles.experienceBody}>
                <div className={styles.experienceHeader}>
                  <h3>Software Engineer</h3>
                  <span className={styles.experienceDate}>Jan 2026 - Present</span>
                </div>
                <p className={styles.experienceCompany}>PBS Wisconsin (Capstone)</p>
                <ul className={styles.bulletList}>
                  <li>
                    Building a RESTful search system with FastAPI, ChromaDB, and a React frontend that lets PBS staff
                    query 500+ Airtable records using natural language instead of manually scanning spreadsheets.
                  </li>
                  <li>
                    Owned the embedding model selection and chunking strategy for the retrieval layer, evaluating chunk
                    sizes and overlap settings against real user queries to improve relevance.
                  </li>
                  <li>
                    Working cross-functionally with PBS staff and a team of 5 students following Agile/Scrum with
                    one-week sprints, weekly demos, and JIRA for backlog management.
                  </li>
                </ul>
                <div className={styles.tagRow}>
                  <span>FastAPI</span>
                  <span>ChromaDB</span>
                  <span>React</span>
                </div>
              </div>
            </article>

            <article className={styles.experienceCard}>
              <div className={styles.experienceLogoWrap}>
                <Image
                  src="/exp-dealcycle.png"
                  alt="Dealcycle AI logo"
                  width={80}
                  height={80}
                  className={styles.experienceLogo}
                />
              </div>
              <div className={styles.experienceBody}>
                <div className={styles.experienceHeader}>
                  <h3>Full-Stack Software Engineer</h3>
                  <span className={styles.experienceDate}>May 2025 - Aug 2025</span>
                </div>
                <p className={styles.experienceCompany}>Dealcycle AI</p>
                <ul className={styles.bulletList}>
                  <li>
                    Shipped two production SaaS apps end-to-end in Next.js, React, and TypeScript. Designed the
                    PostgreSQL schema, managed client-side state with React Context and hooks, and built the frontend
                    component layer.
                  </li>
                  <li>
                    Integrated PostHog analytics tracking 15+ user events, used the data to identify performance issues
                    in the onboarding flow, and shipped a simplified version that improved retention.
                  </li>
                  <li>
                    Built a RAG Q&amp;A tool in Python with a Node.js integration layer that parses 20+ client PDFs into
                    chunked embeddings and returns top-5 results via RESTful API.
                  </li>
                </ul>
                <div className={styles.tagRow}>
                  <span>Next.js</span>
                  <span>TypeScript</span>
                  <span>PostgreSQL</span>
                  <span>PostHog</span>
                </div>
              </div>
            </article>

            <article className={styles.experienceCard}>
              <div className={styles.experienceLogoWrap}>
                <Image
                  src="/uw-logo.png"
                  alt="University of Wisconsin-Madison logo"
                  width={80}
                  height={80}
                  className={styles.experienceLogo}
                />
              </div>
              <div className={styles.experienceBody}>
                <div className={styles.experienceHeader}>
                  <h3>Undergraduate Research Assistant</h3>
                  <span className={styles.experienceDate}>Jan 2025 - Nov 2025</span>
                </div>
                <p className={styles.experienceCompany}>MAGIC Lab, UW-Madison</p>
                <ul className={styles.bulletList}>
                  <li>
                    Built a Python pipeline that ingests, cleans, and runs analysis on 1K+ data points across 10
                    studies, replacing a manual process researchers were doing by hand and improving data quality.
                  </li>
                  <li>
                    Wrote PyTorch scripts that automated 20+ experiment sessions end-to-end, covering preprocessing,
                    model training, and evaluation. Cut per-session setup from a long manual process to a single command.
                  </li>
                  <li>
                    Built the R-based statistical modeling toolkit (EFA, SEM) and refined it through weekly iteration
                    with stakeholders until outputs matched expected accuracy across all 10 datasets.
                  </li>
                </ul>
                <div className={styles.tagRow}>
                  <span>Python</span>
                  <span>PyTorch</span>
                  <span>R</span>
                  <span>Pandas</span>
                </div>
              </div>
            </article>

            <article className={styles.experienceCard}>
              <div className={styles.experienceLogoWrap}>
                <Image
                  src="/exp-getafix.png"
                  alt="Evenforce Technologies (Getafix) logo"
                  width={80}
                  height={80}
                  className={styles.experienceLogo}
                />
              </div>
              <div className={styles.experienceBody}>
                <div className={styles.experienceHeader}>
                  <h3>Software Engineer Intern</h3>
                  <span className={styles.experienceDate}>Jun 2023 - Jul 2023</span>
                </div>
                <p className={styles.experienceCompany}>Evenforce Technologies (Getafix)</p>
                <ul className={styles.bulletList}>
                  <li>
                    Built React.js dashboard features for Getafix, a scalable SaaS platform serving 200+ car
                    dealerships. Connected real-time tracking panels via configurable REST API endpoints.
                  </li>
                  <li>
                    Identified and rewrote slow PostgreSQL/MySQL queries causing performance degradation on the
                    dispatch view. Shipped features with a 10-person engineering team via weekly code reviews.
                  </li>
                </ul>
                <div className={styles.tagRow}>
                  <span>React</span>
                  <span>REST APIs</span>
                  <span>PostgreSQL</span>
                  <span>MySQL</span>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section id="education" className={`${styles.section} ${styles.reveal}`}>
          <h2 className={styles.sectionTitle}>Education</h2>
          <div className={styles.experienceList}>
            <article className={styles.experienceCard}>
              <div className={styles.experienceLogoWrap}>
                <Image
                  src="/uw-logo.png"
                  alt="University of Wisconsin-Madison logo"
                  width={80}
                  height={80}
                  className={styles.experienceLogo}
                />
              </div>
              <div className={styles.experienceBody}>
                <div className={styles.experienceHeader}>
                  <h3>Bachelor of Science, Computer Sciences and Data Science</h3>
                  <span className={styles.experienceDate}>Sep 2022 - May 2026</span>
                </div>
                <p className={styles.experienceCompany}>University of Wisconsin-Madison</p>
                <p className={styles.experienceDesc}>
                  <strong>Relevant Coursework:</strong> Data Structures &amp; Algorithms, OOP, Advanced ML in Python,
                  Database Management in C++, Machine Organization (C, x86 Assembly), Mobile Systems &amp; Applications,
                  User Interface Development, Statistical Data Visualization.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section id="skills" className={`${styles.section} ${styles.reveal}`}>
          <h2 className={styles.sectionTitle}>Skills</h2>
          <div className={styles.skillsGrid}>
            {skillCategories.map((category) => (
              <article
                key={category.key}
                className={`${styles.skillCategory} ${styles[`cat-${category.key}`] || ""}`}
              >
                <header className={styles.skillCategoryHeader}>
                  <span className={styles.skillCategorySymbol}>{category.symbol}</span>
                  <h3 className={styles.skillCategoryLabel}>{category.label}</h3>
                </header>
                <ul className={styles.skillChipList}>
                  {category.items.map((item) => (
                    <li key={item} className={styles.skillChip}>
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="hobbies" className={`${styles.section} ${styles.reveal}`}>
          <h2 className={styles.sectionTitle}>Hobbies</h2>
          <div className={styles.hobbiesGrid}>
            <article className={styles.hobbyCard}>
              <h3>Football</h3>
              <p>
                I am a huge football fan and a loyal Manchester United supporter. I enjoy following the sport overall,
                from league football to major international tournaments.
              </p>
            </article>
            <article className={styles.hobbyCard}>
              <h3>Music</h3>
              <p>
                I am also a part-time singer and flutist. Feel free to hit me up and check out my band on Instagram:{" "}
                <a href="https://instagram.com/maggi_melodies" target="_blank" rel="noreferrer">
                  @maggi_melodies
                </a>
                .
              </p>
            </article>
          </div>
        </section>

      </main>
    </div>
  );
}
