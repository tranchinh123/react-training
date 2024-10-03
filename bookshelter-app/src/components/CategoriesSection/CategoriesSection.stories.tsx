import CategoriesSection from '.';
import { MemoryRouter } from 'react-router-dom';
import { StoryFn, Meta } from '@storybook/react';
import { Book } from '../../types';

export default {
  title: 'Components/CategoriesSection',
  component: CategoriesSection,
} as Meta;

interface CategoriesSectionArgs {
  currentCategory: string;
  currentTotalBook: number;
  isFilteredSlug: boolean;
  isFilteredName: boolean;
  books: Book[];
}

const Template: StoryFn<CategoriesSectionArgs> = (args) => (
  <MemoryRouter>
    <CategoriesSection {...args} />
  </MemoryRouter>
);

export const Default = Template.bind({});
Default.args = {
  currentCategory: 'Adventure',
  currentTotalBook: 30,
};
