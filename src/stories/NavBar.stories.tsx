import type { Meta, StoryObj } from "@storybook/react";
import NavBar from "@/components/NavBar";

const meta = {
  title: "Example/NavBar",
  component: NavBar,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
} satisfies Meta<typeof NavBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = () => {
  return (
    <NavBar
      className="dude"
      themeSwitch="light"
      setThemeSwitch={() => {}}
      style={{ position: "absolute" }}
    />
  );
};
