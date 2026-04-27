export default function sitemap() {
  const base = "https://surajnaveen.dev";
  const lastModified = new Date();
  return [
    {
      url: `${base}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
