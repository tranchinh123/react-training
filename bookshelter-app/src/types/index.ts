export interface Categories {
  id: number;
  name: string;
  totalBooks: number;
  slug?: string;
}

export interface Books {
  id: string;
  title: string;
  author: string;
  category: string;
  publishedYear: number;
  publisher: string;
  description: string;
  cover: string;
}
