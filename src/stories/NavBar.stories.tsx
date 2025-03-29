import type { Meta } from "@storybook/react";
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

export const Default = () => {
  return (
    <NavBar
      themeSwitch="light"
      setThemeSwitch={() => {}}
      style={{ position: "absolute" }}
    />
  );
};
