import InfoContentSection from '.';
import { MemoryRouter } from 'react-router-dom';
import { StoryFn, Meta } from '@storybook/react';

export default {
  title: 'Components/InfoContentSection',
  component: InfoContentSection,
} as Meta;

interface InfoContentSectionArgs {
  author: string;
  publishedYear: number;
  publisher: string;
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
  author: 'F. Scott Fitzgerald',
  publishedYear: 1925,
  publisher: 'Scribner',
};
