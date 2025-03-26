import type { Meta, StoryObj } from "@storybook/react";
import Input from "@/components/Input";
import styled from "styled-components";
import { InputProps } from "@/components/Input/types";

const meta = {
  title: "Example/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = (args: InputProps) => {
  return (
    <Outer>
      <Input placeholder="✏️" {...args} />
    </Outer>
  );
};

const Outer = styled("div")`
  max-width: 300px;
`;
