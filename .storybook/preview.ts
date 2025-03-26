import type { Preview } from "@storybook/react";
import { withThemeProvider } from "../src/stories/withThemeProvider"; // Adjust the path

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

export const decorators = [withThemeProvider];
