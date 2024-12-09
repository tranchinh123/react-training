import { Book } from '../types';
import { Category } from '../types';
import { Comment } from '../types';

export const book: Book = {
  id: '63d7755f50f3cca31911ea67',
  title: 'Nostrud commodo sint reprehenderit duis ad sit aute.',
  author: 'Naomi',
  category: 'contemporary',
  publishedYear: 2016,
  publisher: 'Liliana',
  description:
    'Veniam laborum sint magna in sit pariatur irure laboris anim et. Consequat ex duis sunt et labore consequat nisi. Ea amet officia ullamco nostrud officia irure duis nulla exercitation veniam sint ut. Culpa irure excepteur ea qui sit aliqua Lorem nulla ut minim culpa.\r\n',
  cover: 'https://i.ibb.co/ZSRxJHH/book-1.png',
  comments: [
    {
      id: 1,
      author: 'David',
      comment: 'In dolore ad commodo proident sit commodo ad et in magna id.',
    },
  ],
};

export const mockBooks: Book[] = [
  {
    id: '63d7755f50f3cca31911ea67',
    title: 'Nostrud commodo sint reprehenderit duis ad sit aute.',
    author: 'Naomi',
    category: 'contemporary',
    publishedYear: 2016,
    publisher: 'Liliana',
    description:
      'Veniam laborum sint magna in sit pariatur irure laboris anim et. Consequat ex duis sunt et labore consequat nisi. Ea amet officia ullamco nostrud officia irure duis nulla exercitation veniam sint ut. Culpa irure excepteur ea qui sit aliqua Lorem nulla ut minim culpa.\r\n',
    cover: 'https://i.ibb.co/ZSRxJHH/book-1.png',
    comments: [
      {
        id: 1,
        author: 'David',
        comment: 'In dolore ad commodo proident sit commodo ad et in magna id.',
      },
    ],
  },
  {
    id: '63d7755f50f3cca31911ea99',
    title: 'Nostrud commodo sint reprehenderit duis ad sit aute.',
    author: 'Henry',
    category: 'adventure',
    publishedYear: 2018,
    publisher: 'Lisa',
    description:
      'Veniam laborum sint magna in sit pariatur irure laboris anim et. Consequat ex duis sunt et labore consequat nisi. Ea amet officia ullamco nostrud officia irure duis nulla exercitation veniam sint ut. Culpa irure excepteur ea qui sit aliqua Lorem nulla ut minim culpa.\r\n',
    cover: 'https://i.ibb.co/ZSRxJHH/book-1.png',
    comments: [
      {
        id: 1,
        author: 'David',
        comment: 'In dolore ad commodo proident sit commodo ad et in magna id.',
      },
    ],
  },
];

export const mockCategories: Category[] = [
  { id: 1, name: 'Adventure', totalBooks: 100, slug: 'adventure' },
  { id: 2, name: 'Romance', totalBooks: 80, slug: 'romance' },
];

export const comments: Comment[] = [
  {
    id: 1,
    author: 'John',
    comment: 'Hello!',
  },
  {
    id: 2,
    author: 'Henry',
    comment: 'Test!',
  },
];
