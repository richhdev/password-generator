import type { Meta, StoryObj } from "@storybook/react";
import Checkbox from "@/components/Checkbox";

const meta = {
  title: "Example/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { name: "checkbox" } };
