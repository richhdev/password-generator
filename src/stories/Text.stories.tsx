import type { Meta, StoryObj } from "@storybook/react";
import styled from "styled-components";
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
} from "@/components/Text";
import Stack from "@/components/Stack";
import { Code } from "@/components/Text/Text";

const meta = {
  title: "Example/Text",
  component: Text,
  parameters: {
    layout: "centered",
  },

  argTypes: {},
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Text",
  },
};

export const Everything = () => {
  return (
    <Outer>
      <Stack>
        <H1>Heading 1</H1>
        <H2>Heading 2</H2>
        <H3>Heading 3</H3>
        <H4>Heading 4</H4>
        <H5>Heading 5</H5>
        <H6>Heading 6</H6>
        <Text>Text</Text>
        <Strong>Strong</Strong>
        <Small>Small</Small>
        <I>Italic</I>
        <U>Underline</U>
        <div>
          <Code>Code</Code>
        </div>
      </Stack>
    </Outer>
  );
};

const Outer = styled("section")`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 30px;
  text-align: center;
`;
