export type Project = {
  title: string;
  description: string;
  link?: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    title: "StudyGraph AI",
    description:
      "Transforms long-form study notes into clear concept graphs, using TensorFlow-based embeddings and similarity scoring to surface key topics and prerequisite relationships.",
    link: "https://github.com/Surajnav2210",
    tags: ["TensorFlow", "FastAPI", "PostgreSQL", "React", "D3.js"],
  },
  {
    title: "Sponta App",
    description:
      "iOS social challenge app built with React Native, Firebase, and Node.js, featuring real-time challenge feeds, camera-based submissions, and push notifications.",
    link: "https://github.com/Surajnav2210",
    tags: ["React Native", "Firebase", "Node.js"],
  },
  {
    title: "RAG-based AI Agent for Client Insights",
    description:
      "Production RAG agent leveraging semantic search and embeddings over client documents to evaluate response quality and improve answer accuracy.",
    link: "https://github.com/Surajnav2210",
    tags: ["RAG", "Embeddings", "Next.js", "TypeScript"],
  },
];


