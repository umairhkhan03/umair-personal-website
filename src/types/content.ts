export interface ContentItem {
  title: string;
  date: string;
  language?: string;
  category?: string;
  slug: string;
  externalLink?: string;
}

export interface ContentConfig {
  title: string;
  basePath: string;
}

export interface MarkdownContent {
  frontmatter: {
    title: string;
    date: string;
    language?: string;
    category?: string;
    tech?: string;
    liveLink?: string;
    githubLink?: string;
  };
  content: string;
}