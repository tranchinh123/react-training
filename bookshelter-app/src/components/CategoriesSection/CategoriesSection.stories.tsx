import CategoriesSection from '.';
import { MemoryRouter } from 'react-router-dom';
import { StoryFn, Meta } from '@storybook/react';
import { Book } from '../../types';

export default {
  title: 'Components/CategoriesSection',
  component: CategoriesSection,
} as Meta;

const books: Book[] = [
  {
    id: '63d7755f6ac4de76afd58e51',
    title: 'Non sunt culpa Lorem aute consequat pariatur sit.',
    author: 'Dora',
    category: 'adventure',
    publishedYear: 2019,
    publisher: 'Warren',
    description:
      'Id in ullamco eu mollit adipisicing eiusmod mollit. Incididunt adipisicing irure cupidatat proident anim. Laborum occaecat excepteur nisi ut cillum nisi do. Id minim eiusmod non pariatur excepteur proident eiusmod aliqua ex.\r\n',
    cover: 'https://i.ibb.co/ZSRxJHH/book-1.png',
  },
];
const Template: StoryFn = (args) => (
  <MemoryRouter>
    <CategoriesSection {...args} />
  </MemoryRouter>
);

export const Default = Template.bind({});
Default.args = {
  currentCategory: 'Adventure',
  currentTotalBook: 30,
  books: books,
};
