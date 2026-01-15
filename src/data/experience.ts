export type ExperienceItem = {
  role: string;
  organization: string;
  start: string;
  end: string;
  description: string;
};

export const experience: ExperienceItem[] = [
  {
    role: "Undergraduate Research Assistant",
    organization: "Magic Lab, University of Wisconsin–Madison",
    start: "Jan 2024",
    end: "Nov 2025",
    description:
      "Cleaned, processed, and standardized data across multiple research datasets, automated experiment workflows in Python and R, and implemented SEM pipelines to study geometric reasoning.",
  },
  {
    role: "Software Engineering Intern",
    organization: "Alchemy Tech Labs",
    start: "May 2025",
    end: "Aug 2025",
    description:
      "Built and deployed production web services with Next.js and TypeScript, designed a RAG-based AI agent for client documents, and integrated analytics to guide product iteration.",
  },
  {
    role: "Undergraduate Tutor",
    organization: "Department of Computer Sciences, UW–Madison",
    start: "Jan 2024",
    end: "May 2024",
    description:
      "Tutored students in Java-based programming courses (CS300 & CS400), emphasizing object-oriented design, data structures, and best practices.",
  },
  {
    role: "Software Engineering Intern",
    organization: "Evenforce Technologies Pvt. Ltd.",
    start: "Jun 2023",
    end: "Jul 2023",
    description:
      "Improved frontend architecture and REST API integrations for an AI-driven garage platform, reducing onboarding time and query latency.",
  },
];


