"use client";

import { blogPosts } from "../data/blog";

const Blog = () => {
  return (
    <section className="scroll-mt-24 py-12 sm:py-16">
      <div className="space-y-8">
        <div className="space-y-3 text-center">
          <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
            Blog
          </h2>
          <p className="text-sm text-slate-300 sm:text-base">
            Thoughts, tutorials, and insights on web development, data science, and technology.
          </p>
        </div>
        {blogPosts.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="group flex flex-col rounded-xl border border-slate-800/70 bg-slate-900/60 p-5 shadow-sm shadow-slate-950/40 transition hover:border-slate-500/80 hover:bg-slate-900"
              >
                <div className="mb-3 flex items-center gap-2 text-xs text-slate-400">
                  <time dateTime={post.date}>{post.date}</time>
                  {post.category && (
                    <>
                      <span>·</span>
                      <span className="text-slate-500">{post.category}</span>
                    </>
                  )}
                </div>
                <h3 className="mb-2 text-sm font-semibold text-slate-50 sm:text-base">
                  {post.title}
                </h3>
                <p className="mb-4 flex-1 text-xs leading-relaxed text-slate-300 sm:text-sm">
                  {post.excerpt}
                </p>
                {post.link && (
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-medium text-sky-400 transition group-hover:text-sky-300"
                  >
                    Read more
                    <span className="text-xs">→</span>
                  </a>
                )}
              </article>
            ))}
          </div>
        ) : (
          <div className="py-12 text-center">
            <p className="text-sm text-slate-400">
              Blog posts coming soon...
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;

