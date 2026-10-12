"use client";

import { useEffect } from "react";

export default function Interactions() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

    const head = document.querySelector(".topbar");
    const links = Array.from(document.querySelectorAll(".topnav a[href^='#']"));
    const sections = Array.from(document.querySelectorAll("section[id], section[data-nav]"))
      .map((el) => ({ el, a: links.find((a) => a.getAttribute("href") === `#${el.dataset.nav || el.id}`) }))
      .filter((s) => s.a);

    let ticking = false;
    const frame = () => {
      head?.classList.toggle("scrolled", window.scrollY > 12);
      const probe = window.innerHeight * 0.4;
      let current = null;
      sections.forEach((s) => {
        if (s.el.getBoundingClientRect().top <= probe) current = s;
      });
      links.forEach((a) => a.classList.toggle("active", a === current?.a));
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(frame);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    frame();
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return null;
}
