import SearchInput from '.';
import { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Components/SearchInput',
  component: SearchInput,
} as Meta;

type Story = StoryObj<typeof SearchInput>;

export const Primary: Story = {
  args: {},
};
