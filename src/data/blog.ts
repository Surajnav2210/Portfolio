export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category?: string;
  link?: string;
};

export const blogPosts: BlogPost[] = [
  // Add your blog posts here
  // Example format:
  // {
  //   id: "1",
  //   title: "Post Title",
  //   excerpt: "Brief description of the blog post...",
  //   date: "2024-01-15",
  //   category: "Web Development",
  //   link: "https://your-blog-url.com/post",
  // },
];

