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
    id: '63d7755fa2201e08da9b2e46',
    title: 'Dolore aliquip pariatur deserunt ullamco dolore ad ut nulla.',
    author: 'Burke',
    category: 'adventure',
    publishedYear: 2020,
    publisher: 'Stanley',
    description:
      'Deserunt dolor eiusmod consectetur nisi. Nulla eu sit deserunt voluptate voluptate id nisi cillum officia voluptate dolore consequat est. Nostrud cupidatat mollit deserunt ea magna anim officia anim amet ex pariatur. Proident laborum deserunt tempor aute ut est dolor ut nostrud aliquip elit. Excepteur laboris esse sunt proident tempor sit. Enim fugiat voluptate et consequat in excepteur ut commodo.\r\n',
    cover: 'https://i.ibb.co/ZSRxJHH/book-1.png',
    comments: [
      {
        id: 1,
        author: 'David',
        comment: 'In dolore ad commodo proident sit commodo ad et in magna id.',
      },
      {
        id: 2,
        author: 'Lisa',
        comment: 'In dolore ad commodo proident sit commodo ad et in magna id.',
      },
      {
        id: 3,
        author: 'Henry',
        comment: 'In dolore ad commodo proident sit commodo ad et in magna id.',
      },
    ],
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
