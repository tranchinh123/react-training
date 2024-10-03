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
    id: '1',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    publishedYear: 1925,
    cover: 'https://i.ibb.co/ZSRxJHH/book-1.png',
    category: 'Classic',
    publisher: 'Scribner',
    description: 'A novel set in the Roaring Twenties.',
  },
  {
    id: '2',
    title: '1984',
    author: 'George Orwell',
    publishedYear: 1949,
    cover: 'https://i.ibb.co/ZSRxJHH/book-1.png',
    category: 'Dystopian',
    publisher: 'Secker & Warburg',
    description: 'A novel about totalitarianism and surveillance.',
  },
  {
    id: '3',
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    publishedYear: 1960,
    cover: 'https://i.ibb.co/ZSRxJHH/book-1.png',
    category: 'Southern Gothic',
    publisher: 'J.B. Lippincott & Co.',
    description: 'A novel about racial injustice in the Deep South.',
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
