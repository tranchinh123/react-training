import CategoriesSection from '.';
import { MemoryRouter } from 'react-router-dom';
import { StoryFn, Meta } from '@storybook/react';

export default {
  title: 'Components/CategoriesSection',
  component: CategoriesSection,
} as Meta;

interface CategoriesSectionArgs {
  currentCategory: string;
  currentTotalBook: number;
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
