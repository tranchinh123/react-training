import Logo from '.';
import { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Components/Logo',
  component: Logo,
} as Meta;

type Story = StoryObj<typeof Logo>;

export const Primary: Story = {
  args: {},
};
