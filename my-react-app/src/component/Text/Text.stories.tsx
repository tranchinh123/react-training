import Text from "./Text";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Components/Text",
  component: Text,
} as Meta;

type Story = StoryObj<typeof Text>;

export const Primary: Story = {
  args: {
    title: "Hello",
    variant: "primary-text",
  },
};

export const Secondary: Story = {
  args: {
    title: "Hi",
    variant: "secondary-text",
  },
};
