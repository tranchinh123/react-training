export interface Category {
  id: number;
  name: string;
  totalBooks: number;
  slug: string;
}

export interface Comment {
  id?: number;
  author: string;
  comment: string;
}
export interface Book {
  id: string;
  title: string;
  author: string;
  category: string;
  publishedYear: number;
  publisher: string;
  description: string;
  cover: string;
  comments: Comment[];
}
