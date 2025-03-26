import type { Meta, StoryObj } from "@storybook/react";
import styled from "styled-components";
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

type Story = StoryObj<typeof meta>;

export const Default = () => {
  return (
    <Outer>
      <PasswordGenerator />
    </Outer>
  );
};

const Outer = styled("div")`
  width: 100%;
  max-width: 600px;
  padding: 30px;
`;
