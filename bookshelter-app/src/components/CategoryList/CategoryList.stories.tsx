import CategoryList from '.';
import { MemoryRouter } from 'react-router-dom';
import { StoryFn, Meta } from '@storybook/react';
import { Category } from '../../types';

export default {
  title: 'Components/CategoryList',
  component: CategoryList,
} as Meta;

interface CategoryListArgs {
  categories: Category[];
}

// Create a Template of type Story
const Template: StoryFn<CategoryListArgs> = (args) => (
  <MemoryRouter>
    <CategoryList {...args} />
  </MemoryRouter>
);

// Create the Default story
export const Default = Template.bind({});
Default.args = {
  categories: [
    {
      id: 1,
      name: 'Adventure',
      totalBooks: 24,
      slug: 'adventure',
    },
    {
      id: 2,
      name: 'Romance',
      totalBooks: 44,
      slug: 'romance',
    },
    {
      id: 3,
      name: 'Fantasy',
      totalBooks: 44,
      slug: 'fantasy',
    },
  ],
};
