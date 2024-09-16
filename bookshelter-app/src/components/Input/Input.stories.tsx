import Input from '.';
import { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Components/Input',
  component: Input,
} as Meta;

type Story = StoryObj<typeof Input>;

export const Primary: Story = {
  args: {},
};
