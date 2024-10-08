import BookCategory from '.';
import { MemoryRouter } from 'react-router-dom';
import { StoryFn, Meta } from '@storybook/react';

export default {
  title: 'Components/BookCategory',
  component: BookCategory,
} as Meta;

interface BookCategoryArgs {
  name: string;
  totalBooks: number;
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
  name: 'Adventure',
  totalBooks: 22,
  color: 'blue',
  onClick: () => {
    console.log('abc');
  },
};
