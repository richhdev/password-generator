import type { Meta, StoryObj } from "@storybook/react";
import styled, { ThemeProvider } from "styled-components";
import Button from "@/components/Button";
import { themeLight, themeDark } from "@/theme";
import IconThemeLight from "@/icons/IconThemeLight";
import IconThemeDark from "@/icons/IconThemeDark";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },

  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    children: "Button",
  },
};

export const Loading: Story = {
  args: {
    title: "loading",
    children: "Loading",
    loading: true,
  },
};

export const Outline: Story = {
  args: {
    title: "Outline",
    children: "Outline",
    outline: true,
  },
};

export const Ghost: Story = {
  args: {
    title: "Ghost",
    children: "Ghost",
    ghost: true,
  },
};

export const Themes = () => {
  return (
    <Outer>
      <Group>
        <ThemeProvider theme={themeLight}>
          <IconContainer>
            <IconThemeLight />
          </IconContainer>
          <Item style={{ backgroundColor: "#FFFFFF" }}>
            <Button>Button</Button>
          </Item>
          <Item>
            <Button loading>Loading</Button>
          </Item>
          <Item>
            <Button outline>Outline</Button>
          </Item>
          <Item>
            <Button ghost>Ghost</Button>
          </Item>
        </ThemeProvider>
      </Group>
      <Group style={{ backgroundColor: "#000000" }}>
        <ThemeProvider theme={themeDark}>
          <IconContainer>
            <IconThemeDark style={{ color: "#fff" }} />
          </IconContainer>
          <Item>
            <Button>Button</Button>
          </Item>
          <Item>
            <Button loading>Loading</Button>
          </Item>
          <Item>
            <Button outline>Outline</Button>
          </Item>
          <Item>
            <Button ghost>Ghost</Button>
          </Item>
        </ThemeProvider>
      </Group>
    </Outer>
  );
};

const Outer = styled("section")`
  display: flex;
  height: 100%;
  width: 100%;
`;

const Group = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const Item = styled("div")`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 30px;
`;

const IconContainer = styled("div")`
  width: 40px;
  height: 40px;
  padding: 10px;
`;
