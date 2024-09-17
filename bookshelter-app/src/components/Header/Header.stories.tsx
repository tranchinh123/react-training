import Header from '.';
import { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Components/Header',
  component: Header,
} as Meta;

type Story = StoryObj<typeof Header>;

export const Primary: Story = {
  args: {},
};
