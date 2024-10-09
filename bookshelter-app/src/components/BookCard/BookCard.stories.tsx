// BookCard.stories.tsx
import BookCard from '.';
import { StoryFn, Meta } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { Book } from '../../types';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/BookCard',
  component: BookCard,
} as Meta;

interface BookCardArgs {
  book: Book;
  onHandleClick: () => void;
}

const Template: StoryFn<BookCardArgs> = (args) => (
  <MemoryRouter>
    <BookCard {...args} />
  </MemoryRouter>
);

export const Default = Template.bind({});
Default.args = {
  book: {
    id: '1',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    publishedYear: 1925,
    cover: 'https://i.ibb.co/ZSRxJHH/book-1.png',
    category: 'Classic',
    publisher: 'Scribner',
    description: 'A novel set in the Roaring Twenties.',
  },
  onHandleClick: action('bookCard-clicked'),
};
