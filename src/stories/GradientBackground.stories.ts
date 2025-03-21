import type { Meta, StoryObj } from "@storybook/react";

import GradientBackground from "@/components/GradientBackground";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/GradientBackground",
  component: GradientBackground,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },

  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof GradientBackground>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {},
};
