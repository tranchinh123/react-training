import SearchInput from '.';
import { MemoryRouter } from 'react-router-dom';
import { Book } from '../../types'; // Adjust the import path as necessary
import { StoryFn, Meta } from '@storybook/react'; // Import Story and Meta types

export default {
  title: 'Components/SearchInput',
  component: SearchInput,
} as Meta;

interface SearchInputArgs {
  setResults: (results: Book[]) => void;
  onOpen: () => void;
  onclose: () => void;
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
  setResults: (results: Book[]) => console.log('Results:', results),
  onOpen: () => console.log('Input opened'),
  onclose: () => console.log('Input closed'),
};
