import type { Meta } from "@storybook/react";
import TypedText from "@/components/TypedText";
import Text from "@/components/Text";

const meta = {
  title: "Example/TypedText",
  component: TypedText,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
  tags: ["autodocs"],
} satisfies Meta<typeof TypedText>;

export default meta;

export const Default = (args: { text: string }) => (
  <Text>
    <TypedText
      text={args?.text || "The quick brown fox jumped over the lazy dog."}
    />
  </Text>
);
