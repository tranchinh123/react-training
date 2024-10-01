// BookCard.stories.tsx
import BookCard from '.';
import { StoryFn, Meta } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'Components/BookCard',
  component: BookCard,
} as Meta;

interface BookCardArgs {
  id: string;
  title: string;
  author: string;
  published: number;
  cover: string;
  onHandleClick: () => void;
}

const Template: StoryFn<BookCardArgs> = (args) => (
  <MemoryRouter>
    <BookCard {...args} />
  </MemoryRouter>
);

export const Default = Template.bind({});
Default.args = {
  id: '1',
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  published: 1925,
  cover: 'https://i.ibb.co/ZSRxJHH/book-1.png',
  onHandleClick: () => console.log('Book card clicked!'),
};
