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

export interface Toast {
  message: string;
  type: 'success' | 'error';
}

export interface ToastContextType {
  toast: Toast | null;
  showToast: (message: string, type: 'success' | 'error') => void;
}

export interface SVGprop {
  width: string;
  height: string;
}
