import SearchInput from '.';
import { MemoryRouter } from 'react-router-dom';
import { StoryFn, Meta } from '@storybook/react';

export default {
  title: 'Components/SearchInput',
  component: SearchInput,
} as Meta;

interface SearchInputArgs {
  onOpen: () => void;
  searchTerm: string;
  onHandleChange: () => void;
  onHandleKeyDown: () => void;
}

// Create a Template of type Story
const Template: StoryFn<SearchInputArgs> = (args) => (
  <MemoryRouter>
    <SearchInput {...args} />
  </MemoryRouter>
);

// Create the Default story
export const Default = Template.bind({});
Default.args = {
  onOpen: () => console.log('Input opened'),
  searchTerm: '',
  onHandleKeyDown: () => {},
  onHandleChange: () => {},
};
