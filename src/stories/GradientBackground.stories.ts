import type { Meta, StoryObj } from "@storybook/react";
import GradientBackground from "@/components/GradientBackground";

const meta = {
  title: "Example/GradientBackground",
  component: GradientBackground,
  parameters: {
    layout: "fullscreen",
  },

  argTypes: {},
} satisfies Meta<typeof GradientBackground>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
