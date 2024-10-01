import BookCategory from '.';
import { MemoryRouter } from 'react-router-dom';
import { StoryFn, Meta } from '@storybook/react';
import { Category } from '../../types';

export default {
  title: 'Components/BookCategory',
  component: BookCategory,
} as Meta;

interface BookCategoryArgs {
  Category: Category;
  color: string;
  onClick: () => void;
}

const Template: StoryFn<BookCategoryArgs> = (args) => (
  <MemoryRouter>
    <BookCategory {...args} />
  </MemoryRouter>
);

export const Default = Template.bind({});
Default.args = {
  Category: {
    id: 1,
    name: 'Adventure',
    totalBooks: 22,
    slug: 'adventure',
  },
  color: 'blue',
  onClick: () => {
    console.log('abc');
  },
};
