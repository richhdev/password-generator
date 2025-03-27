import type { Meta } from "@storybook/react";
import Input from "@/components/Input";
import { InputProps } from "@/components/Input";

const meta = {
  title: "Example/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
} satisfies Meta<typeof Input>;

export default meta;

export const Default = (args: InputProps) => {
  return (
    <div style={{ maxWidth: "300px" }}>
      <Input placeholder="✏️" {...args} />
    </div>
  );
};
