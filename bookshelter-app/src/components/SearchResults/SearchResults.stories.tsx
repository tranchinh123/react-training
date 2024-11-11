import SearchResults from '.';
import { MemoryRouter } from 'react-router-dom';
import { StoryFn, Meta } from '@storybook/react';
import { Book } from '../../types';

export default {
  title: 'Components/SearchResults',
  component: SearchResults,
} as Meta;

interface SearchResultsArgs {
  results: Book[];
  onClose: () => void;
}

const mockBooks: Book[] = [
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
];

// Create a Template of type Story
const Template: StoryFn<SearchResultsArgs> = (args) => (
  <MemoryRouter>
    <SearchResults {...args} />
  </MemoryRouter>
);

// Create the Default story
export const Default = Template.bind({});
Default.args = {
  results: mockBooks,
  onClose: () => {},
};
