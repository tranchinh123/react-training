import InfoContentSection from '.';
import { MemoryRouter } from 'react-router-dom';
import { StoryFn, Meta } from '@storybook/react';
import { Book } from '../../types';

export default {
  title: 'Components/InfoContentSection',
  component: InfoContentSection,
} as Meta;

interface InfoContentSectionArgs {
  book: Book;
}

// Create a Template of type Story
const Template: StoryFn<InfoContentSectionArgs> = (args) => (
  <MemoryRouter>
    <InfoContentSection {...args} />
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
