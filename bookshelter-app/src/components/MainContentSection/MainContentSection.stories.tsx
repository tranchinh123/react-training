import MainContentSection from '.';
import { MemoryRouter } from 'react-router-dom';
import { StoryFn, Meta } from '@storybook/react';

export default {
  title: 'Components/MainContentSection',
  component: MainContentSection,
} as Meta;

interface MainContentSectionArgs {
  cover: string;
  description: string;
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
  cover: 'https://i.ibb.co/ZSRxJHH/book-1.png',
  description: 'A novel set in the Roaring Twenties.',
};
