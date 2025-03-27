import type { Meta, StoryObj } from "@storybook/react";
import Text, {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  I,
  Small,
  Strong,
  U,
  Code,
} from "@/components/Text";

const meta = {
  title: "Example/Text",
  component: Text,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
  tags: ["autodocs"],
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Text",
  },
};

export const Heading1 = () => <H1>Heading 1</H1>;

export const Heading2 = () => <H2>Heading 2</H2>;

export const Heading3 = () => <H3>Heading 3</H3>;

export const Heading4 = () => <H4>Heading 4</H4>;

export const Heading5 = () => <H5>Heading 5</H5>;

export const Heading6 = () => <H6>Heading 6</H6>;

export const StrongText = () => <Strong>Strong</Strong>;

export const SmallText = () => <Small>Small</Small>;

export const ItalicText = () => <I>Italic</I>;

export const UnderlineText = () => <U>Underline</U>;

export const CodeText = () => <Code>Code</Code>;
