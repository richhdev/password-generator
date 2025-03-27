import type { Meta } from "@storybook/react";
import PasswordGenerator from "@/components/PasswordGenerator";

const meta = {
  title: "Example/PasswordGenerator",
  component: PasswordGenerator,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
} satisfies Meta<typeof PasswordGenerator>;

export default meta;

export const Default = () => {
  return (
    <div>
      <PasswordGenerator />
    </div>
  );
};
