import BookCardList from '.';
import { MemoryRouter } from 'react-router-dom';
import { StoryFn, Meta } from '@storybook/react';
import { Book } from '../../types';

export default {
  title: 'Components/BookCardList',
  component: BookCardList,
} as Meta;

const mockBooks: Book[] = [
  {
    id: '63d7755f50f3cca31911ea67',
    title: 'Nostrud commodo sint reprehenderit duis ad sit aute.',
    author: 'Naomi',
    category: 'contemporary',
    publishedYear: 2016,
    publisher: 'Liliana',
    description:
      'Veniam laborum sint magna in sit pariatur irure laboris anim et. Consequat ex duis sunt et labore consequat nisi. Ea amet officia ullamco nostrud officia irure duis nulla exercitation veniam sint ut. Culpa irure excepteur ea qui sit aliqua Lorem nulla ut minim culpa.\r\n',
    cover: 'https://i.ibb.co/ZSRxJHH/book-1.png',
    comments: [
      {
        id: 1,
        author: 'David',
        comment: 'In dolore ad commodo proident sit commodo ad et in magna id.',
      },
    ],
  },
  {
    id: '63d7755ffb564faad7051597',
    title: 'In dolore ad commodo proident sit commodo ad et in magna id.',
    author: 'Huber',
    category: 'adventure',
    publishedYear: 2021,
    publisher: 'Walker',
    description:
      'Est veniam id voluptate duis sit ipsum amet. Laborum amet laboris laborum id. Pariatur commodo qui aliquip adipisicing occaecat minim Lorem laborum qui commodo.\r\n',
    cover: 'https://i.ibb.co/ZSRxJHH/book-1.png',
    comments: [
      {
        id: 1,
        author: 'David',
        comment: 'In dolore ad commodo proident sit commodo ad et in magna id.',
      },
    ],
  },
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

const Template: StoryFn<{ books: Book[] }> = (args) => (
  <MemoryRouter>
    <BookCardList {...args} />
  </MemoryRouter>
);

export const Default = Template.bind({});
Default.args = {
  books: mockBooks,
};
