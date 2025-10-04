export interface ContentItem {
  title: string;
  date: string;
  language?: string;
  category?: string;
  slug: string;
}

export interface ContentConfig {
  title: string;
  basePath: string;
}
