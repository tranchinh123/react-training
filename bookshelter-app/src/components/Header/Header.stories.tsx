import Header from '.';
import { MemoryRouter } from 'react-router-dom';
import { StoryFn, Meta } from '@storybook/react';

export default {
  title: 'Components/Header',
  component: Header,
} as Meta;

interface HeaderProps {
  onToggleMenu: () => void;
}

const Template: StoryFn<HeaderProps> = (args) => (
  <MemoryRouter>
    <Header {...args} />
  </MemoryRouter>
);
export const Default = Template.bind({});
