import type { Meta, StoryObj } from "@storybook/react";
import Checkbox from "@/components/Checkbox";
import TypedText from "@/components/TypedText";
import Text from "@/components/Text";

const meta = {
  title: "Example/TypedText",
  component: TypedText,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
} satisfies Meta<typeof TypedText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = (args: { text: string }) => (
  <Text>
    <TypedText
      text={args?.text || "The quick brown fox jumped over the lazy dog."}
    />
  </Text>
);
