import MainContentSection from '.';
import { MemoryRouter } from 'react-router-dom';
import { StoryFn, Meta } from '@storybook/react';
import { Book } from '../../types';

export default {
  title: 'Components/MainContentSection',
  component: MainContentSection,
} as Meta;

interface MainContentSectionArgs {
  book: Book;
}

// Create a Template of type Story
const Template: StoryFn<MainContentSectionArgs> = (args) => (
  <MemoryRouter>
    <MainContentSection {...args} />
  </MemoryRouter>
);

// Create the Default story
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
};
